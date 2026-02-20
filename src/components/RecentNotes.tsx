import { useRecentNotes } from '../hooks/useRecentNotes';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';
import { FileText, Lock, Globe, Clock, Trash2 } from 'lucide-react';
import type { SupabaseClient } from '@supabase/supabase-js';
import { NoteSearch } from './NoteSearch';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

interface RecentNotesProps {
  supabaseClient: SupabaseClient;
  user?: { id: string } | null;
  labels?: Record<string, string>;
  onNavigate?: (id: string) => void;
  dir?: 'ltr' | 'rtl';
  onToast?: (title: string, description: string, variant?: 'default' | 'destructive') => void;
}

export function RecentNotes({
  supabaseClient,
  user,
  labels = {},
  onNavigate,
  dir = 'ltr',
  onToast = (t, d) => console.log(t, d)
}: RecentNotesProps) {
  const { notes, loading, deleteNote, searchQuery, setSearchQuery } = useRecentNotes(supabaseClient, user, 10);

  const t = (key: string, defaultVal: string) => labels[key] || defaultVal;

  const handleDelete = async (noteId: string, noteTitle: string) => {
    const success = await deleteNote(noteId);
    if (success) {
      onToast(
        t('noteDeleted', 'Note Deleted'),
        `"${noteTitle || t('untitled', 'Untitled')}" ${t('noteDeletedMessage', 'was successfully deleted.')}`
      );
    } else {
      onToast(
        t('error', 'Error'),
        t('deleteFailed', 'Failed to delete note'),
        'destructive'
      );
    }
  };

  // Basic format distance to now fallback since we avoid full date-fns dep context
  const formatTimeAgo = (dateStr: string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return t('today', 'today');
    if (days === 1) return t('yesterday', 'yesterday');
    return `${days} ${t('daysAgo', 'days ago')}`;
  };

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  return (
    <Card className="shadow-none relative isolate z-0 bg-transparent sm:bg-card/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          {t('title', 'Recent Notes')}
        </CardTitle>
        <div className="pt-2">
          <NoteSearch
            value={searchQuery}
            onChange={setSearchQuery}
            labels={{ searchPlaceholder: t('searchPlaceholder', 'Search notes...') }}
            dir={dir}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {notes.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-6">
            {searchQuery ? t('noResults', 'No results found') : t('noNotes', 'No notes yet')}
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div
                onClick={() => onNavigate && onNavigate(note.short_id)}
                className={`flex-1 min-w-0 flex items-center gap-3 ${onNavigate ? 'cursor-pointer' : ''}`}
                role={onNavigate ? 'button' : undefined}
                tabIndex={onNavigate ? 0 : undefined}
              >
                <div className="p-1.5 rounded bg-primary/10">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium truncate">
                    {note.title || t('untitled', 'Untitled')}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {note.is_private ? (
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        {t('private', 'Private')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {t('public', 'Public')}
                      </span>
                    )}
                    <span>•</span>
                    <span>
                      {formatTimeAgo(note.updated_at)}
                    </span>
                    {note.expires_at && (
                      <>
                        <span>•</span>
                        <span className="text-amber-600 dark:text-amber-400">
                          {t('expires', 'Expires')} {formatTimeAgo(note.expires_at)}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-muted-foreground hover:text-destructive shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t('deleteConfirm', 'Delete Note')}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {t('deleteMessage', 'Are you sure you want to delete')} "{note.title || t('untitled', 'Untitled')}"?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t('cancel', 'Cancel')}</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDelete(note.id, note.title || '')}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {t('delete', 'Delete')}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
