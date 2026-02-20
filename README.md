# @your-org/memo-components

A standalone, framework-agnostic(ish) React component library extracted from `instant-memo-url` for core application UI sharing.

## Installation

This package is currently configured via npm workspaces within the local repository.

To use it in your project, ensure `package.json` includes the workspace linkage:

```json
"workspaces": [
  ".",
  "memo-components"
]
```

## Setup

You must import the stylesheet at the root of your React application (usually `main.tsx` or `App.tsx`):

```tsx
import "@your-org/memo-components/dist/index.css";
```

## Available Components

### `NoteEditor`

A fully-featured markdown editor with support for Supabase attachments, real-time preview, link copying, expiring logic, and privacy toggles.

```tsx
import { NoteEditor } from '@your-org/memo-components';
```

### `RecentNotes`

Displays the logged-in user's recently accessed notes with an intuitive search bar and delete toggles.

```tsx
import { RecentNotes } from '@your-org/memo-components';
```

### `SplashScreen`

An animated full-screen introductory loading component.

```tsx
import { SplashScreen } from '@your-org/memo-components';
```

### `ThemeToggle`

A dropdown selector component to switch between light, dark, and system themes.

```tsx
import { ThemeToggle } from '@your-org/memo-components';
```

## Dependency Injection (Decoupling)

Most complex components in this library have been strictly decoupled from application-specific contexts (Auth Providers, React Router, i18next).

You must pass contexts in through props. For example, to use the `RecentNotes` component:

```tsx
import { RecentNotes as BaseRecentNotes } from '@your-org/memo-components';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

export function RecentNotes() {
  const navigate = useNavigate();

  return (
    <BaseRecentNotes
      supabaseClient={supabase}
      user={{ id: "123" }} // from your auth provider
      onNavigate={(id) => navigate(`/n/${id}`)}
      labels={{
        title: "Recent Notes",
        // ... see component interfaces for full list of translation keys
      }}
    />
  );
}
```

## Development

To rebuild the library locally:

```bash
cd memo-components
npm run build
```

This will run Vite in library mode, emitting `es`, `cjs`, and `.d.ts` declaration files.
