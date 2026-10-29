import type { Metadata, Viewport } from "next";
import { Fredoka, Lexend } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/schema";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2693D6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Window Cleaner in Ilkeston & Long Eaton | Bradley's Window Cleaning",
    template: "%s | Bradley's Window Cleaning",
  },
  description:
    "Friendly, reliable, streak-free window, gutter, fascia and door cleaning in Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. Get a free quote today.",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "Window Cleaner in Ilkeston & Long Eaton | Bradley's Window Cleaning",
    description:
      "Friendly, reliable, streak-free window, gutter, fascia and door cleaning in Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. Get a free quote today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Cleaner in Ilkeston & Long Eaton | Bradley's Window Cleaning",
    description:
      "Friendly, reliable, streak-free window, gutter, fascia and door cleaning in Ilkeston, Long Eaton, Draycott, Stapleford and Spondon. Get a free quote today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const webSiteSchema = buildWebSiteSchema();

  return (
    <html lang="en-GB" className={`${fredoka.variable} ${lexend.variable}`}>
      <head>
        {/*
          Analytics Placeholder:
          Add privacy-friendly analytics script (e.g. Plausible, Fathom, or GA4) here when ready.
        */}
      </head>
      <body className="min-h-dvh bg-white font-sans text-navy antialiased overflow-x-clip">
        <SkipToContent />
        <TopBar />
        <Header />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
        <FloatingWhatsApp />
        <JsonLd data={[localBusinessSchema, webSiteSchema]} />
      </body>
    </html>
  );
}
