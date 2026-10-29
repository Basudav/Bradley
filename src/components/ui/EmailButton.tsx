import { Mail } from "lucide-react";
import { buildMailto } from "@/lib/contact";
import { ButtonLink } from "@/components/ui/ButtonLink";

type EmailButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "light";
type EmailButtonSize = "md" | "lg";

interface EmailButtonProps {
  subject?: string;
  body?: string;
  variant?: EmailButtonVariant;
  size?: EmailButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export function EmailButton({
  subject = "Quote enquiry",
  body = "",
  variant = "outline",
  size = "md",
  className,
  children,
}: EmailButtonProps) {
  return (
    <ButtonLink
      href={buildMailto(subject, body)}
      variant={variant}
      size={size}
      className={className}
    >
      <Mail className="h-5 w-5" aria-hidden="true" />
      {children ?? "Email us"}
    </ButtonLink>
  );
}
