import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Microprism: Honest Camera",
  description:
    "Shoot pure, unfiltered RAW, then wrap it in the warm, grainy looks of the early-smartphone filter era. A real camera for iPhone, private by design.",
  keywords: [
    "Microprism",
    "honest camera",
    "RAW camera iPhone",
    "retro film looks",
    "digicam",
    "manual camera app",
  ],
  authors: [{ name: "Ryan McGee" }],
  openGraph: {
    title: "Microprism: Honest Camera",
    description:
      "Pure, unfiltered RAW, wrapped in the warm, grainy looks of the early-smartphone filter era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
