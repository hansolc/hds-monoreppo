import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";
import { join } from "path";
import { existsSync, readdirSync, statSync } from "fs";

function getComponentEntries() {
  const componentsDir = join(process.cwd(), "src/components");

  return readdirSync(componentsDir)
    .filter((name) => {
      const path = join(componentsDir, name);
      // 디렉토리만 필터링
      return statSync(path).isDirectory();
    })
    .map((name) => {
      // index.ts 또는 index.tsx 찾기
      const tsPath = `src/components/${name}/index.ts`;
      const tsxPath = `src/components/${name}/index.tsx`;

      if (existsSync(tsxPath)) {
        return tsxPath;
      }
      return tsPath; // .ts가 없어도 tsup이 에러를 내므로 기본값
    });
}

export default defineConfig((options) => ({
  entry: ["src/components/index.ts", ...getComponentEntries()],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
