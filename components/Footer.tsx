import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink-soft">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="text-[15px] font-semibold tracking-tight text-paper">
            Microprism
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-fog-soft">
            An honest camera for iPhone. Pure RAW, hand-built retro looks, and a
            quiet nudge when you want one.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-[14px]">
          <span className="text-[12px] uppercase tracking-widest text-fog-soft">
            Links
          </span>
          <Link href="/" className="text-fog transition-colors hover:text-paper">
            Home
          </Link>
          <Link href="/support/" className="text-fog transition-colors hover:text-paper">
            Support
          </Link>
          <Link href="/privacy/" className="text-fog transition-colors hover:text-paper">
            Privacy Policy
          </Link>
        </div>

        <div className="flex flex-col gap-2.5 text-[14px]">
          <span className="text-[12px] uppercase tracking-widest text-fog-soft">
            Contact
          </span>
          <a
            href="mailto:developer.ryan.mcgee@icloud.com"
            className="text-fog transition-colors hover:text-paper"
          >
            developer.ryan.mcgee@icloud.com
          </a>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-[12px] text-fog-soft sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Ryan McGee. All rights reserved.</span>
          <span>Made with care. Shoot honest.</span>
        </div>
      </div>
    </footer>
  );
}
