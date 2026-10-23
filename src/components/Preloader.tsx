"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const minTime = 1600;
    const start = Date.now();

    const finish = () => {
      const wait = Math.max(0, minTime - (Date.now() - start));
      window.setTimeout(() => {
        setHiding(true);
        window.setTimeout(() => setGone(true), 550);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      window.setTimeout(finish, 3500);
    }
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#6916D4] transition-opacity duration-500 ease-out ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={hiding}
      role="status"
      aria-label="Loading"
    >
      {/* Mobile */}
      <Image
        src="/mobilepreloader.png"
        alt=""
        fill
        priority
        quality={100}
        className="object-cover object-center md:hidden"
        sizes="100vw"
      />

      {/* Desktop / tablet */}
      <Image
        src="/preloaderimage.png"
        alt=""
        fill
        priority
        quality={100}
        className="hidden object-cover object-center md:block"
        sizes="100vw"
      />
    </div>
  );
}
