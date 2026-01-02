import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  useFloating,
  autoUpdate,
  offset as floatingOffset,
  flip,
  shift,
  size,
} from "@floating-ui/react";
import {
  useSelectContext,
  useSelectRefContext,
} from "@/components/Select/context/SelectContext";

const DISPLAY_NAME = "SelectPortal";

export type SelectPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export interface SelectPortalProps {
  children: ReactNode;
  container?: HTMLElement | null;
  closeOnOutsideClick?: boolean;
  placement?: SelectPlacement;
  offset?: number;
  sameWidth?: boolean;
}

export const SelectPortal = ({
  children,
  container = typeof document !== "undefined" ? document.body : null,
  closeOnOutsideClick = true,
  placement = "bottom-start",
  offset = 4,
  sameWidth = true,
}: SelectPortalProps) => {
  const { open, onOpenChange } = useSelectContext();
  const { triggerRef } = useSelectRefContext();
  const portalRef = useRef<HTMLDivElement>(null);

  // Floating UI 설정
  const { refs, floatingStyles, update } = useFloating({
    open,
    placement,
    strategy: "fixed",
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingOffset(offset),
      flip(),
      shift({ padding: 8 }),
      sameWidth &&
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              minWidth: `${rects.reference.width}px`,
            });
          },
        }),
    ].filter(Boolean),
  });

  // Trigger와 Portal ref를 즉시 연결
  useEffect(() => {
    if (open && triggerRef?.current) {
      refs.setReference(triggerRef.current);
    }
  }, [open, triggerRef, refs]);

  useEffect(() => {
    if (open && portalRef.current) {
      refs.setFloating(portalRef.current);
      // ref 설정 후 즉시 위치 업데이트
      update?.();
    }
  }, [open, refs, update]);

  // 외부 클릭 감지
  useEffect(() => {
    if (!open || !closeOnOutsideClick) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (portalRef.current?.contains(target)) {
        return;
      }

      if (triggerRef?.current?.contains(target)) {
        return;
      }

      onOpenChange(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, closeOnOutsideClick, onOpenChange, triggerRef]);

  if (!open) return null;

  const content = (
    <div
      ref={portalRef}
      style={{
        ...floatingStyles,
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  );

  if (!container) {
    return content;
  }

  return createPortal(content, container);
};

SelectPortal.displayName = DISPLAY_NAME;
