import Image from "next/image";

/** Floating snack graphics — black bg knocks out via mix-blend-screen on light sections */
export function SnackDecorLeft({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-[1] select-none ${className}`}
      aria-hidden
    >
      <Image
        src="/elementsone.png"
        alt=""
        width={280}
        height={280}
        className="h-auto w-full mix-blend-screen drop-shadow-lg"
        sizes="280px"
      />
    </div>
  );
}

export function SnackDecorRight({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-[1] select-none ${className}`}
      aria-hidden
    >
      <Image
        src="/elementstwo.png"
        alt=""
        width={320}
        height={320}
        className="h-auto w-full mix-blend-screen drop-shadow-lg"
        sizes="320px"
      />
    </div>
  );
}
