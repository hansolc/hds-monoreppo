import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
