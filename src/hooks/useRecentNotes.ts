import { useState, useEffect, useCallback } from 'react';
import type { SupabaseClient } from '@supabase/supabase-js';

export interface Note {
  id: string;
  short_id: string;
  title: string | null;
  content: string;
  created_at: string;
  updated_at: string;
  is_private: boolean;
  expires_at: string | null;
}

export function useRecentNotes(
  supabaseClient: SupabaseClient,
  user: { id: string } | null | undefined,
  limit: number = 10
) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchNotes = useCallback(async () => {
    if (!user) {
      setNotes([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabaseClient
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      setNotes(data || []);
    } catch (error) {
      console.error('Error fetching recent notes:', error);
    } finally {
      setLoading(false);
    }
  }, [user, limit, supabaseClient]);

  const deleteNote = async (noteId: string) => {
    try {
      const { error } = await supabaseClient
        .from('notes')
        .delete()
        .eq('id', noteId);

      if (error) throw error;
      setNotes((prev) => prev.filter((note) => note.id !== noteId));
      return true;
    } catch (error) {
      console.error('Error deleting note:', error);
      return false;
    }
  };

  const filteredNotes = notes.filter((note) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const titleMatch = note.title?.toLowerCase().includes(query) || false;
    const contentMatch = note.content.toLowerCase().includes(query) || false;
    return titleMatch || contentMatch;
  });

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  useEffect(() => {
    if (!user) return;

    const channel = supabaseClient
      .channel('notes-realtime')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notes',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setNotes((prev) => [payload.new as Note, ...prev].slice(0, limit));
          } else if (payload.eventType === 'UPDATE') {
            setNotes((prev) =>
              prev.map((note) =>
                note.id === (payload.new as Note).id ? (payload.new as Note) : note
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setNotes((prev) =>
              prev.filter((note) => note.id !== (payload.old as { id: string }).id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [user, limit, supabaseClient]);

  return {
    notes: filteredNotes,
    loading,
    refetch: fetchNotes,
    deleteNote,
    searchQuery,
    setSearchQuery,
  };
}
