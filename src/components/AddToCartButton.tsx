"use client";

import { useState } from "react";

export default function AddToCartButton() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const add = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
      <div className="inline-flex items-center rounded-full border border-[#510A9B]/15 bg-white">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-12 w-11 items-center justify-center font-display text-xl font-bold text-[#510A9B] transition hover:bg-[#FFF7D6]"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="min-w-10 text-center font-display text-base font-bold text-[#510A9B]">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="flex h-12 w-11 items-center justify-center font-display text-xl font-bold text-[#510A9B] transition hover:bg-[#FFF7D6]"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={add}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#510A9B] px-8 py-3.5 font-display text-sm font-bold text-white transition hover:bg-[#3D0775] sm:flex-none sm:min-w-[200px]"
      >
        <CartIcon />
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

function CartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 5h2l2.2 11h11.3l2-8H7.2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.3" fill="currentColor" />
      <circle cx="17" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
}
