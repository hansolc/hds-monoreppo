import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: {
    index: "src/index.ts",
    "primitives/index": "src/primitives/index.ts",
    "theme/index": "src/theme/index.ts",
    "sprinkles/sprinkles.css": "src/sprinkles/sprinkles.css.ts",
    "reset/reset.css": "src/reset/reset.css.ts",
  },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
