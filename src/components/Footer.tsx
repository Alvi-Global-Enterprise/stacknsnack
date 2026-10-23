"use client";

import Image from "next/image";
import { SnackDecorLeft, SnackDecorRight } from "./SnackDecor";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Snacks", href: "/#snacks" },
  { label: "Shop", href: "/#shop" },
];

const helpLinks = [
  { label: "Bundles", href: "/#bundles" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
  { label: "FAQ", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-8 text-white">
      {/* Wavy top */}
      <div className="relative z-10 -mb-px leading-[0]" aria-hidden>
        <svg
          viewBox="0 0 1440 72"
          className="block w-full"
          preserveAspectRatio="none"
          style={{ height: "clamp(28px, 5vw, 72px)" }}
        >
          <path
            d="M0,48 C200,72 400,8 600,40 C800,72 1000,16 1200,44 C1320,60 1400,28 1440,36 L1440,72 L0,72 Z"
            fill="#6916D4"
          />
        </svg>
      </div>

      <div className="relative overflow-hidden bg-[#6916D4]">
        {/* Decor — hide on small screens */}
        <SnackDecorLeft className="-left-2 bottom-16 hidden w-16 rotate-[-12deg] opacity-80 sm:block sm:left-2 sm:w-20 lg:w-24" />
        <SnackDecorRight className="right-2 top-6 hidden w-14 rotate-[15deg] opacity-75 sm:block sm:right-6 sm:w-16 lg:w-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-3">
              <a
                href="/"
                className="inline-block sm:mr-8 lg:mr-12"
                style={{ marginLeft: undefined }}
              >
                <Image
                  src="/footerlogo.png"
                  alt="Brianna's Stack 'N Snack"
                  width={420}
                  height={220}
                  className="h-auto w-[200px] object-contain mix-blend-screen drop-shadow-md sm:w-[280px] lg:w-[360px] lg:-ml-[22px]"
                />
              </a>
              <p className="mt-2 max-w-xs text-sm font-semibold leading-snug text-white/90 sm:mt-3">
                Tasty Snacks. Happier Days.
              </p>
            </div>

            {/* Quick Links + Help — side by side on mobile */}
            <div className="grid grid-cols-2 gap-6 sm:contents">
              <div className="lg:col-span-2">
                <h3 className="font-display text-base font-bold text-white sm:text-lg">
                  Quick Links
                </h3>
                <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                  {quickLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm font-medium text-white/85 transition hover:text-[#FFD43B]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <h3 className="font-display text-base font-bold text-white sm:text-lg">
                  Help
                </h3>
                <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                  {helpLinks.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm font-medium text-white/85 transition hover:text-[#FFD43B]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stay in the Loop */}
            <div className="sm:col-span-2 lg:col-span-3">
              <h3 className="font-display text-base font-bold text-white sm:text-lg">
                Stay in the Loop
              </h3>
              <p className="mt-2 text-sm font-medium text-white/80">
                Get special deals, new snacks and more!
              </p>
              <form
                className="mt-4 flex w-full max-w-md flex-col gap-2 overflow-hidden rounded-2xl bg-white p-1.5 shadow-md sm:flex-row sm:items-stretch sm:rounded-full sm:p-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-sm font-semibold text-[#510A9B] outline-none placeholder:text-[#510A9B]/40 sm:rounded-none sm:py-2.5"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-[#FFD43B] px-5 py-3 text-sm font-extrabold text-[#1a1a1a] transition hover:bg-[#FFBF00] sm:rounded-full sm:py-2.5"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-center sm:items-start lg:col-span-2">
              <h3 className="font-display text-base font-bold text-white sm:text-lg">
                Follow Us
              </h3>
              <div className="mt-3 flex flex-wrap justify-center gap-2.5 sm:mt-4 sm:justify-start">
                <a
                  href="#contact"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow transition hover:scale-105"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#contact"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow transition hover:scale-105"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#contact"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] text-white shadow transition hover:scale-105"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#520FB0]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-center text-[11px] font-medium leading-relaxed text-white/70 sm:flex-row sm:px-6 sm:text-left sm:text-xs lg:px-8">
          <p>© 2026 Brianna&apos;s Stack &apos;N Snack. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <a href="#contact" className="hover:text-[#FFD43B]">
              Privacy Policy
            </a>
            <span className="text-white/35">|</span>
            <a href="#contact" className="hover:text-[#FFD43B]">
              Terms of Service
            </a>
            <span className="text-white/35">|</span>
            <a href="#contact" className="hover:text-[#FFD43B]">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.2c0-2.3-.2-3.8-.5-4.7-.3-.9-.9-1.5-1.8-1.8C18.2 5.3 12 5.3 12 5.3s-6.2 0-7.7.4c-.9.3-1.5.9-1.8 1.8-.3.9-.5 2.4-.5 4.7s.2 3.8.5 4.7c.3.9.9 1.5 1.8 1.8 1.5.4 7.7.4 7.7.4s6.2 0 7.7-.4c.9-.3 1.5-.9 1.8-1.8.3-.9.5-2.4.5-4.7zM10 15.5v-6.6l5.5 3.3-5.5 3.3z" />
    </svg>
  );
}
