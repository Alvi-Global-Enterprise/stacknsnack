import Image from "next/image";
import { SnackDecorLeft, SnackDecorRight } from "./SnackDecor";

export default function BundlesBanner() {
  return (
    <section id="bundles" className="relative w-full overflow-hidden py-8 sm:py-10">
      <SnackDecorLeft className="left-0 top-1/2 hidden w-24 -translate-y-1/2 animate-float opacity-70 lg:block lg:w-32" />
      <SnackDecorRight className="right-0 top-1/2 hidden w-28 -translate-y-1/2 animate-float-slow opacity-70 lg:block lg:w-36" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-3 sm:px-4 lg:w-[96%] lg:px-0">
        <Image
          src="/maincta.png"
          alt="Brianna's Snack Bundles — More Snacks. More Smiles! Perfect for parties, school, or family fun."
          width={1920}
          height={700}
          quality={100}
          className="h-auto w-full rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 96vw, 1280px"
          priority
        />

        {/* Clickable CTA area */}
        <a
          href="#shop"
          className="absolute bottom-[18%] left-[6%] z-10 block h-[12%] w-[22%] max-w-[220px] rounded-full sm:left-[8%] sm:w-[18%] lg:bottom-[20%] lg:left-[10%] lg:w-[14%]"
          aria-label="Shop Bundles"
        />
      </div>
    </section>
  );
}
