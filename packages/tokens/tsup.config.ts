import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: [
    "src/index.ts",
    "src/primitives/index.ts",
    "src/theme/index.ts",
    "src/sprinkles/sprinkles.css.ts",
    "src/reset/reset.css.ts",
  ],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
