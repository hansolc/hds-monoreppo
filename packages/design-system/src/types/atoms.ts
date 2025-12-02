import { Sprinkles } from "@/styles";
import { JSX } from "react";

export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
  className?: string;
}

export type AtomProps = Omit<Atoms, "className" | "reset">;
