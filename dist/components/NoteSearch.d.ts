interface NoteSearchProps {
    value: string;
    onChange: (value: string) => void;
    labels?: Record<string, string>;
    dir?: 'ltr' | 'rtl';
}
export declare function NoteSearch({ value, onChange, labels, dir }: NoteSearchProps): import("react/jsx-runtime").JSX.Element;
export {};
