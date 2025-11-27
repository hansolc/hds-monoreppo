export const TEXT_SEMANTICS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "strong",
  "legend",
] as const;

export type TextSemantic = (typeof TEXT_SEMANTICS)[number];
