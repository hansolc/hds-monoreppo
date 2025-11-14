import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    padding: {
      none: "0",
      small: "8px",
      medium: "16px",
      large: "24px",
    },
    margin: {
      none: "0",
      small: "8px",
      medium: "16px",
      large: "24px",
    },
  },
  shorthands: {
    p: ["padding"],
    m: ["margin"],
  },
});

const baseProperties = defineProperties({
  properties: {
    cursor: ["default", "pointer"],
    borderRadius: {
      none: "0",
      small: "4px",
      medium: "8px",
      large: "16px",
    },
  },
});

// 3. Sprinkles 함수 생성
export const sprinkles = createSprinkles(responsiveProperties, baseProperties);

// 4. 타입 추출
export type Sprinkles = Parameters<typeof sprinkles>[0];
