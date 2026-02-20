import { useState, useEffect } from 'react';
import { PenLine } from 'lucide-react';

interface SplashScreenProps {
    children: React.ReactNode;
    labels?: Record<string, string>;
    onComplete?: () => void;
    storageKey?: string;
    simulateLoadingTime?: number;
}

export function SplashScreen({
    children,
    labels = {},
    onComplete,
    storageKey = 'qobouli-seen-splash',
    simulateLoadingTime = 2000
}: SplashScreenProps) {
    const [loading, setLoading] = useState(true);
    const [ready, setReady] = useState(false);
    const [show, setShow] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const t = (key: string, defaultMsg: string) => labels[key] || defaultMsg;

    useEffect(() => {
        // Check if user has seen splash before using the configurable key
        const hasSeenSplash = localStorage.getItem(storageKey);

        if (hasSeenSplash === 'true') {
            setShow(false);
            if (onComplete) onComplete();
            return;
        }

        // Simulate loading time
        const loadingTimer = setTimeout(() => {
            setLoading(false);
            setReady(true);
        }, simulateLoadingTime);

        return () => clearTimeout(loadingTimer);
    }, [storageKey, simulateLoadingTime, onComplete]);

    const handleEnter = () => {
        setFadeOut(true);
        localStorage.setItem(storageKey, 'true');

        setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
        }, 600);
    };

    if (!show) {
        return <>{children}</>;
    }

    return (
        <div
            className={`fixed inset-0 z-50 bg-background transition-opacity duration-500 flex flex-col items-center justify-center px-4 cursor-pointer ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
            onClick={ready ? handleEnter : undefined}
        >
            {/* Decorative gradients */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Logo */}
                <div className="mb-8 animate-in zoom-in duration-500">
                    <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-2xl">
                        <PenLine className="w-16 h-16" />
                    </div>
                </div>

                {/* App name */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards opacity-0">
                    {t('appName', 'App Name')}
                </h1>

                {/* Welcome message */}
                <p className="text-xl text-muted-foreground mb-12 text-center max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-forwards opacity-0">
                    {t('welcomeMessage', 'Welcome to the platform.')}
                </p>

                {/* Feature highlights */}
                <div className="space-y-4 mb-12 self-center text-muted-foreground">
                    <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-forwards opacity-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-lg">{t('feature1', 'Feature 1')}</span>
                    </div>
                    <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-forwards opacity-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-lg">{t('feature2', 'Feature 2')}</span>
                    </div>
                    <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-forwards opacity-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-lg">{t('feature3', 'Feature 3')}</span>
                    </div>
                </div>

                {/* Loading state or Tap to Enter instruction */}
                <div className="h-16 flex items-center justify-center">
                    {loading ? (
                        <div className="flex flex-col items-center gap-3 animate-in fade-in duration-700 delay-1000 fill-mode-forwards opacity-0">
                            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                            <span className="text-sm text-muted-foreground">{t('loadingMsg', 'Loading...')}</span>
                        </div>
                    ) : (
                        <div className="animate-in fade-in duration-700 delay-1000 fill-mode-forwards opacity-0 flex flex-col items-center gap-2">
                            <span className="text-xl font-medium text-primary animate-pulse">
                                {t('tapToEnter', 'Tap Anywhere to Enter')}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
