import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  /**
   * 진입점: src/index.ts 하나로 통합
   * 모든 컴포넌트를 여기서 자동으로 export
   */
  entry: ["src/index.ts"],

  // 포맷: ESM과 CommonJS 모두 지원
  format: ["esm", "cjs"],

  // TypeScript 타입 정의 파일 생성
  dts: {
    resolve: true, // 외부 타입도 해결
    entry: "src/index.ts",
  },

  // 소스맵 생성 (디버깅용)
  sourcemap: true,

  // 빌드 전 dist 폴더 정리
  clean: true,

  // 외부 의존성 (번들에 포함하지 않음)
  external: ["react", "react-dom", "react/jsx-runtime"],

  // Tree-shaking 활성화
  treeshake: true,

  // Code splitting 활성화 (ESM만)
  splitting: true,

  // Minify 설정
  minify: false,

  // esbuild 플러그인 - vanilla-extract 지원
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: "short",
    }),
  ],

  // esbuild 옵션 커스터마이징
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "react";
    options.platform = "browser";

    // 더 나은 Tree-shaking을 위한 설정
    options.treeShaking = true;
  },

  // 번들 분석을 위한 메타파일 생성
  metafile: true,

  // Banner
  banner: {
    js: `/**
 * @repo/ui v0.0.0
 * Design System Components
 * Built with tsup + vanilla-extract
 */`,
  },

  // 출력 옵션
  outDir: "dist",

  // CJS 호환성
  cjsInterop: true,

  // shims 비활성화 (browser platform에서는 불필요)
  shims: false,
});
