import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  nextPlaygroundLightTheme,
  nextPlaygroundDarkTheme,
} from "@repo/tokens/theme";
import "@repo/design-system/theme.css";
import "@repo/design-system/components.css";

import "@repo/base-ui-design-system/index.css";
import "@repo/tokens/index.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: nextPlaygroundLightTheme,
        nextPlaygroundDarkTheme,
      },
      defaultTheme: "light",
    }),
  ],
};

const initTheme = () => {
  // Roboto 폰트를 기본으로 적용
  document.body.classList.add("font-roboto");
};

initTheme();

export default preview;
