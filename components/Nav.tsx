import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="text-[15px] font-semibold tracking-tight text-paper">
            Microprism
          </span>
        </Link>
        <div className="flex items-center gap-6 text-[14px] text-fog">
          <Link href="/#looks" className="hidden transition-colors hover:text-paper sm:inline">
            Looks
          </Link>
          <Link href="/#camera" className="hidden transition-colors hover:text-paper sm:inline">
            Camera
          </Link>
          <Link href="/support/" className="transition-colors hover:text-paper">
            Support
          </Link>
          <Link href="/privacy/" className="transition-colors hover:text-paper">
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Mark() {
  return (
    <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
      <circle cx="32" cy="32" r="17" fill="none" stroke="#e6a15c" strokeWidth="3" />
      <path
        d="M32 15 L32 49 M17.3 23.5 L46.7 40.5 M17.3 40.5 L46.7 23.5"
        stroke="#e6a15c"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="32" cy="32" r="4.5" fill="#f4c99a" />
    </svg>
  );
}
