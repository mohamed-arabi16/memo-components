interface ThemeToggleProps {
    theme?: 'light' | 'dark' | 'system' | string;
    onThemeChange?: (theme: string) => void;
    labels?: Record<string, string>;
}
export declare function ThemeToggle({ theme, onThemeChange, labels }: ThemeToggleProps): import("react/jsx-runtime").JSX.Element;
export {};
