import type { Preview } from "@storybook/react";
import { defaultThemeClasses } from "@repo/ui";
import "@repo/ui/styles";

const preview: Preview = {};

const initTheme = () => {
  document.body.classList.add(defaultThemeClasses);
};

initTheme();

export default preview;
