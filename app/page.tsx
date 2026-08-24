import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/base";

const shots = {
  honest: asset("/screenshots/01-honest-framed.png"),
  looks: asset("/screenshots/02-looks-framed.png"),
  coach: asset("/screenshots/03-coach-framed.png"),
  camera: asset("/screenshots/camera-seeded-framed.png"),
  studioGrid: asset("/screenshots/studio-grid-framed.png"),
  studioLook: asset("/screenshots/studio-edit-look-framed.png"),
  studioLevels: asset("/screenshots/studio-edit-levels-framed.png"),
};

function Phone({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1320}
        height={2868}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 0%, rgba(230,161,92,0.18), transparent 60%), radial-gradient(50% 40% at 15% 20%, rgba(201,121,58,0.12), transparent 55%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft px-3 py-1 text-[12px] uppercase tracking-widest text-ember">
              Coming soon to the App Store
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Your photos, honest.
            </h1>
            <p className="mt-5 max-w-md text-balance text-lg leading-relaxed text-fog">
              Microprism captures pure, unfiltered RAW, the scene as your lens
              actually saw it. Then you wrap it in the warm, grainy looks of the
              early-smartphone filter era. On your terms.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#looks"
                className="rounded-full bg-ember px-6 py-3 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                See the looks
              </Link>
              <Link
                href="/support/"
                className="rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:border-fog"
              >
                Support
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-fog-soft">
              Runs entirely on your device. No account, no tracking, nothing
              collected.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[300px]">
            <Phone src={shots.honest} alt="Microprism camera showing an honest, unfiltered capture" priority />
          </div>
        </div>
      </section>

      {/* Honest capture */}
      <Section
        eyebrow="Honest capture"
        title="No smoothing. No watercolor skies. No invisible fixes."
        body="Most phone cameras process your photos into a smooth, plastic look before you ever see them. Microprism turns the heavy computational processing all the way down and captures pure RAW, with real detail and real grain. Prefer Apple's richer pipeline? Apple ProRAW is one toggle away."
      />

      {/* Looks */}
      <SplitSection
        id="looks"
        eyebrow="Looks, not filters"
        title="The look of early phone photos, done right."
        points={[
          "Warm, faded color and moody high-contrast fades.",
          "True black and white, from crunchy and neutral to soft and cool.",
          "Cinematic and classic emulsion grades with real grain, bloom and halation.",
        ]}
        footnote="Every look is drawn by hand, not borrowed, so your photos keep their full resolution and their own personality."
        shot={shots.looks}
        shotAlt="A live look applied in the Microprism viewfinder"
      />

      {/* Real camera */}
      <section id="camera" className="mx-auto max-w-6xl px-5 py-20">
        <Eyebrow>A real camera under the hood</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you reach for, right where you need it.
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <Feature title="RAW and ProRAW" body="Bayer RAW by default, with optional Apple ProRAW when you want it." />
            <Feature title="Full manual control" body="Focus, exposure, ISO, shutter and zoom, all at your fingertips." />
            <Feature title="Live readouts" body="A live histogram, focus peaking and zebra stripes for precise exposure." />
            <Feature title="Software long exposure" body="Light trails and silky water, no tripod app required." />
            <Feature title="Studio" body="Come back to any RAW shot later to re-look, crop, straighten and fine-tune. Your original is never touched." />
            <Feature title="Creative prompts" body="Gentle daily photo challenges that get you out and shooting." />
          </div>
          <div className="mx-auto w-full max-w-[280px]">
            <Phone src={shots.camera} alt="Microprism manual camera controls" />
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="border-y border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>A studio that remembers</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One RAW. Every look. Whenever you come back to it.
          </h2>
          <p className="mt-4 max-w-xl text-fog">
            Re-develop any shot into a new style, non-destructively. Crop,
            straighten, and adjust exposure, contrast and grain. Import your
            existing photos to give them a new look, and export to iCloud Drive
            when you want a backup.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="mx-auto w-full max-w-[240px]">
              <Phone src={shots.studioGrid} alt="Studio grid of one RAW shot in many looks" />
            </div>
            <div className="mx-auto w-full max-w-[240px]">
              <Phone src={shots.studioLook} alt="Re-developing a RAW shot into a new look" />
            </div>
            <div className="mx-auto w-full max-w-[240px]">
              <Phone src={shots.studioLevels} alt="Fine-tuning levels in Studio" />
            </div>
          </div>
        </div>
      </section>

      {/* Coach (modest) */}
      <SplitSection
        reverse
        eyebrow="A nudge when you want one"
        title="An optional helper, only if you ask for it."
        points={[
          "A quick tip in the moment, or a note after the shot.",
          "It suggests things you can do right now: move, reframe, wait for better light.",
          "It never edits your photo for you, and it runs entirely on your device.",
        ]}
        shot={shots.coach}
        shotAlt="An optional composition tip shown over a live scene"
      />

      {/* Privacy */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-[var(--radius-card)] border border-line bg-panel p-8 sm:p-12">
          <Eyebrow>Yours, and only yours</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Private by design.
          </h2>
          <p className="mt-4 max-w-2xl text-fog">
            Microprism runs entirely on your device. No account, no sign-up, no
            tracking, nothing is collected. Your photos never leave your phone
            unless you choose to share them.
          </p>
          <Link
            href="/privacy/"
            className="mt-6 inline-block text-[15px] font-semibold text-ember hover:text-halation"
          >
            Read the full privacy policy
          </Link>
        </div>
      </section>

      {/* Closing band */}
      <section className="border-t border-line/60 bg-ink-soft">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Shoot honest. Finish with feeling.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-fog">
            Microprism is coming to the App Store. Questions in the meantime? We
            are happy to help.
          </p>
          <Link
            href="/support/"
            className="mt-8 inline-block rounded-full bg-ember px-7 py-3 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Get support
          </Link>
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] uppercase tracking-widest text-ember">
      {children}
    </span>
  );
}

function Section({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-fog">
        {body}
      </p>
    </section>
  );
}

function SplitSection({
  id,
  eyebrow,
  title,
  points,
  footnote,
  shot,
  shotAlt,
  reverse = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  points: string[];
  footnote?: string;
  shot: string;
  shotAlt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <div
        className={`grid items-center gap-12 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 max-w-md text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-fog">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ember" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
          {footnote && (
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-fog-soft">
              {footnote}
            </p>
          )}
        </div>
        <div className="mx-auto w-full max-w-[280px]">
          <Phone src={shot} alt={shotAlt} />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-line bg-panel/60 p-5">
      <h3 className="text-[15px] font-semibold text-paper">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-fog">{body}</p>
    </div>
  );
}
