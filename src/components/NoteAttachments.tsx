import { useState, useEffect } from 'react';
import { Upload, X, File, Image as ImageIcon, Download } from 'lucide-react';
import { Button } from './ui/button';
import type { SupabaseClient } from '@supabase/supabase-js';

// Note: Removed toast from the internal component as it requires useToast from a specific path.
// If you want toasts in the package, you need to either export the toaster from the package or pass an onToast prop.
// For now, we will handle errors via console or basic alerts. A better real-world library would emit onError events.

interface Attachment {
  id: string;
  file_name: string;
  file_size: number;
  file_type: string;
  storage_path: string;
  created_at: string;
}

interface NoteAttachmentsProps {
  noteId?: string;
  readOnly?: boolean;
  supabaseClient: SupabaseClient;
  labels?: Record<string, string>;
  onError?: (msg: string) => void;
  onSuccess?: (msg: string) => void;
}

export function NoteAttachments({
  noteId,
  readOnly = false,
  supabaseClient,
  labels = {},
  onError = console.error,
  onSuccess = console.log
}: NoteAttachmentsProps) {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const t = (key: string, fallback: string) => labels[key] || fallback;

  useEffect(() => {
    if (noteId) {
      loadAttachments();
    } else {
      setLoading(false);
    }
  }, [noteId]);

  const loadAttachments = async () => {
    if (!noteId) return;

    try {
      const { data, error } = await supabaseClient
        .from('note_attachments')
        .select('*')
        .eq('note_id', noteId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAttachments((data || []) as Attachment[]);
    } catch (error) {
      console.error('Error loading attachments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!noteId || !event.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (file.size > maxSize) {
      onError(t('uploadFailedSize', 'File size must be less than 10MB'));
      return;
    }

    setUploading(true);

    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const fileExt = file.name.split('.').pop();
      const fileName = `${noteId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabaseClient.storage
        .from('note-attachments')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { error: dbError } = await supabaseClient
        .from('note_attachments')
        .insert({
          note_id: noteId,
          user_id: user.id,
          file_name: file.name,
          file_size: file.size,
          file_type: file.type,
          storage_path: fileName,
        });

      if (dbError) throw dbError;

      onSuccess(t('attachmentUploaded', 'Attachment uploaded successfully'));
      await loadAttachments();
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  const handleDelete = async (attachment: Attachment) => {
    try {
      const { error: storageError } = await supabaseClient.storage
        .from('note-attachments')
        .remove([attachment.storage_path]);

      if (storageError) throw storageError;

      const { error: dbError } = await supabaseClient
        .from('note_attachments')
        .delete()
        .eq('id', attachment.id);

      if (dbError) throw dbError;

      onSuccess(t('attachmentDeleted', 'Attachment deleted'));
      await loadAttachments();
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const downloadAttachment = async (attachment: Attachment) => {
    try {
      const { data, error } = await supabaseClient.storage
        .from('note-attachments')
        .download(attachment.storage_path);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = attachment.file_name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      onError(t('downloadFailed', 'Failed to download file'));
    }
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) {
      return <ImageIcon className="w-4 h-4" />;
    }
    return <File className="w-4 h-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (!noteId) return null;

  return (
    <div className="mt-6 pt-6 border-t">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Upload className="w-4 h-4" />
          {t('attachments', 'Attachments')}
        </h3>
        {!readOnly && (
          <div>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileUpload}
              disabled={uploading}
              accept="image/*,.pdf,.doc,.docx,.txt,.zip"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('file-upload')?.click()}
              disabled={uploading}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              {uploading ? t('saving', 'Saving...') : t('addAttachment', 'Add Attachment')}
            </Button>
          </div>
        )}
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground">{t('loading', 'Loading...')}</p>
      ) : attachments.length === 0 ? (
        <p className="text-sm text-muted-foreground italic">{t('noAttachments', 'No attachments')}</p>
      ) : (
        <div className="grid grid-cols-1 gap-2">
          {attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="text-muted-foreground shrink-0">
                  {getFileIcon(attachment.file_type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{attachment.file_name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(attachment.file_size)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => downloadAttachment(attachment)}
                >
                  <Download className="w-4 h-4" />
                </Button>
                {!readOnly && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => handleDelete(attachment)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
