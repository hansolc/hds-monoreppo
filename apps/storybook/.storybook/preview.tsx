import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { styles } from "@repo/ui";
import "@repo/ui/styles";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: styles.lightThemeClass,
        dark: styles.darkThemeClass,
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
