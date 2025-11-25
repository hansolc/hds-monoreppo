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
  // document.body.classList.add(defaultThemeClasses);
};

initTheme();

export default preview;
