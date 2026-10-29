import { FaWhatsapp } from "react-icons/fa6";
import { buildWhatsAppLink } from "@/lib/contact";
import { ButtonLink } from "@/components/ui/ButtonLink";

type WhatsAppButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "light";
type WhatsAppButtonSize = "md" | "lg";

interface WhatsAppButtonProps {
  message?: string;
  variant?: WhatsAppButtonVariant;
  size?: WhatsAppButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  variant = "whatsapp",
  size = "md",
  className,
  children,
}: WhatsAppButtonProps) {
  return (
    <ButtonLink
      href={buildWhatsAppLink(message)}
      external
      variant={variant}
      size={size}
      className={className}
    >
      <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
      {children ?? "WhatsApp us"}
    </ButtonLink>
  );
}
