import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";
import { existsSync, readdirSync, statSync } from "fs";
import { join } from "path";

// src/components 폴더에서 모든 컴포넌트 디렉토리 자동 탐색
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
  // 별도의 번들로 빌드할 파일들을 지정. 각 entry point는 독립적인 output 파일을 생성.
  entryPoints: [
    "src/components/index.ts",
    ...getComponentEntries(),
    "src/styles/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
