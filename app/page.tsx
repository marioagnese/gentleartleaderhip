import Image from "next/image";

export default function BookLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_40%)]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Coming Soon
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              The Gentle Art of Leading
            </h1>

            <p className="mt-6 text-xl text-white/70">
              What thirty-five years on the mat taught me about leadership.
            </p>

            <p className="mt-8 max-w-xl text-white/60">
              Leadership under pressure. Ego, failure, resilience, and rebuilding — 
              told through thirty-five years of Jiu-Jitsu and thirty years inside global corporations.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#early-access"
                className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400"
              >
                Join Early Access
              </a>

              <a
                href="#about"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-white/80"
              >
                Learn More
              </a>
            </div>

            <p className="mt-8 italic text-white/40">
              “The mat never lies. Neither does the boardroom.”
            </p>
          </div>

          {/* RIGHT SIDE - BOOK (FRONT + BACK STACK) */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="relative h-[600px]">

              {/* BACK COVER */}
              <div className="absolute left-6 top-6 z-0 opacity-70">
                <Image
                  src="/TheGALBack.png"
                  alt="Back Cover"
                  width={400}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>

              {/* FRONT COVER */}
              <div className="absolute z-10">
                <Image
                  src="/TheGAL.png"
                  alt="Front Cover"
                  width={400}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold">
            This is not leadership from the summit.
          </h2>

          <p className="mt-6 text-white/60">
            This is leadership from the climb. From pressure. From failure. 
            From the moments where ego breaks and truth remains.
          </p>
        </div>
      </section>

      {/* EMAIL */}
      <section id="early-access" className="px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">
            Be first to know when it launches
          </h2>

          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-black border border-white/10 px-5 py-3 text-white"
            />

            <button
              className="rounded-full bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-400"
            >
              Join
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
