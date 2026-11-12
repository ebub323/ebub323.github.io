import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Ebube Eze · Techboy.dev";
const description =
  "Computer science student at Morgan State University in Baltimore. I build web and mobile tools whose every number comes with its reasons: Applyr, CreditBridge, ShiftStack, Skolmark.";

export const metadata: Metadata = {
  metadataBase: new URL("https://techboy.dev"),
  title,
  description,
  openGraph: { title, description, url: "https://techboy.dev", siteName: "Techboy.dev", type: "website" },
  twitter: { card: "summary", title, description },
  alternates: { canonical: "https://techboy.dev" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-paper">{children}</body>
    </html>
  );
}
