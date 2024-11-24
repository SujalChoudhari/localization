# @sujalchoudhari/localization

> Simple and flexible localization tool for React and Next.js applications with support for multiple languages and easy language switching

[![NPM](https://img.shields.io/npm/v/@sujalchoudhari/localization.svg)](https://www.npmjs.com/package/@sujalchoudhari/localization) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- 🌐 Support for multiple languages
- ⚡ Simple API with minimal setup
- 🔄 Easy language switching
- 🎯 Customizable separator for translations
- ⚛️ React & Next.js compatible
- 📝 TypeScript support

## Installation

```bash
npm install --save @sujalchoudhari/localization@latest
```

## Basic Setup

### 1. Wrap Your App with LocalizationProvider

#### For React Applications:

```tsx
// main.tsx or App.tsx
import { LocalizationProvider } from '@sujalchoudhari/localization'

function App() {
  return (
    <LocalizationProvider>
      {/* Your app components */}
    </LocalizationProvider>
  )
}
```

#### For Next.js Applications:

```tsx
// app/providers.tsx
"use client";
import { LocalizationProvider } from '@sujalchoudhari/localization'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider>
      {children}
    </LocalizationProvider>
  )
}

// app/layout.tsx
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### 2. Using Translations

The `Translate` component accepts translations separated by a customizable separator (default is `~`).

```tsx
"use client"; // Required for Next.js client components
import Translate from '@sujalchoudhari/localization'

function MyComponent() {
  // Using default separator (~)
  return (
    <Translate>Hello ~ नमस्ते ~ নমস্কার</Translate>
  )

  // Using custom separator
  return (
    <Translate separator="|">Hello | नमस्ते | নমস্কার</Translate>
  )
}
```

### 3. Language Selection

```tsx
"use client"; // Required for Next.js client components
import { useLocalization } from '@sujalchoudhari/localization'

function LanguageSelector() {
  const { changeLanguage } = useLocalization()
  
  return (
    <select 
      onChange={(e) => changeLanguage(Number(e.target.value))}
      className="px-4 py-2 rounded border"
    >
      <option value={0}>English</option>
      <option value={1}>हिंदी</option>
      <option value={2}>বাংলা</option>
    </select>
  )
}

// Or with buttons:
function LanguageButtons() {
  const { changeLanguage } = useLocalization()
  
  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage(0)}>English</button>
      <button onClick={() => changeLanguage(1)}>हिंदी</button>
      <button onClick={() => changeLanguage(2)}>বাংলা</button>
    </div>
  )
}
```

## Important Notes for Next.js Users

1. **Client Components**: 
   - Always add `"use client"` directive at the top of files using the localization components
   - This includes any component that uses `Translate` or `useLocalization`

2. **Provider Setup**:
   - The `LocalizationProvider` must be wrapped in a client component
   - Create a separate providers file to maintain clean code organization
   - Don't forget to add `"use client"` to the providers file

3. **Performance Considerations**:
   - Only mark components that actually need client-side interactivity with `"use client"`
   - Keep server components where possible for better performance

4. **State Persistence**:
   - Language selection is not persisted by default
   - Consider implementing local storage if you need to persist language selection

## License

MIT © [SujalChoudhari](https://github.com/SujalChoudhari)