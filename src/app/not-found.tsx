import type { Metadata } from "next";
import { NotFoundPage } from "@/page-modules/not-found/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
