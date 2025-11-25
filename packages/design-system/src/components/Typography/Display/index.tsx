import { AtomProps } from "@/types/atoms";
import { forwardRef, HtmlHTMLAttributes } from "react";
import { Typography } from "..";
import { typographyDisplay } from "./index.css";
import { TypographySize } from "@/components/Typography/types";

export interface DisplayProps
  extends Omit<HtmlHTMLAttributes<HTMLHeadElement>, "color" | "size">,
    AtomProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: TypographySize;
}

export const Display = forwardRef<HTMLHeadingElement, DisplayProps>(
  ({ children, as = "h1", size = "md", ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        as={as}
        className={typographyDisplay({ size })}
        {...props}
      >
        {children}
      </Typography>
    );
  },
);
