import React from "react";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: "display" | "large" | "medium" | "small";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const variantStyles = {
  display: "text-7xl md:text-8xl font-bold tracking-tight",
  large: "text-4xl md:text-5xl font-bold tracking-tight",
  medium: "text-3xl md:text-4xl font-semibold tracking-tight",
  small: "text-2xl md:text-3xl font-semibold tracking-tight",
};

const defaultElements = {
  display: "h1",
  large: "h1",
  medium: "h2",
  small: "h3",
} as const;

export const Title = ({
  variant = "medium",
  as,
  children,
  className,
  ...props
}: TitleProps) => {
  const Element = as || defaultElements[variant];
  return (
    <Element className={variantStyles[variant]} {...props}>
      {children}
    </Element>
  );
};
