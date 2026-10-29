import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

type CallButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "light";
type CallButtonSize = "md" | "lg";

interface CallButtonProps {
  variant?: CallButtonVariant;
  size?: CallButtonSize;
  showNumber?: boolean;
  className?: string;
}

export function CallButton({
  variant = "primary",
  size = "md",
  showNumber = false,
  className,
}: CallButtonProps) {
  return (
    <ButtonLink
      href={siteConfig.phone.href}
      variant={variant}
      size={size}
      className={className}
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {showNumber ? siteConfig.phone.display : "Call us"}
    </ButtonLink>
  );
}
