import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductNotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-[#FFFDF5] px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-[#510A9B]">
          Snack not found
        </h1>
        <p className="mt-3 font-semibold text-[#510A9B]/60">
          That product doesn&apos;t exist — try another tasty treat.
        </p>
        <Link
          href="/#shop"
          className="mt-8 rounded-full bg-[#510A9B] px-7 py-3 font-display text-sm font-bold text-white transition hover:bg-[#3D0775]"
        >
          Back to Snacks
        </Link>
      </main>
      <Footer />
    </>
  );
}
