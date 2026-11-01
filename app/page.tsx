import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowRight,
  BarChart3,
  Check,
  Link2,
  MousePointer2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shorten links. Make them count.",
  description:
    "Create tidy, shareable links and get a clearer picture of how they perform.",
};

const features = [
  {
    icon: Link2,
    title: "Links that look good",
    description:
      "Turn long, unwieldy URLs into short links that are easy to share anywhere.",
  },
  {
    icon: BarChart3,
    title: "Know what gets clicks",
    description:
      "See how your links are performing and learn what your audience responds to.",
  },
  {
    icon: ShieldCheck,
    title: "Everything in one place",
    description:
      "Keep your links organized in a personal workspace that’s ready whenever you are.",
  },
];

const sampleLinks = [
  { title: "Product launch", url: "lnk.to/launch", clicks: "1,284" },
  { title: "Weekly newsletter", url: "lnk.to/weekly", clicks: "862" },
  { title: "Design resources", url: "lnk.to/design", clicks: "438" },
];

export default function Home() {
  return (
    <main className="relative flex w-full flex-1 flex-col items-center overflow-hidden px-6 pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[620px] max-w-6xl bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.2),transparent_65%)]"
      />

      <section
        id="top"
        className="grid w-full max-w-6xl items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-28"
      >
        <div className="flex flex-col items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-zinc-300">
            <Sparkles className="size-4 text-violet-300" aria-hidden="true" />
            A simpler way to share links
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Short links.
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              More meaning.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Make every link easier to share and easier to understand. Bring your
            links together and see what happens after you hit send.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SignUpButton mode="modal">
              <Button
                size="lg"
                className="h-12 gap-2 rounded-xl px-5 text-base font-semibold"
              >
                Get started free
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </SignUpButton>
            <a
              href="#features"
              className="inline-flex h-12 items-center gap-2 rounded-xl px-4 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Explore features
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
            <Check className="size-4 text-emerald-400" aria-hidden="true" />
            No complicated setup. Just better links.
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2rem] bg-violet-500/10 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 p-5 shadow-2xl shadow-black/40 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-400">
                  YOUR LINK WORKSPACE
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  Your links, at a glance
                </h2>
              </div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Link2 className="size-5" aria-hidden="true" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                <MousePointer2 className="size-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-zinc-500">A link worth sharing</p>
                <p className="truncate text-sm font-medium text-zinc-200">
                  lnk.to/your-next-big-idea
                </p>
              </div>
              <span className="rounded-md bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-300">
                Ready
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between border-b border-white/10 pb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">
              <span>Recent links</span>
              <span>Clicks</span>
            </div>
            <div className="divide-y divide-white/[0.07]">
              {sampleLinks.map((link) => (
                <div
                  key={link.url}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-200">
                      {link.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-violet-300">
                      {link.url}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm tabular-nums text-zinc-400">
                    {link.clicks}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-violet-400/15 bg-violet-400/[0.06] p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                <BarChart3 className="size-4" aria-hidden="true" />
              </div>
              <p className="text-sm leading-6 text-zinc-300">
                A clearer view of your links, all in one place.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 shadow-xl sm:flex">
            <span className="size-2 rounded-full bg-emerald-400" />
            Simple links. Useful insights.
          </div>
        </div>
      </section>

      <section
        id="features"
        className="w-full max-w-6xl scroll-mt-12 border-t border-white/10 pt-16 sm:pt-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
            The little things add up
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything your links need.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
            Spend less time wrestling with URLs and more time sharing what
            matters.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-violet-400/30 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 flex w-full max-w-6xl flex-col items-center rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.03] to-fuchsia-500/[0.08] px-6 py-12 text-center sm:mt-24 sm:px-12 sm:py-16">
        <p className="text-sm font-medium text-violet-200">
          Your next great link starts here
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to make sharing a little simpler?
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400">
          Create your workspace and bring all your links together.
        </p>
        <SignUpButton mode="modal">
          <Button
            size="lg"
            className="mt-7 h-12 gap-2 rounded-xl px-5 text-base font-semibold"
          >
            Create your account
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </SignUpButton>
        <a
          href="#top"
          className="mt-7 inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          Back to top
          <ArrowRight className="size-3 -rotate-45" aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
