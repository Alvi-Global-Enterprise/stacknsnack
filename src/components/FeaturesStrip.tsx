import Image from "next/image";

const features = [
  {
    title: "Fresh Snacks",
    desc: "Quality ingredients, great taste",
    icon: "/iconone.png",
  },
  {
    title: "Kid Favorite",
    desc: "Loved by kids and families",
    icon: "/icontwo.png",
  },
  {
    title: "Fast Delivery",
    desc: "Get your snacks quickly",
    icon: "/iconthree.png",
  },
  {
    title: "Fun Combos",
    desc: "More snacks, more smiles",
    icon: "/iconfour.png",
  },
];

export default function FeaturesStrip() {
  return (
    <section
      id="about"
      className="relative z-10 -mt-6 hidden bg-transparent px-3 pb-6 pt-2 sm:-mt-8 sm:px-4 md:block lg:-mt-10 lg:px-6"
    >
      <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-2 py-2 shadow-[0_12px_40px_rgba(81,10,155,0.12)] ring-1 ring-[#510A9B]/05 sm:px-2 sm:py-3 lg:rounded-[32px]">
        <ul className="grid grid-cols-1 divide-y divide-[#EDE6F5] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-[#EDE6F5]">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex items-center gap-3.5 px-4 py-5 transition hover:bg-[#FFFDF5] sm:px-5"
            >
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
                <Image
                  src={f.icon}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base font-bold text-[#510A9B] sm:text-lg">
                  {f.title}
                </h3>
                <p className="mt-0.5 text-xs font-semibold leading-snug text-[#510A9B]/60 sm:text-sm">
                  {f.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
