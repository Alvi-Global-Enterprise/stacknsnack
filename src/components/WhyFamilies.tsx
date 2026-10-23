import { SnackDecorLeft, SnackDecorRight } from "./SnackDecor";

const reasons = [
  {
    title: "Tasty & High Quality",
    desc: "Crunchy flavors kids ask for again and again — made with care in every bite.",
    icon: "🧁",
    color: "from-[#FFF3C4] to-[#FFE08A]",
    ring: "ring-[#FFD43B]/40",
    accent: "bg-[#FFD43B]",
  },
  {
    title: "Made for Kids & Families",
    desc: "Fun snacks the whole family can share together, lunchbox to movie night.",
    icon: "😊",
    color: "from-[#EDE0FF] to-[#D4B8FF]",
    ring: "ring-[#6916D4]/25",
    accent: "bg-[#6916D4]",
  },
  {
    title: "Great Value Combos",
    desc: "Bundles that stretch smiles and savings — more snacks, more happy moments.",
    icon: "🎁",
    color: "from-[#FFE0F0] to-[#FFB8DC]",
    ring: "ring-[#FF66C4]/35",
    accent: "bg-[#FF66C4]",
  },
  {
    title: "Trusted & Loved",
    desc: "Happy snackers everywhere love Brianna's — real families, real reviews.",
    icon: "⭐",
    color: "from-[#E5F8E8] to-[#B8EFC0]",
    ring: "ring-[#4CAF50]/30",
    accent: "bg-[#4CAF50]",
  },
];

export default function WhyFamilies() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9EC] to-[#FFF7D6] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#FF66C4]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#6916D4]/10 blur-3xl" />

      <SnackDecorRight className="-right-6 top-10 w-28 animate-float opacity-70 sm:w-36 lg:right-4 lg:w-44" />
      <SnackDecorLeft className="-left-8 bottom-8 w-24 animate-float-slow opacity-65 sm:w-32 lg:left-2 lg:w-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#6916D4]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#6916D4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF66C4]" />
            Why choose us
          </span>
          <h2 className="font-display text-3xl font-bold text-[#510A9B] sm:text-4xl lg:text-[2.85rem]">
            Why Families Love Brianna&apos;s
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base font-semibold text-[#510A9B]/65">
            Little reasons that make every snack moment better
          </p>
          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#FFD43B] via-[#FF66C4] to-[#6916D4]" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative overflow-hidden rounded-[28px] bg-white p-7 text-center shadow-[0_10px_36px_rgba(81,10,155,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(81,10,155,0.16)]"
            >
              {/* top accent bar */}
              <div
                className={`absolute inset-x-0 top-0 h-1.5 ${r.accent} opacity-90 transition group-hover:h-2`}
              />

              {/* number chip */}
              <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF7D6] font-display text-xs font-bold text-[#510A9B]/50">
                0{i + 1}
              </span>

              <div
                className={`mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-4xl shadow-inner ring-4 ${r.ring} transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
                aria-hidden
              >
                {r.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-[#510A9B] sm:text-xl">
                {r.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-[#510A9B]/60">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
