import ReactMarkdown from 'react-markdown';

interface MarkdownPreviewProps {
  content: string;
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none font-serif">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 dir="auto" className="text-3xl font-semibold mt-6 mb-4 first:mt-0">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 dir="auto" className="text-2xl font-semibold mt-5 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 dir="auto" className="text-xl font-semibold mt-4 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p dir="auto" className="mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul dir="auto" className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol dir="auto" className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li dir="auto" className="leading-relaxed">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote dir="auto" className="border-l-4 border-primary/30 pl-4 my-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            return isInline ? (
              <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className="block bg-secondary p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-6 border-border" />,
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
