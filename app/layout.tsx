import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import { ArrowUpRight, Link2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tidylink | Long links. Short story.",
  description: "Turn unwieldy URLs into clean, memorable links that are ready to share.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider appearance={{ theme: shadcn }}>
          <header className="flex h-[72px] items-center justify-between border-b border-[#18231e]/10 bg-[#f4f6ef] px-4 text-[#18231e] sm:px-10 lg:px-16">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-[0.04em]">
              <span className="grid size-8 place-items-center rounded-lg bg-[#e65e43] text-white">
                <Link2 className="size-4" />
              </span>
              <span>TIDYLINK</span>
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-medium text-[#53645a] md:flex" aria-label="Main navigation">
              <Link href="/#features" className="transition-colors hover:text-[#e65e43]">Features</Link>
              <Link href="/#how-it-works" className="transition-colors hover:text-[#e65e43]">Get started</Link>
            </nav>
            <Suspense>
              <div className="flex items-center gap-2">
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="hidden text-[#40574b] hover:bg-[#e8eee1] sm:inline-flex">Sign in</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="bg-[#18231e] text-white hover:bg-[#314238]">
                      Get started <ArrowUpRight />
                    </Button>
                  </SignUpButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </Suspense>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}