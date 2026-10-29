import {
  Sparkles,
  ThumbsUp,
  ArrowUpFromLine,
  ShieldCheck,
  Eye,
  Wallet,
} from "lucide-react";
import type { WhyChooseUsItem } from "@/types";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: "Streak-free every time",
    description:
      "We leave your glass sparkling and streak-free. If it is not perfect, we will come back.",
    icon: Sparkles,
  },
  {
    title: "Friendly and reliable",
    description:
      "We turn up when we say we will, do a thorough job, and leave everything tidy.",
    icon: ThumbsUp,
  },
  {
    title: "Reach up to 3 storeys",
    description:
      "Our telescopic pole system reaches high and awkward windows safely from the ground. No ladders, no hassle.",
    icon: ArrowUpFromLine,
  },
  {
    title: "Fully insured",
    description:
      "We are fully insured for your peace of mind. Relax while we get your windows sparkling.",
    icon: ShieldCheck,
  },
  {
    title: "Attention to detail",
    description:
      "It is not just the glass. We clean sills, frames, doors and remove old marks and stickers.",
    icon: Eye,
  },
  {
    title: "Fair prices, free quotes",
    description:
      "Affordable prices with no hidden fees. Get a free, no-obligation quote today.",
    icon: Wallet,
  },
];
