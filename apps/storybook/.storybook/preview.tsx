import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { lightThemeClass, darkThemeClass } from "@repo/design-system/styles";
import "@repo/design-system/theme.css";
import "@repo/design-system/components.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: lightThemeClass,
        dark: darkThemeClass,
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
