interface MarkdownToolbarProps {
    onInsert: (before: string, after?: string, placeholder?: string) => void;
    labels?: Record<string, string>;
}
export declare function MarkdownToolbar({ onInsert, labels }: MarkdownToolbarProps): import("react/jsx-runtime").JSX.Element;
export {};
