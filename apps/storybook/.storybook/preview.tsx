import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  nextPlaygroundLightTheme,
  nextPlaygroundDarkTheme,
} from "@repo/tokens/theme";
import "@repo/design-system/theme.css";
import "@repo/design-system/components.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@repo/base-ui-design-system/index.css";
import "@repo/tokens/index.css";

initialize();

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (Story) => {
      const queryClient = createQueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
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
