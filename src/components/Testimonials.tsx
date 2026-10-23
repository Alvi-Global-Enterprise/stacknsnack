"use client";

import Image from "next/image";
import { useState } from "react";
import { SnackDecorLeft, SnackDecorRight } from "./SnackDecor";

const reviews = [
  {
    name: "Jessica M.",
    text: "My daughter absolutely loves Brianna's snacks! The combos are perfect for school and weekend treats!",
    image: "/reviews/jessica.jpg",
  },
  {
    name: "Daniel R.",
    text: "Great flavors and such good quality. Fast delivery and my kids can't get enough!",
    image: "/reviews/daniel.jpg",
  },
  {
    name: "Maria S.",
    text: "The snack bundles are amazing! Perfect for parties and my kids love the drinks too!",
    image: "/reviews/maria.jpg",
  },
  {
    name: "Maya R.",
    text: "The chips are crispy and the juice packs are perfect for lunchboxes. Total kid favorite!",
    image: "/reviews/maya.jpg",
  },
  {
    name: "Jordan T.",
    text: "We ordered a combo pack for movie night and everyone was smiling. Great value!",
    image: "/reviews/jordan.jpg",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = 3;

  const prev = () => {
    setStart((s) => (s - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setStart((s) => (s + 1) % reviews.length);
  };

  const visibleReviews = Array.from({ length: visible }, (_, i) => {
    return reviews[(start + i) % reviews.length];
  });

  return (
    <section id="reviews" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SnackDecorRight className="-right-8 bottom-10 hidden w-32 animate-float-slow opacity-55 sm:block sm:w-40 lg:w-44" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#510A9B] sm:text-4xl">
              Happy Snackers
            </h2>
            <p className="mt-2 font-semibold text-[#510A9B]/55">
              Real families. Real smiles. Real reviews.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#510A9B]/15 bg-white text-[#510A9B] transition hover:border-[#510A9B] hover:bg-[#510A9B] hover:text-white"
              aria-label="Previous reviews"
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#510A9B]/15 bg-white text-[#510A9B] transition hover:border-[#510A9B] hover:bg-[#510A9B] hover:text-white"
              aria-label="Next reviews"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {visibleReviews.map((r, i) => (
            <article
              key={`${r.name}-${start}-${i}`}
              className="flex items-start gap-4 rounded-2xl border border-[#510A9B]/08 bg-white p-5 shadow-[0_4px_20px_rgba(81,10,155,0.06)] transition hover:border-[#510A9B]/15 hover:shadow-[0_8px_28px_rgba(81,10,155,0.1)] sm:p-6"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#F4E7FF] sm:h-16 sm:w-16">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-2 flex text-[#FFD43B]" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} className="text-[13px] leading-none">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium leading-relaxed text-[#510A9B]/75">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-3 text-sm font-bold text-[#510A9B]">— {r.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
