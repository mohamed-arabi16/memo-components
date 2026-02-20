interface SplashScreenProps {
    children: React.ReactNode;
    labels?: Record<string, string>;
    onComplete?: () => void;
    storageKey?: string;
    simulateLoadingTime?: number;
}
export declare function SplashScreen({ children, labels, onComplete, storageKey, simulateLoadingTime }: SplashScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
