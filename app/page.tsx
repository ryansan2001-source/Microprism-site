import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/base";

const APP_STORE_URL = "https://apps.apple.com/app/id6801923923";

const shots = {
  honest: asset("/screenshots/01-honest-framed.png"),
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
      className={`overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(119,161,212,0.25),0_20px_70px_-30px_rgba(201,121,58,0.25)] ${className}`}
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
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(55% 45% at 20% -5%, rgba(119,161,212,0.22), transparent 60%), radial-gradient(60% 50% at 80% 15%, rgba(230,161,92,0.20), transparent 60%), radial-gradient(50% 45% at 55% 100%, rgba(201,121,58,0.14), transparent 55%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft px-3 py-1 text-[12px] uppercase tracking-widest text-ember">
              Now on the App Store
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
              <a
                href={APP_STORE_URL}
                className="rounded-full bg-ember px-6 py-3 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Get it on the App Store
              </a>
              <Link
                href="/#looks"
                className="rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:border-fog"
              >
                See the looks
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-fog-soft">
              Free to start, with a one-time unlock. Never a subscription. Runs
              entirely on your device: no account, no tracking, nothing
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
          "Your own .cube LUTs, imported from Files and used right alongside the built-in looks.",
        ]}
        footnote="Every look is drawn by hand, not borrowed. The retro looks soften detail on purpose, the way early phone photos did. The cinematic looks keep every pixel."
        shot={shots.studioGrid}
        shotAlt="One RAW shot shown in many Microprism looks"
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
            <Feature title="Full manual control" body="Focus, exposure, ISO, shutter and zoom, plus aperture on iPhone 18 Pro." />
            <Feature title="Face focus" body="Tap a face to lock focus and exposure on it, and it follows as they move." />
            <Feature title="Live readouts" body="A live histogram, focus peaking and zebra stripes for precise exposure." />
            <Feature title="Software long exposure" body="Light trails and silky water, no tripod app required." />
            <Feature title="Video in your look" body="Record clips with your chosen look applied, live, just as you see it." />
            <Feature title="Studio" body="Come back to any RAW shot later to re-look, crop, straighten and fine-tune. Your original is never touched." />
            <Feature title="Creative prompts" body="Gentle twice-daily photo challenges that get you out and shooting." />
            <Feature title="Picks up where you left off" body="The camera reopens with your last look, mode, lens and readouts. Or start fresh every time." />
          </div>
          <div className="mx-auto w-full max-w-[280px]">
            <Phone src={shots.camera} alt="Microprism manual camera controls" />
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="relative overflow-hidden border-y border-line/60 bg-ink-soft">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 15% 0%, rgba(119,161,212,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <Eyebrow>A studio that remembers</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One RAW. Every look. Whenever you come back to it.
          </h2>
          <p className="mt-4 max-w-xl text-fog">
            Re-develop any shot into a new style, non-destructively, including
            your own LUTs. Crop freely or to a classic ratio, straighten, and
            fine-tune exposure, levels and grain, or turn a shot into a
            screen-print halftone or a two-ink riso duotone. Import your existing
            photos to give them a new look, and export to iCloud Drive when you
            want a backup.
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
        eyebrow="A coach when you want one"
        title="It catches it before you shoot."
        points={[
          "Closed eyes, a tilted horizon, blown highlights, a cut-off hand or a smudged lens, spotted live.",
          "Tips you can act on right now: where your subject should sit, what to tap, when to wait for the light.",
          "A quick note after the shot, if you want one.",
          "It never edits your photo for you, and it runs entirely on your device.",
        ]}
        shot={shots.coach}
        shotAlt="An optional composition tip shown over a live scene"
      />

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-5 pt-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-line bg-panel/60 p-8">
            <Eyebrow>Free to start</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Shoot right away.</h3>
            <p className="mt-3 text-fog">
              Honest RAW capture, a set of sample looks, the whole coach and face
              focus, at no charge.
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-panel/60 p-8">
            <Eyebrow>Yours to unlock</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">One purchase, kept forever.</h3>
            <p className="mt-3 text-fog">
              A single one-time unlock, never a subscription, opens the full look
              catalog, your own .cube LUTs, Studio, video and long exposure.
            </p>
          </div>
        </div>
      </section>

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
      <section className="relative overflow-hidden border-t border-line/60 bg-ink-soft">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 90% at 50% 120%, rgba(230,161,92,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Shoot honest. Finish with feeling.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-fog">
            Microprism is on the App Store for iPhone. Questions? We are happy to
            help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={APP_STORE_URL}
              className="inline-block rounded-full bg-ember px-7 py-3 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Get it on the App Store
            </a>
            <Link
              href="/support/"
              className="inline-block rounded-full border border-line px-7 py-3 text-[15px] font-semibold text-paper transition-colors hover:border-fog"
            >
              Get support
            </Link>
          </div>
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
