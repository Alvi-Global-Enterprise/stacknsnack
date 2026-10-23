"use client";

export default function Newsletter() {
  return (
    <section className="bg-cream-soft px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-r from-purple to-purple-deep px-6 py-10 shadow-xl sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Stay in the Loop
            </h2>
            <p className="mt-2 max-w-md font-semibold text-white/80 lg:mx-0 mx-auto">
              Get new flavors, bundle deals, and snacky surprises in your inbox.
            </p>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full flex-1 rounded-full border-0 bg-white px-5 py-3.5 text-sm font-semibold text-purple-dark outline-none ring-2 ring-transparent placeholder:text-purple-dark/40 focus:ring-yellow"
            />
            <button
              type="submit"
              className="rounded-full bg-yellow px-7 py-3.5 font-display text-sm font-bold text-purple-dark transition hover:bg-yellow-gold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
