import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Microprism",
  description:
    "Get help with Microprism. Contact, frequently asked questions, and how to reach us.",
};

const faqs = [
  {
    q: "How do I restore my purchase?",
    a: "Open Settings inside the app, then tap Purchase, then Restore Purchase. As long as you are signed in to the same Apple Account you bought with, your unlock will return at no charge.",
  },
  {
    q: "What is the difference between RAW and Apple ProRAW?",
    a: "RAW captures the sensor data with the heavy computational processing turned down, so photos look like what the lens actually saw. Apple ProRAW keeps more of Apple's tone mapping and detail work. You can switch between them in the camera settings.",
  },
  {
    q: "Where are my photos stored?",
    a: "On your device. Captures save to your Photos library, and the app keeps an on-device Studio library so you can re-look shots later. Nothing is uploaded, and your photos never leave your phone unless you choose to share or export them.",
  },
  {
    q: "Does the coaching feature send my photos anywhere?",
    a: "No. The optional composition and exposure guidance runs locally using Apple's on-device frameworks. No image or analysis result is ever sent to us or anyone else.",
  },
  {
    q: "How do I lock focus on a face?",
    a: "Tap the box around a face on the camera screen. Focus and exposure follow that face as it moves; tap it again to release. You can hide the face boxes in Settings, then Camera, and tapping a face still works.",
  },
  {
    q: "Why do some looks make my photos softer?",
    a: "On purpose. The retro looks recreate how early phone photos were shared, softer detail included. The cinematic looks and the honest no-look mode keep full detail. In Studio you can re-look any RAW shot in a different style at any time.",
  },
  {
    q: "How do I turn the creative prompts on or off?",
    a: "The twice-daily creative prompts are optional. You can enable or disable them, and adjust their timing, in the app's Settings.",
  },
  {
    q: "What iPhone and iOS version do I need?",
    a: "Microprism is an iPhone app and requires a recent version of iOS. Some features, such as the Camera Control button, need newer hardware. The App Store listing shows the exact requirements for your device.",
  },
  {
    q: "I found a bug or have a feature request. How do I reach you?",
    a: "Email developer.ryan.mcgee@icloud.com with as much detail as you can, including your iPhone model and iOS version. We read every message.",
  },
];

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <span className="text-[12px] uppercase tracking-widest text-ember">
        Support
      </span>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        How can we help?
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-fog">
        Microprism is made by an independent developer who reads every message.
        The fastest way to get help is email, and most questions are answered
        below.
      </p>

      <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-panel p-6 sm:p-8">
        <h2 className="text-[15px] font-semibold text-paper">Contact</h2>
        <p className="mt-2 text-fog">
          Email us at{" "}
          <a
            href="mailto:developer.ryan.mcgee@icloud.com"
            className="font-semibold text-ember hover:text-halation"
          >
            developer.ryan.mcgee@icloud.com
          </a>
          . We aim to reply within a couple of days. Including your iPhone model
          and iOS version helps us help you faster.
        </p>
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        Frequently asked questions
      </h2>
      <dl className="mt-6 divide-y divide-line/70 border-y border-line/70">
        {faqs.map((item) => (
          <div key={item.q} className="py-6">
            <dt className="text-[16px] font-semibold text-paper">{item.q}</dt>
            <dd className="mt-2 leading-relaxed text-fog">{item.a}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 flex flex-wrap gap-6 text-[15px]">
        <Link href="/privacy/" className="font-semibold text-ember hover:text-halation">
          Privacy Policy
        </Link>
        <Link href="/" className="font-semibold text-fog hover:text-paper">
          Back to home
        </Link>
      </div>
    </div>
  );
}
