import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#6916D4]">
      <div className="relative w-full">
        {/* Mobile hero */}
        <Image
          src="/mobileherosection.png"
          alt="Crunchy Fun in Every Bite! — Brianna's Stack 'N Snack. Tasty chips, treats and drinks made for kids, families and snack lovers everywhere."
          width={1080}
          height={1400}
          priority
          quality={100}
          className="h-auto w-full md:hidden"
          sizes="100vw"
        />

        {/* Desktop / tablet hero */}
        <Image
          src="/heromain.png"
          alt="Crunchy Fun in Every Bite! — Brianna's Stack 'N Snack. Tasty chips, treats and drinks made for kids, families and snack lovers everywhere."
          width={1920}
          height={900}
          priority
          quality={100}
          className="hidden h-auto w-full md:block"
          sizes="100vw"
        />

        {/* Desktop CTA hotspots */}
        <a
          href="#shop"
          className="absolute left-[3.5%] top-[54%] z-10 hidden h-[10%] w-[19%] rounded-full sm:left-[4.5%] sm:top-[52%] sm:w-[17%] md:left-[5%] md:block lg:top-[50%] lg:w-[15%]"
          aria-label="Shop Snacks"
        />
        <a
          href="#bundles"
          className="absolute left-[23%] top-[54%] z-10 hidden h-[10%] w-[16%] rounded-full sm:left-[22.5%] sm:top-[52%] sm:w-[14%] md:left-[23%] md:block lg:top-[50%] lg:w-[13%]"
          aria-label="See Combos"
        />
      </div>

    </section>
  );
}
