import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Link2,
  MousePointer2,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden bg-[#0e1411] text-[#eef2ea]">
      <section className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#eef2ea_0.7px,transparent_0.7px)] [background-size:22px_22px] opacity-[0.1] [mask-image:linear-gradient(to_right,black,transparent_88%)]" />
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:min-h-[690px] lg:grid-cols-[1fr_0.94fr] lg:gap-16 lg:px-16 lg:py-20">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0e1411]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#b4c4b9]">
              <span className="size-2 rounded-full bg-[#e65e43]" />
              A clearer way to share
            </div>
            <h1 className="max-w-full font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              Long links. <span className="text-[#e65e43]">Short story.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#9fb0a5] sm:text-xl">
              Turn unwieldy URLs into clean, memorable links that are ready to
              go wherever you do.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <SignUpButton mode="modal">
                <Button className="h-12 rounded-lg bg-[#eef2ea] px-5 text-base text-[#0e1411] hover:bg-white">
                  Shorten a link <ArrowRight />
                </Button>
              </SignUpButton>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center gap-2 px-4 text-sm font-semibold text-[#b4c4b9] transition-colors hover:text-[#e65e43]"
              >
                Take a look <ArrowDown className="size-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-5 text-sm text-[#9fb0a5]">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#0e1411] bg-[#d9e8d1] text-xs font-bold text-[#365340]">S</span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#0e1411] bg-[#f5c5a5] text-xs font-bold text-[#7b442c]">M</span>
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#0e1411] bg-[#d7d4ee] text-xs font-bold text-[#4c4777]">J</span>
              </div>
              <span>Small links. Big plans.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[560px] lg:mr-0">
            <div className="absolute -right-4 -top-5 z-10 grid size-[92px] rotate-6 place-items-center rounded-full bg-[#d8ef69] text-center text-xs font-bold uppercase leading-4 text-[#263522] shadow-sm sm:-right-7 sm:-top-8">
              Make it
              <br />
              memorable
              <Sparkles className="mt-1 size-4" />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/15 bg-[#161f1a] shadow-[0_26px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#ed846c]" />
                  <span className="size-2.5 rounded-full bg-[#efc366]" />
                  <span className="size-2.5 rounded-full bg-[#9bbf82]" />
                </div>
                <span className="font-mono text-[10px] text-[#8b978e] sm:text-xs">TIDYLINK / YOUR LINKS</span>
                <span className="size-2" />
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#829087]">Link overview</p>
                    <h2 className="mt-1 font-serif text-3xl">Good things, shared.</h2>
                  </div>
                  <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#233229] text-[#a9d19a]">
                    <Link2 className="size-5" />
                  </div>
                </div>

                <div className="mt-7 rounded-lg border border-white/10 bg-[#0e1411] p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#89948b]">
                    <Link2 className="size-3.5" />
                    YOUR ORIGINAL LINK
                  </div>
                  <p className="mt-2 truncate font-mono text-sm text-[#9fb0a5]">https://example.com/stories/our-next-big-thing</p>
                  <div className="my-4 border-t border-dashed border-white/15" />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-[#89948b]">YOUR SHORT LINK</p>
                      <p className="mt-1 font-mono text-lg font-semibold text-[#e65e43]">tidy.link/next</p>
                    </div>
                    <div className="inline-flex h-9 items-center gap-2 rounded-md bg-[#d8ef69] px-3 text-xs font-bold text-[#263522]">
                      <Check className="size-3.5" />
                      Ready to share
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-[#233229] p-4 text-[#eef2ea]">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <MousePointer2 className="size-3.5" />
                      EASY TO REMEMBER
                    </div>
                    <p className="mt-3 font-serif text-xl">Your words, your link.</p>
                  </div>
                  <div className="rounded-lg bg-[#2b2419] p-4 text-[#f3e8d8]">
                    <div className="flex items-center gap-2 text-xs text-[#b79f84]">
                      <BarChart3 className="size-3.5" />
                      MADE FOR SHARING
                    </div>
                    <p className="mt-3 font-serif text-xl">A little less link.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-[#89948b] sm:px-8">
                <span>One less thing between you and the good stuff.</span>
                <Zap className="size-4 text-[#e65e43]" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden size-14 place-items-center rounded-lg bg-[#e65e43] text-white shadow-md sm:grid">
              <ArrowUpRight className="size-6" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e65e43]">The little things matter</p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
              Better links make sharing feel easy.
            </h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-3">
            <article className="border-t-2 border-[#e65e43] py-5 sm:pr-5">
              <span className="font-mono text-xs text-[#e65e43]">01</span>
              <h3 className="mt-5 font-serif text-2xl">Short by nature</h3>
              <p className="mt-3 text-sm leading-6 text-[#9fb0a5]">Trim the long URL down to something that fits neatly in a message, post, or presentation.</p>
            </article>
            <article className="border-t-2 border-[#d8ef69] py-5 sm:px-5">
              <span className="font-mono text-xs text-[#7c8e3d]">02</span>
              <h3 className="mt-5 font-serif text-2xl">Make it yours</h3>
              <p className="mt-3 text-sm leading-6 text-[#9fb0a5]">Choose a memorable ending that gives your links a little more personality and context.</p>
            </article>
            <article className="border-t-2 border-[#91b4a0] py-5 sm:pl-5">
              <span className="font-mono text-xs text-[#91b4a0]">03</span>
              <h3 className="mt-5 font-serif text-2xl">See what resonates</h3>
              <p className="mt-3 text-sm leading-6 text-[#9fb0a5]">Get a clearer picture of how your shared links are finding their audience.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/10 bg-[#131c17]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-12 sm:px-10 md:grid-cols-[1fr_auto] lg:px-16">
          <div className="flex items-start gap-4">
            <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#d8ef69] text-[#263522]">
              <Zap className="size-5" />
            </div>
            <div>
              <p className="font-serif text-2xl">Ready when you are.</p>
              <p className="mt-1 text-sm text-[#9fb0a5]">Start with a link. Leave with a better one.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-[#7f9186] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <span className="font-semibold uppercase tracking-[0.12em] text-[#b4c4b9]">TIDYLINK</span>
        <span>Less link. More meaning.</span>
      </footer>
    </main>
  );
}
