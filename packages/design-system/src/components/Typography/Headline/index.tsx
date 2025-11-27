import { AtomProps } from "@/types/atoms";
import { forwardRef, HtmlHTMLAttributes } from "react";
import { Typography } from "..";
import { TypographySize } from "@/components/Typography/types";
import clsx from "clsx";
import { typographyHeadline } from "./index.css";

export interface HeadlineProps
  extends Omit<HtmlHTMLAttributes<HTMLHeadElement>, "color" | "size">,
    AtomProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: TypographySize;
  emphasized?: boolean;
  className?: string;
}

export const Headline = forwardRef<HTMLHeadingElement, HeadlineProps>(
  (
    { children, as = "h1", size = "md", emphasized, className, ...props },
    ref,
  ) => {
    return (
      <Typography
        ref={ref}
        as={as}
        className={clsx(typographyHeadline({ size, emphasized }), className)}
        {...props}
      >
        {children}
      </Typography>
    );
  },
);
