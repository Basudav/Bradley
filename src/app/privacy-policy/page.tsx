import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/page-modules/privacy-policy/PrivacyPolicyPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Bradley's Window Cleaning website.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
