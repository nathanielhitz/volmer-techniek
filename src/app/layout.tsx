import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/*
  Display font: Space Grotesk — geometric grotesque, industrial-premium feel.
  Production target: Söhne Breit (licensed). Swap by changing the variable.
*/
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Volmer Techniek — Maatwerk machinebouw, lassen en thermische lansen",
  description:
    "Maatwerk machinebouw, lassen, staalconstructies en thermische lansen voor offshore, mining, maritiem en industrie. Eén werkplaats, één ploeg — sinds 1987.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-full flex-col bg-obsidian text-ash antialiased">
        {children}
      </body>
    </html>
  );
}
