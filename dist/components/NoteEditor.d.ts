import { NoteEditorProps } from '../types';
export declare function NoteEditor({ initialContent, initialTitle, initialIsPrivate, initialSharingPermission, shortId, noteId, saving, onSave, readOnly, isVisitor, user, labels, supabaseClient, onToast, dir }: NoteEditorProps & {
    initialContent?: string;
    initialTitle?: string;
    initialIsPrivate?: boolean;
    initialExpiresAt?: string | null;
    initialSharingPermission?: 'view' | 'edit';
    shortId?: string;
    noteId?: string;
    saving?: boolean;
    onSave?: (content: string, title: string, isPrivate: boolean, expiresAt: string | null, sharingPermission: 'view' | 'edit') => void;
    readOnly?: boolean;
    isVisitor?: boolean;
    onToast?: (title: string, description: string, variant?: 'default' | 'destructive') => void;
    dir?: 'ltr' | 'rtl';
}): import("react/jsx-runtime").JSX.Element;
