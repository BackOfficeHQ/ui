import React from "react";
import { cn,  } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const textVariants = cva("font-medium tracking-tight", {
  variants: {
    variant: {
      display: "text-3xl md:text-5xl",
      large: "text-2xl md:text-4xl",
      medium: "text-xl md:text-3xl",
      small: "text-lg md:text-2xl",
    },
  },
  defaultVariants: {
    variant: "medium",
  },
});

export const Title: React.FC<TitleProps> = ({
  asChild = false,
  as = "h1",
  className,
  variant = "medium",
  ...props
}) => {
  const Comp = asChild ? Slot : as;
  return (
    <Comp className={cn(textVariants({ variant }), className)} {...props} />
  );
};
