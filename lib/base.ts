// GitHub Pages serves this project under /Microprism, so raw asset URLs passed
// to next/image (which does not prefix basePath for unoptimized images) must be
// prefixed by hand. next.config.mjs exposes the active basePath here.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
