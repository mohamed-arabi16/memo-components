import { useState, useEffect, useRef, useCallback } from 'react';
import { Copy, Check, ExternalLink, FileText, Eye, Edit3, Lock, Globe, Clock, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MarkdownPreview } from './MarkdownPreview';
import { MarkdownToolbar } from './MarkdownToolbar';
import { NoteAttachments } from './NoteAttachments';
import type { NoteEditorLabels, NoteEditorProps } from '../types';

export function NoteEditor({
  initialContent = '',
  initialTitle = '',
  initialIsPrivate = false,
  initialSharingPermission = 'view',
  shortId,
  noteId,
  saving = false,
  onSave,
  readOnly = false,
  isVisitor = false,
  user,
  labels = {},
  supabaseClient,
  onToast = (t, d) => console.log(t, d),
  dir = 'ltr'
}: NoteEditorProps & {
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
}) {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState(initialTitle);
  const [isPrivate, setIsPrivate] = useState(initialIsPrivate);
  const [sharingPermission, setSharingPermission] = useState<'view' | 'edit'>(initialSharingPermission);
  const [expiration, setExpiration] = useState('never');
  const [showPreview, setShowPreview] = useState(isVisitor);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const t = (key: keyof NoteEditorLabels | string, defaultMsg: string) => (labels as any)[key] || defaultMsg;

  const EXPIRATION_OPTIONS = [
    { value: 'never', label: t('never', 'Never') },
    { value: '1h', label: t('1hour', '1 Hour') },
    { value: '1d', label: t('1day', '1 Day') },
    { value: '1w', label: t('1week', '1 Week') },
    { value: '1m', label: t('1month', '1 Month') },
  ];

  function getExpirationDate(option: string): string | null {
    if (option === 'never') return null;

    const now = new Date();
    switch (option) {
      case '1h':
        return new Date(now.getTime() + 60 * 60 * 1000).toISOString();
      case '1d':
        return new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
      case '1w':
        return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
      case '1m':
        return new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();
      default:
        return null;
    }
  }

  useEffect(() => {
    setContent(initialContent);
    setTitle(initialTitle);
    setIsPrivate(initialIsPrivate);
    setSharingPermission(initialSharingPermission);
  }, [initialContent, initialTitle, initialIsPrivate, initialSharingPermission]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea && !showPreview) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.max(textarea.scrollHeight, 300)}px`;
    }
  }, [content, showPreview]);

  useEffect(() => {
    if (!readOnly && !showPreview && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [readOnly, showPreview]);

  const handleSave = () => {
    if (onSave) {
      const expiresAt = getExpirationDate(expiration);
      onSave(content, title, isPrivate, expiresAt, sharingPermission);
    }
  };

  const copyLink = async () => {
    if (!shortId) return;

    const url = `${window.location.origin}/n/${shortId}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    onToast(
      t('linkCopied', 'Link Copied'),
      url
    );
    setTimeout(() => setCopied(false), 2000);
  };

  const hasContent = content.trim().length > 0;
  const canMakePrivate = !!user;

  const handleToolbarInsert = useCallback((before: string, after: string = '', placeholder: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const textToInsert = selectedText || placeholder;

    const newContent =
      content.substring(0, start) +
      before + textToInsert + after +
      content.substring(end);

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + textToInsert.length + after.length;
      textarea.setSelectionRange(
        selectedText ? newCursorPos : start + before.length,
        selectedText ? newCursorPos : start + before.length + placeholder.length
      );
    }, 0);
  }, [content]);

  return (
    <div className={`w-full max-w-3xl mx-auto animate-fade-in ${dir === 'rtl' ? 'rtl' : 'ltr'}`} dir={dir}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="p-2 rounded-lg bg-primary/10 shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={t('untitled', 'Untitled')}
            disabled={readOnly}
            dir="auto"
            className="text-xl font-medium bg-transparent border-none outline-none placeholder:text-muted-foreground/50 focus:ring-0 min-w-0 flex-1"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            {showPreview ? (
              <>
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">{t('seeOriginal', 'See Original')}</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">{t('preview', 'Preview')}</span>
              </>
            )}
          </Button>

          {shortId && (
            <Button
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="gap-2 glow-hover"
            >
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{t('copyLink', 'Copy Link')}</span>
            </Button>
          )}

          {!readOnly && (
            <Button
              onClick={handleSave}
              disabled={saving || !hasContent}
              className="gap-2"
            >
              {saving ? (
                <span className="animate-pulse">{t('saving', 'Saving...')}</span>
              ) : shortId ? (
                t('update', 'Update')
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('share', 'Share')}</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 mb-4 flex-wrap text-sm">
        {/* Status / Privacy Toggle */}
        <div className="flex items-center gap-2">
          {isPrivate ? (
            <Lock className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Globe className="w-4 h-4 text-muted-foreground" />
          )}
          <Label htmlFor="private-toggle" className="text-muted-foreground cursor-pointer">
            {isPrivate ? t('private', 'Private') : t('public', 'Public')}
          </Label>
          <Switch
            id="private-toggle"
            checked={isPrivate}
            onCheckedChange={setIsPrivate}
            disabled={!canMakePrivate || isVisitor}
          />
          {!canMakePrivate && !isVisitor && (
            <span className="text-xs text-muted-foreground">{t('signInToEnable', 'Sign in to make private')}</span>
          )}
        </div>

        {/* Sharing Permission (Owner only) */}
        {shortId && !isPrivate && !isVisitor && (
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-muted-foreground" />
            <Label className="text-muted-foreground">{t('sharingPermission', 'Sharing Rules')}</Label>
            <Select value={sharingPermission} onValueChange={(value: 'view' | 'edit') => setSharingPermission(value)}>
              <SelectTrigger className="w-32 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="view">{t('viewOnly', 'View Only')}</SelectItem>
                <SelectItem value="edit">{t('allowEditing', 'Allow Edits')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Expiration (Owner only) */}
        {!shortId && !isVisitor && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <Label className="text-muted-foreground">{t('expires', 'Expires')}</Label>
            <Select value={expiration} onValueChange={setExpiration}>
              <SelectTrigger className="w-28 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EXPIRATION_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* View Only Indicator */}
        {readOnly && (
          <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
            <Eye className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">{t('viewOnly', 'View Only')}</span>
          </div>
        )}

        {/* Edit Button for Visitors */}
        {isVisitor && !readOnly && showPreview && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowPreview(false)}
            className="h-8 gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary"
          >
            <Edit3 className="w-3 h-3" />
            {t('editNote', 'Edit Note')}
          </Button>
        )}
      </div>

      <div className="paper glow-hover min-h-[300px] overflow-hidden">
        {showPreview ? (
          <div className="p-6 sm:p-8">
            <MarkdownPreview content={content || t('previewPlaceholder', 'Nothing to preview')} />
          </div>
        ) : (
          <>
            {!readOnly && <MarkdownToolbar onInsert={handleToolbarInsert} labels={labels as any} />}
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t('placeholder', 'Start typing...')}
              disabled={readOnly}
              dir="auto"
              className="w-full min-h-[300px] bg-transparent border-none outline-none resize-none font-serif text-lg leading-relaxed placeholder:text-muted-foreground/40 focus:ring-0 p-6 sm:p-8"
            />
          </>
        )}
      </div>

      {!showPreview && !readOnly && (
        <p className="mt-2 text-xs text-muted-foreground text-center">
          {t('markdownHint', 'Supports Markdown styling.')}
        </p>
      )}

      {/* Attachments section */}
      {supabaseClient && (
        <NoteAttachments
          noteId={noteId}
          readOnly={readOnly}
          supabaseClient={supabaseClient}
          labels={labels as any}
          onSuccess={(msg) => onToast(msg, '')}
          onError={(msg) => onToast(t('error', 'Error'), msg, 'destructive')}
        />
      )}

      {shortId && (
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            {t('shareNote', 'Share to via')}
            <code className="ml-2 px-2 py-1 bg-secondary rounded text-foreground font-mono text-xs">
              /n/{shortId}
            </code>
          </p>
        </div>
      )}
    </div>
  );
}
