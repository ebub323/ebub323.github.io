import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "Ebube Eze · Techboy.dev";
const description =
  "Project portfolio of Ebube Eze: Applyr, Playtest Room, Mission 10K, CreditBridge, HouseQuest, ShiftStack, Skolmark, The Hollow Games, Flip Radar and FriendNet, with a stage-by-stage look at how each one works.";

export const metadata: Metadata = {
  metadataBase: new URL("https://techboy.dev"),
  title,
  description,
  openGraph: { title, description, url: "https://techboy.dev", siteName: "Techboy.dev", type: "website" },
  twitter: { card: "summary", title, description },
  alternates: { canonical: "https://techboy.dev" },
};

// GitHub Pages can't send HTTP headers, so the policy ships as meta tags.
// Next.js inlines its bootstrap scripts, so script-src needs 'unsafe-inline'.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
].join("; ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
