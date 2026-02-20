import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface ThemeToggleProps {
  theme?: 'light' | 'dark' | 'system' | string;
  onThemeChange?: (theme: string) => void;
  labels?: Record<string, string>;
}

export function ThemeToggle({ theme = 'system', onThemeChange, labels = {} }: ThemeToggleProps) {
  const t = (key: string, defaultMsg: string) => labels[key] || defaultMsg;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('toggleTheme', 'Toggle theme')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onThemeChange && onThemeChange('light')}>
          {t('light', 'Light')} {theme === 'light' && '✓'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onThemeChange && onThemeChange('dark')}>
          {t('dark', 'Dark')} {theme === 'dark' && '✓'}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onThemeChange && onThemeChange('system')}>
          {t('system', 'System')} {theme === 'system' && '✓'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
