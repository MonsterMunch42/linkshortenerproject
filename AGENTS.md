# Agent Instructions

This is a link shortener built with Next.js (App Router), TypeScript, Clerk, Drizzle ORM (Neon Postgres), Tailwind CSS v4 and shadcn/ui.

## Required workflow

> **CRITICAL: THIS IS THE MOST IMPORTANT RULE IN THIS FILE.**
>
> **You MUST ALWAYS read the relevant individual instruction file(s) in the `/docs` directory BEFORE generating or modifying ANY code. No exceptions.**

- Read every doc in the index below that applies to the task, in full, before writing a single line of code. If more than one applies, read all of them.
- The docs are the source of truth. If a doc conflicts with your general knowledge, training data, or existing code patterns, the doc wins.
- Follow the docs exactly. Do not skip, summarize from memory, or assume you already know what they say.
- This applies to every change, however small (a single component, a style tweak, a one-line fix).
- If you are unsure which doc applies, read all of them.
- Code written without first reading the relevant docs is considered incorrect and must be redone.

## Docs index

- [docs/authentication.md](docs/authentication.md) - Clerk-only auth, protected `/dashboard`, homepage redirect for signed-in users, modal sign in/up.
- [docs/ui-components.md](docs/ui-components.md) - shadcn/ui only for all UI; no custom components.

## Commands

- `npm run dev` - start the dev server
- `npm run build` - production build (also type-checks)
- `npm run lint` - run ESLint
- `npx drizzle-kit generate` / `npx drizzle-kit migrate` - create and apply migrations (see [docs/database.md](docs/database.md))

Run `npm run lint` and `npm run build` after non-trivial changes and fix all errors before finishing.

## Non-negotiables

- TypeScript `strict`; no `any`, no `@ts-ignore`.
- Authentication is Clerk only. Never build custom auth or session handling.
- All database access goes through Drizzle in server code. Never import `db` in a Client Component.
- Every query on user-owned data must be scoped to the authenticated user's ID.
- Use shadcn/ui components and Tailwind classes; do not add other UI libraries or CSS files.
- Never commit secrets or read them on the client. Environment variables live in `.env` (git-ignored).
- Do not add dependencies without a clear need; prefer what is already installed.
