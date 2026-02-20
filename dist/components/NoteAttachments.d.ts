import { SupabaseClient } from '@supabase/supabase-js';
interface NoteAttachmentsProps {
    noteId?: string;
    readOnly?: boolean;
    supabaseClient: SupabaseClient;
    labels?: Record<string, string>;
    onError?: (msg: string) => void;
    onSuccess?: (msg: string) => void;
}
export declare function NoteAttachments({ noteId, readOnly, supabaseClient, labels, onError, onSuccess }: NoteAttachmentsProps): import("react/jsx-runtime").JSX.Element | null;
export {};
