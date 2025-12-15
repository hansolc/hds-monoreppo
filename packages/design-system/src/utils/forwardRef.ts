// import { forwardRef } from "react";

// export function forwardRefWithAs<
//   T extends { name: string; displayName?: string },
// >(component: T, displayName: string): T & { displayName: string } {
//   return Object.assign(forwardRef(component as any) as any, {
//     displayName: displayName ?? "Unknown",
//   });
// }

// export function forwardRef<T, P = {}>(
//   render: (props: P, ref: React.ForwardedRef<T>) => React.ReactNode
// ): (
//   props: React.PropsWithoutRef<P> & React.RefAttributes<T>
// ) => React.ReactNode;
