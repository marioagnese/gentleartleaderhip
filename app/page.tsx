import Image from "next/image";

const amazonEnglish = "https://www.amazon.com/dp/B0GYJQSQ25";
const amazonPortuguese = "https://www.amazon.com/dp/B0GYJMN8Y4";
const linkedin = "https://www.linkedin.com/in/marioagnese/";

export default function BookLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_40%)]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Now Available
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              The Gentle Art of Leading
            </h1>

            <p className="mt-6 text-xl text-white/70">
              What thirty-five years on the mat taught me about leadership.
            </p>

            <p className="mt-8 max-w-xl text-white/60">
              Leadership under pressure. Ego, failure, resilience, and rebuilding —
              told through thirty-five years of Jiu-Jitsu and thirty years inside
              global corporations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={amazonEnglish}
                target="_blank"
                className="rounded-full bg-blue-500 px-7 py-4 text-center font-bold text-white hover:bg-blue-400"
              >
                Buy in English
              </a>

              <a
                href={amazonPortuguese}
                target="_blank"
                className="rounded-full bg-white px-7 py-4 text-center font-bold text-black hover:bg-white/80"
              >
                Comprar em Português
              </a>
            </div>

<p className="mt-4 text-xs text-white/40">
  Portuguese edition also available on Amazon outside Brazil
</p>


            <p className="mt-8 italic text-white/40">
              “The mat never lies. Neither does the boardroom.”
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative h-[600px]">
              <div className="absolute left-6 top-6 z-0 opacity-70">
                <Image
                  src="/TheGALBack.png"
                  alt="Back cover of The Gentle Art of Leading"
                  width={400}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>

              <div className="absolute z-10">
                <Image
                  src="/TheGAL.png"
                  alt="Front cover of The Gentle Art of Leading"
                  width={400}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold">
          This is not leadership from the summit.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-white/60">
          This is leadership from the climb. From pressure. From failure.
          From the moments where ego breaks and truth remains.
        </p>
      </section>

      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            From the Mat
          </p>

          <h2 className="mt-5 text-center text-4xl font-semibold">
            The lessons were earned in real pressure.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4">
            {[
              ["/author-corporate.jpg", "Training and teaching on the mat"],
              ["/author-training-2.jpg", "With Professor Rilion Gracie"],
              ["/academy-lineup.jpg", "The academy community"],
              ["/author-training-3.jpg", "Teaching the next generation"],
            ].map(([src, alt]) => (
              <div
                key={src}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={500}
                  height={500}
                  className="h-72 w-full object-cover grayscale transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Meet the Author
            </p>

            <h2 className="mt-5 text-4xl font-semibold">Mario Agnese</h2>

            <p className="mt-6 text-white/60">
              Mario Agnese is a 5th degree Gracie Jiu-Jitsu black belt with
              thirty-five years on the mat and thirty years navigating global
              corporate leadership. He lives in Houston, Texas, where he is
              co-owner of Rilion Gracie Katy and Dojo Coffee Shop.
            </p>

            <a
              href={linkedin}
              target="_blank"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-bold text-black hover:bg-white/80"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Image
              src="/author-training-4.jpg"
              alt="Mario Agnese training Jiu-Jitsu"
              width={700}
              height={700}
              className="rounded-2xl grayscale"
            />
          </div>
        </div>
      </section>


      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Early Reader Reactions
          </p>

          <h2 className="mt-5 text-center text-4xl font-semibold">
            Leadership lessons that land differently.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "A book about courage, determination, and connection. The courage to show up without filters. The determination to leave a position of disadvantage and redesign your own path. And the ability to recognize jiu-jitsu principles that can be applied to the corporate world.",
                name: "Jose Maria",
                role: "Writer and Executive Leader",
              },
              {
                quote:
                  "The connection between Jiu-Jitsu and business is powerful because it is not forced. The stories feel earned, honest, and useful.",
                name: "Rodrigo Oliveira",
                role: "Entrepreneur",
              },
              {
                quote:
                  "Tap early. Position before submission. I kept thinking about my own career decisions while reading it.",
                name: "Mario Trindade",
                role: "Corporate Manager",
              },
            ].map((item) => (
              <div
                key={item.quote}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-lg leading-8 text-white/75">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/45">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold">Choose your edition</h2>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={amazonEnglish}
            target="_blank"
            className="rounded-full bg-blue-500 px-8 py-4 font-bold text-white hover:bg-blue-400"
          >
            Buy English Edition
          </a>

          <a
            href={amazonPortuguese}
            target="_blank"
            className="rounded-full bg-white px-8 py-4 font-bold text-black hover:bg-white/80"
          >
            Comprar Edição PT
          </a>
        </div>
      </section>
    </main>
  );
}
