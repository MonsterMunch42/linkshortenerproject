# UI Component Standards (shadcn/ui)

**ALL UI elements in this app use shadcn/ui. Do NOT create custom components. ALWAYS use shadcn/ui components.**

## Rules

- Build every screen by composing shadcn/ui components (`Button`, `Card`, `Input`, `Dialog`, `Form`, `Table`, etc.) directly in the page or layout.
- Do not create custom/wrapper components (e.g. `MyButton`, `LinkCard`) in `components/` or anywhere else. If a UI need exists, find the matching shadcn/ui component and use it.
- Do not use raw HTML elements for UI that shadcn/ui provides (e.g. `<button>`, `<input>`, `<select>`, `<table>`); use the shadcn/ui equivalent.
- Do not add other UI/component libraries (MUI, Chakra, Radix primitives used directly, Headless UI, etc.).
- Style only with Tailwind utility classes passed via `className` on shadcn/ui components. No custom CSS files or CSS modules.
- Icons come from `lucide-react` (the configured icon library).
- Clerk's prebuilt components (`SignInButton`, `SignUpButton`, `UserButton`) are allowed as specified in [authentication.md](authentication.md).

## Adding components

- Install missing components with the CLI, which writes them to `components/ui/`:

```bash
npx shadcn@latest add <component>
```

- Check [components/ui](../components/ui) first; use what is already installed.
- Do not hand-write or edit files in `components/ui/` except through the shadcn CLI. Configuration lives in `components.json` (style `base-nova`, alias `@/components/ui`).

## Example

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Your links</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Create link</Button>
      </CardContent>
    </Card>
  );
}
```
