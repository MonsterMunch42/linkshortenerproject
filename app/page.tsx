import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  Link2,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link2,
    title: "Shorten in seconds",
    description:
      "Turn long, unwieldy URLs into clean links that are easy to share anywhere.",
  },
  {
    icon: MousePointer2,
    title: "Made to be clicked",
    description:
      "Give every destination a polished first impression, whether it’s in a post or a message.",
  },
  {
    icon: BarChart3,
    title: "Keep things moving",
    description:
      "Bring your important links together and make sharing them part of your workflow.",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      <section className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            A better way to share links
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Long links.
            <br />
            <span className="text-primary">Short story.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Make every link easier to share. Create a short, clean URL in
            seconds and get back to what matters.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 px-5 text-sm">
                Get started for free
                <ArrowUpRight aria-hidden="true" />
              </Button>
            </SignUpButton>
            <a
              href="#features"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Explore features
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="size-4 text-primary" aria-hidden="true" />
            Free to get started. No setup required.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative rounded-2xl border border-border/70 bg-card p-5 shadow-2xl shadow-black/20 sm:p-7">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="text-sm font-semibold">Your links</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  A little less link, a lot more room.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Ready to share
              </span>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="truncate text-xs text-muted-foreground">
                  yoursite.com/blog/how-to-make-your-links-work-harder
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-medium text-primary">
                    linklet.app/your-next-big-idea
                  </p>
                  <span className="shrink-0 rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-primary">
                    Short link
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="truncate text-xs text-muted-foreground">
                  shop.example.com/collections/spring-arrivals
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-medium text-primary">
                    linklet.app/spring-favorites
                  </p>
                  <span className="shrink-0 rounded-md bg-primary/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-primary">
                    Short link
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-border px-4 py-3 text-center text-xs text-muted-foreground">
                Your next great link goes here
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-xl bg-muted/60 p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Link2 className="size-4" aria-hidden="true" />
              </div>
              <p className="text-xs leading-5 text-muted-foreground">
                One tidy link, ready for wherever your audience finds you.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:flex">
            <Check className="size-4 text-primary" aria-hidden="true" />
            <span className="text-xs font-medium">Simple from the start</span>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-t border-border/70 bg-card/40 px-6 py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The little things add up
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sharing should feel effortless.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              A simple toolkit for making your links cleaner, clearer, and
              easier to put to work.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border/70 bg-card p-6 sm:p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border/70 bg-card p-7 text-center sm:p-9 md:flex-row md:text-left">
            <div>
              <h2 className="text-xl font-semibold">
                Ready to make links work better?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Start creating short links in just a few clicks.
              </p>
            </div>
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 px-5">
                Create your free account
                <ArrowUpRight aria-hidden="true" />
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </main>
  );
}
