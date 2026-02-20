export interface Note {
    id: string;
    title: string;
    content: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string | null;
    is_private?: boolean;
    slug?: string;
    views?: number;
    [key: string]: any;
}

export interface Attachment {
    id: string;
    note_id: string;
    filename: string;
    content_type: string;
    size: number;
    url: string;
    created_at?: string;
    [key: string]: any;
}

export interface NoteEditorLabels {
    untitled?: string;
    preview?: string;
    seeOriginal?: string;
    copyLink?: string;
    saving?: string;
    update?: string;
    share?: string;
    private?: string;
    public?: string;
    signInToEnable?: string;
    editor?: string;
    addAttachment?: string;
    attachments?: string;
    delete?: string;
    errorSaving?: string;
    successSaving?: string;
    newNote?: string;
    titlePlaceholder?: string;
}

export interface NoteEditorProps {
    note?: Note | null;
    onSave?: (note: Partial<Note>) => Promise<Note>;
    user?: { id: string } | null;
    labels?: NoteEditorLabels;
    supabaseClient?: any;
    readOnly?: boolean;
}
