import { forwardRef } from "react";

export function forwardRefWithAs<
  T extends { name: string; displayName?: string },
>(component: T, displayName: string): T & { displayName: string } {
  return Object.assign(forwardRef(component as any) as any, {
    displayName: displayName ?? "Unknown",
  });
}
