import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} | Brianna's Stack N Snack`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FFFDF5]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm font-semibold text-[#510A9B]/55">
            <Link href="/" className="transition hover:text-[#510A9B]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#shop" className="transition hover:text-[#510A9B]">
              Snacks
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#510A9B]">{product.name}</span>
          </nav>

          {/* Product main */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Image */}
            <div className="relative overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(81,10,155,0.08)] sm:p-10">
              <span className="absolute left-5 top-5 rounded-full bg-[#6916D4] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#FFD43B]">
                {product.category}
              </span>
              <div className="relative mx-auto aspect-square max-w-md">
                {product.combo ? (
                  <div className="grid h-full grid-cols-2 gap-3 p-2">
                    {[
                      "/products/classic-chips.png",
                      "/products/spicy-chips.png",
                      "/products/apple-juice.png",
                      "/products/cola-drink.png",
                    ].map((src) => (
                      <div
                        key={src}
                        className="relative overflow-hidden rounded-2xl bg-[#FFF7D6]/50"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-contain p-2"
                          sizes="200px"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={product.image!}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 90vw, 480px"
                  />
                )}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#FF66C4]">
                Brianna&apos;s Stack N Snack
              </p>
              <h1 className="font-display text-3xl font-bold leading-tight text-[#510A9B] sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-2 text-base font-semibold text-[#510A9B]/60">
                {product.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="font-display text-3xl font-bold text-[#510A9B]">
                  {product.price}
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#FFD43B]" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-base leading-none">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-[#510A9B]/50">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-[#510A9B]/75">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2.5 text-sm font-semibold text-[#510A9B]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD43B] text-[11px] font-extrabold text-[#510A9B]">
                      ✓
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <AddToCartButton />
                <Link
                  href="/#shop"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#510A9B]/20 px-7 py-3.5 font-display text-sm font-bold text-[#510A9B] transition hover:border-[#510A9B] hover:bg-[#510A9B] hover:text-white"
                >
                  Continue Shopping
                </Link>
              </div>

              <p className="mt-5 text-xs font-semibold text-[#510A9B]/45">
                Fast delivery · Kid approved · Fun for the whole family
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16 border-t border-[#510A9B]/08 pt-12 lg:mt-20">
              <h2 className="font-display text-2xl font-bold text-[#510A9B] sm:text-3xl">
                You may also like
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
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
                                sizes="80px"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Image
                          src={p.image!}
                          alt={p.name}
                          fill
                          className="object-contain p-1 transition group-hover:scale-105"
                          sizes="200px"
                        />
                      )}
                    </div>
                    <h3 className="font-display text-base font-bold text-[#510A9B]">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-display text-lg font-bold text-[#510A9B]">
                      {p.price}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
