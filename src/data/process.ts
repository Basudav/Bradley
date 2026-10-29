import { MessageCircle, Wallet, Users, Sparkles } from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Message or call us",
    description:
      "Reach us on WhatsApp, phone, email or the contact form. Whatever is easiest for you.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Get a free quote",
    description:
      "Tell us what you need and where you are. We will get back to you with a free, no-obligation quote.",
    icon: Wallet,
  },
  {
    step: 3,
    title: "We book you in",
    description:
      "One-off or regular, whichever suits you. We will find a time that works.",
    icon: Users,
  },
  {
    step: 4,
    title: "Enjoy sparkling windows",
    description:
      "Friendly, reliable and streak-free every time. Sit back and enjoy the view.",
    icon: Sparkles,
  },
];
