import { SupabaseClient } from '@supabase/supabase-js';
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
export declare function useRecentNotes(supabaseClient: SupabaseClient, user: {
    id: string;
} | null | undefined, limit?: number): {
    notes: Note[];
    loading: boolean;
    refetch: () => Promise<void>;
    deleteNote: (noteId: string) => Promise<boolean>;
    searchQuery: string;
    setSearchQuery: import('react').Dispatch<import('react').SetStateAction<string>>;
};
