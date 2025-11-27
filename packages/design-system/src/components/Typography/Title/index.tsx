import { AtomProps } from "@/types/atoms";
import { forwardRef, HtmlHTMLAttributes } from "react";
import { Typography } from "..";
import { TypographySize } from "@/components/Typography/types";
import clsx from "clsx";
import { typographyTitle } from "./index.css";

export interface TitleProps
  extends Omit<HtmlHTMLAttributes<HTMLHeadElement>, "color" | "size">,
    AtomProps {
  children?: React.ReactNode;
  as?: React.ElementType;
  size?: TypographySize;
  emphasized?: boolean;
  className?: string;
}

export const Title = forwardRef<HTMLElement, TitleProps>(
  (
    { children, as = "h1", size = "md", emphasized, className, ...props },
    ref,
  ) => {
    return (
      <Typography
        ref={ref}
        as={as}
        className={clsx(typographyTitle({ size, emphasized }), className)}
        {...props}
      >
        {children}
      </Typography>
    );
  },
);
