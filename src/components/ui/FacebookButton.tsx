import { FaFacebook } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

type FacebookButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "light";
type FacebookButtonSize = "md" | "lg";

interface FacebookButtonProps {
  variant?: FacebookButtonVariant;
  size?: FacebookButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export function FacebookButton({
  variant = "secondary",
  size = "md",
  className,
  children,
}: FacebookButtonProps) {
  if (!siteConfig.social.facebookUrl) {
    return null;
  }

  return (
    <ButtonLink
      href={siteConfig.social.facebookUrl}
      external
      variant={variant}
      size={size}
      className={className}
    >
      <FaFacebook className="h-5 w-5" aria-hidden="true" />
      {children ?? "Follow on Facebook"}
    </ButtonLink>
  );
}
