import { Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered, Code, Quote, Link as LinkIcon, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface MarkdownToolbarProps {
  onInsert: (before: string, after?: string, placeholder?: string) => void;
  labels?: Record<string, string>;
}

const toolbarItems = [
  { icon: Bold, key: 'bold', before: '**', after: '**', placeholder: 'bold text' },
  { icon: Italic, key: 'italic', before: '*', after: '*', placeholder: 'italic text' },
  { icon: Heading1, key: 'heading1', before: '# ', after: '', placeholder: 'Heading' },
  { icon: Heading2, key: 'heading2', before: '## ', after: '', placeholder: 'Heading' },
  { icon: Heading3, key: 'heading3', before: '### ', after: '', placeholder: 'Heading' },
  { icon: List, key: 'list', before: '- ', after: '', placeholder: 'List item' },
  { icon: ListOrdered, key: 'orderedList', before: '1. ', after: '', placeholder: 'List item' },
  { icon: Code, key: 'code', before: '`', after: '`', placeholder: 'code' },
  { icon: Quote, key: 'quote', before: '> ', after: '', placeholder: 'Quote' },
  { icon: LinkIcon, key: 'link', before: '[', after: '](url)', placeholder: 'link text' },
  { icon: Minus, key: 'divider', before: '\n---\n', after: '', placeholder: '' },
];

export function MarkdownToolbar({ onInsert, labels = {} }: MarkdownToolbarProps) {
  const getLabel = (key: string) => labels[key] || key.charAt(0).toUpperCase() + key.slice(1);

  return (
    <TooltipProvider delayDuration={300}>
      <div className="flex items-center gap-0.5 p-1 border-b border-border bg-muted/30 rounded-t-xl flex-wrap">
        {toolbarItems.map((item, index) => (
          <Tooltip key={`${item.key}-${index}`}>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                onClick={() => onInsert(item.before, item.after, item.placeholder)}
              >
                <item.icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs">
              {getLabel(item.key)}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
