import Image from "next/image";
import Link from "next/link";
import { SnackDecorRight } from "./SnackDecor";
import { products } from "@/data/products";

// Second row — same products
const allProducts = [...products, ...products];

export default function FeaturedSnacks() {
  return (
    <section id="snacks" className="relative overflow-hidden bg-[#FFFDF5] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <SnackDecorRight className="-right-10 bottom-16 w-32 animate-float-slow opacity-75 sm:w-40 lg:right-0 lg:w-48" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-[#510A9B] sm:text-4xl">
            Featured Snacks <span className="text-[#FF66C4]">♥</span>
          </h2>
          <a
            href="#shop"
            className="shrink-0 font-display text-sm font-bold text-[#510A9B] underline underline-offset-4 decoration-[#510A9B]/40 transition hover:decoration-[#510A9B] sm:text-base"
          >
            View All Snacks →
          </a>
        </div>

        <div
          id="shop"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {allProducts.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              href={`/product/${p.slug}`}
              className="group flex flex-col rounded-[22px] bg-white p-4 shadow-[0_8px_28px_rgba(81,10,155,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(81,10,155,0.14)]"
            >
              <div className="relative mb-3 aspect-square overflow-hidden rounded-2xl bg-white">
                {p.combo ? (
                  <div className="grid h-full grid-cols-2 gap-1 p-1">
                    {[
                      "/products/classic-chips.png",
                      "/products/spicy-chips.png",
                      "/products/apple-juice.png",
                      "/products/cola-drink.png",
                    ].map((src) => (
                      <div
                        key={src}
                        className="relative overflow-hidden rounded-xl bg-[#FFF7D6]/60"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-contain p-0.5"
                          sizes="120px"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={p.image!}
                    alt={p.name}
                    fill
                    className="object-contain p-0.5 transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  />
                )}
              </div>

              <h3 className="font-display text-[17px] font-bold leading-snug text-[#510A9B]">
                {p.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#510A9B]/55">
                {p.subtitle}
              </p>

              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="font-display text-lg font-bold text-[#510A9B]">
                  {p.price}
                </span>
                <div className="flex items-center gap-1">
                  <div className="flex text-[#FFD43B]" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <span key={si} className="text-[13px] leading-none">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#510A9B]/45">
                    ({p.reviews})
                  </span>
                </div>
              </div>

              <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#510A9B] py-3 font-display text-sm font-bold text-white transition group-hover:bg-[#3D0775]">
                <CartIcon /> View Product
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
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
