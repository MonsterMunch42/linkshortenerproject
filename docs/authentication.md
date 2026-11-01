# Authentication Standards (Clerk)

Authentication is handled exclusively by Clerk (`@clerk/nextjs`). **No other auth method may be used.** Do not implement custom auth, password handling, JWTs, session cookies, or other providers (e.g. NextAuth, Auth.js, Supabase Auth).

## Required behaviour

- `/dashboard` (and everything under it) is a protected route. Users who are not signed in must not be able to access it.
- A signed-in user who visits the homepage (`/`) must be redirected to `/dashboard`.
- Sign in and sign up must **always** open as a Clerk modal, never as a full-page navigation.

### Implementation

Protect `/dashboard` and redirect signed-in users from `/` in `proxy.ts`:

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();

  const { userId } = await auth();
  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
});
```

Sign in/up triggers must use modal mode:

```tsx
<SignInButton mode="modal" />
<SignUpButton mode="modal" />
```

Do not link to `/sign-in` or `/sign-up` from the UI, and do not use `redirect("/sign-in")` for guarding; the modal is the only entry point.

## Setup in this project

- `proxy.ts` exports `clerkMiddleware()`. By default this only attaches auth state; route protection and the homepage redirect must be added as shown above.
- `app/layout.tsx` wraps the app in `<ClerkProvider appearance={{ theme: shadcn }}>`; keep the shadcn theme so Clerk UI matches the app.
- Sign-in and sign-up pages are at `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx`.
- Signed-in/out UI uses Clerk's `<Show when="signed-in">` / `<Show when="signed-out">` inside `<Suspense>`.

## Rules

- Server code reads the user with `auth()` from `@clerk/nextjs/server` (async: `const { userId } = await auth()`). Use `currentUser()` only when you need profile data.
- Client code uses Clerk hooks (`useUser`, `useAuth`) from `@clerk/nextjs`. Never trust client-provided user IDs.
- Protect routes with route matchers and `auth.protect()` in `proxy.ts`. Server code may additionally check `userId` and return an error.
- Every Server Action, route handler and data-access function that touches user data must verify `userId` is present before doing anything else.
- Never accept a `userId` as a parameter from the client; always derive it from `auth()`.
- Use Clerk's prebuilt components (`UserButton`, `SignInButton`, `SignUpButton`) with `mode="modal"` for sign in/up unless a custom flow is explicitly requested. Custom flows follow the `clerk-custom-ui` skill in `.agents/skills`.

## Example (Server Action guard)

```ts
"use server";

import { auth } from "@clerk/nextjs/server";

export async function createLink(input: unknown) {
  const { userId } = await auth();
  if (!userId) return { ok: false, error: "Unauthorized" } as const;
  // validate input, then write with userId as the owner
}
```

## Ownership

- Clerk user IDs are strings (e.g. `user_...`). Store them in a `varchar` column named `userId` on user-owned tables.
- Reads, updates and deletes of user-owned rows must filter by both the row ID and `userId`.

## Environment

- Clerk keys (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`) live in `.env`. Never hard-code or log them.

## Related skills

Detailed Clerk guidance is in `.agents/skills/` (`clerk-nextjs-patterns`, `clerk-custom-ui`, `clerk-webhooks`, `clerk-testing`, `clerk-orgs`). Consult them for advanced cases.
