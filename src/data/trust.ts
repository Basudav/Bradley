import { ThumbsUp, Star, ArrowUpFromLine, MapPin } from "lucide-react";
import type { TrustStat } from "@/types";

export const trustStats: TrustStat[] = [
  {
    value: "100%",
    label: "recommend on Facebook",
    icon: ThumbsUp,
  },
  {
    value: "29",
    label: "Facebook reviews",
    icon: Star,
  },
  {
    value: "3 storeys",
    label: "reached from the ground",
    icon: ArrowUpFromLine,
  },
  {
    value: "5 towns",
    label: "and surrounding areas",
    icon: MapPin,
  },
];
