import { SupabaseClient } from '@supabase/supabase-js';
interface RecentNotesProps {
    supabaseClient: SupabaseClient;
    user?: {
        id: string;
    } | null;
    labels?: Record<string, string>;
    onNavigate?: (id: string) => void;
    dir?: 'ltr' | 'rtl';
    onToast?: (title: string, description: string, variant?: 'default' | 'destructive') => void;
}
export declare function RecentNotes({ supabaseClient, user, labels, onNavigate, dir, onToast }: RecentNotesProps): import("react/jsx-runtime").JSX.Element;
export {};
