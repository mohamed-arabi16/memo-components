import { Search, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface NoteSearchProps {
  value: string;
  onChange: (value: string) => void;
  labels?: Record<string, string>;
  dir?: 'ltr' | 'rtl';
}

export function NoteSearch({ value, onChange, labels = {}, dir = 'ltr' }: NoteSearchProps) {
  const placeholder = labels.searchPlaceholder || 'Search notes...';

  return (
    <div className="relative">
      <Search className={`absolute ${dir === 'rtl' ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${dir === 'rtl' ? 'pr-9 pl-9' : 'pl-9 pr-9'}`}
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          className={`absolute ${dir === 'rtl' ? 'left-1' : 'right-1'} top-1/2 -translate-y-1/2 h-7 w-7`}
          onClick={() => onChange('')}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
