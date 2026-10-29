import { cn } from "@/lib/utils";

type ContainerElement = "div" | "section" | "article" | "main" | "aside" | "header" | "footer" | "nav";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ContainerElement;
}

export function Container({
  children,
  className,
  as: Element = "div",
}: ContainerProps) {
  return (
    <Element
      className={cn(
        "mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 max-w-7xl 3xl:max-w-[1536px]",
        className,
      )}
    >
      {children}
    </Element>
  );
}
