"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#snacks", label: "Snacks" },
  { href: "/#shop", label: "Shop" },
  { href: "/#bundles", label: "Bundles" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-[#6916D4] shadow-[0_4px_24px_rgba(45,17,72,0.25)] backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-4 px-4 sm:h-[88px] sm:px-6 lg:px-10">
        {/* Logo */}
        <a
          href="/"
          className="relative z-10 shrink-0"
          onClick={() => setActive("Home")}
        >
          <Image
            src="/mainlogo.png"
            alt="Brianna's Stack 'N Snack"
            width={140}
            height={140}
            priority
            className="h-[64px] w-[64px] rounded-full object-cover shadow-lg ring-2 ring-[#FFD43B] sm:h-[74px] sm:w-[74px]"
          />
        </a>

        {/* Center nav */}
        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Main"
        >
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative pb-1 text-[15px] font-semibold transition ${
                  isActive
                    ? "text-[#FFD43B]"
                    : "text-white hover:text-[#FFD43B]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-[#FFD43B]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-full p-2 text-white transition hover:bg-white/10 sm:inline-flex"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="relative rounded-full p-2 text-white transition hover:bg-white/10"
            aria-label="Cart"
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF66C4] px-1 text-[10px] font-extrabold text-white">
              0
            </span>
          </button>

          <a
            href="#shop"
            className="hidden items-center gap-1.5 rounded-full bg-[#FFD43B] px-5 py-2.5 text-sm font-extrabold text-black transition hover:bg-[#FFBF00] sm:inline-flex"
          >
            Order Now <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className="inline-flex rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-[#6916D4] px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className={`rounded-2xl px-4 py-3 font-bold ${
                  active === link.label
                    ? "bg-[#FFD43B] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#FFD43B] px-4 py-3 text-center font-extrabold text-black"
            >
              Order Now →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M16.5 16.5L21 21"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 5h2l2.2 11h11.3l2-8H7.2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.5" fill="currentColor" />
      <circle cx="17" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
