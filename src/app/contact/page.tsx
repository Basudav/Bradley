import type { Metadata } from "next";
import { ContactPage } from "@/page-modules/contact/ContactPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote: Window Cleaner in Ilkeston",
  description:
    "Get a free window, gutter or fascia cleaning quote. Message on WhatsApp, call 07502 102 869, email or use the quote form.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact & Free Quote: Window Cleaner in Ilkeston | Bradley's Window Cleaning",
    description:
      "Get a free window, gutter or fascia cleaning quote. Message on WhatsApp, call 07502 102 869, email or use the quote form.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function Page() {
  return <ContactPage />;
}
