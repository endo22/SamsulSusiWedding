import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Undangan Pernikahan Samsul & Susi - 22 November 2025",
  description:
    "Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pemberkatan pernikahan kami. Sabtu, 22 November 2025 di GMI Filadelfia Pancuran.",
  metadataBase: new URL("https://samsulsusiwedding.vercel.app"),
  openGraph: {
    title: "Undangan Pernikahan Samsul & Susi - 22 November 2025",
    description:
      "Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pemberkatan pernikahan kami. Sabtu, 22 November 2025 di GMI Filadelfia Pancuran.",
    url: "https://samsulsusiwedding.vercel.app",
    siteName: "Undangan Pernikahan Samsul & Susi",
    images: [
      {
        url: "/images/Greetingcard.jpg",
        width: 1200,
        height: 630,
        alt: "Undangan Pernikahan Samsul Rifandi Marpaung & Susi Maya Harianja - 22 November 2025",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Pernikahan Samsul & Susi - 22 November 2025",
    description:
      "Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pemberkatan pernikahan kami. Sabtu, 22 November 2025 di GMI Filadelfia Pancuran.",
    images: ["/images/Greetingcard.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
