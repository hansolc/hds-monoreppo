import { style, keyframes } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

// Base 스타일
export const button = style({
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontFamily: "system-ui, sans-serif",
  fontWeight: 600,
  lineHeight: 1,
  cursor: "pointer",
  userSelect: "none",
  borderRadius: "6px",
  transition: "all 0.2s ease-in-out",
  outline: "none",
  border: "1px solid transparent",

  ":focus-visible": {
    outline: "2px solid",
    outlineOffset: "2px",
  },

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

// 로딩 애니메이션
const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

// 로딩 스타일
export const loading = style({
  animation: `${spin} 1s linear infinite`,
});

// Variants 정의
export const buttonVariants = recipe({
  base: button,

  variants: {
    variant: {
      primary: {
        backgroundColor: "#2563eb",
        color: "#ffffff",
        ":hover": {
          backgroundColor: "#1d4ed8",
        },
        ":active": {
          backgroundColor: "#1e40af",
        },
        ":focus-visible": {
          outlineColor: "#2563eb",
        },
      },
      secondary: {
        backgroundColor: "#e5e7eb",
        color: "#1f2937",
        ":hover": {
          backgroundColor: "#d1d5db",
        },
        ":active": {
          backgroundColor: "#9ca3af",
        },
        ":focus-visible": {
          outlineColor: "#6b7280",
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: "#2563eb",
        borderColor: "#2563eb",
        ":hover": {
          backgroundColor: "#eff6ff",
        },
        ":active": {
          backgroundColor: "#dbeafe",
        },
        ":focus-visible": {
          outlineColor: "#2563eb",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "#2563eb",
        ":hover": {
          backgroundColor: "#eff6ff",
        },
        ":active": {
          backgroundColor: "#dbeafe",
        },
        ":focus-visible": {
          outlineColor: "#2563eb",
        },
      },
      danger: {
        backgroundColor: "#dc2626",
        color: "#ffffff",
        ":hover": {
          backgroundColor: "#b91c1c",
        },
        ":active": {
          backgroundColor: "#991b1b",
        },
        ":focus-visible": {
          outlineColor: "#dc2626",
        },
      },
    },

    size: {
      sm: {
        fontSize: "14px",
        padding: "8px 12px",
        height: "32px",
      },
      md: {
        fontSize: "16px",
        padding: "10px 16px",
        height: "40px",
      },
      lg: {
        fontSize: "18px",
        padding: "12px 20px",
        height: "48px",
      },
    },

    fullWidth: {
      true: {
        width: "100%",
      },
    },

    isLoading: {
      true: {
        pointerEvents: "none",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonVariant = NonNullable<RecipeVariants<typeof buttonVariants>>;
