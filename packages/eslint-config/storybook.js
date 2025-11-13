import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import storybookPlugin from "eslint-plugin-storybook";
import mdxPlugin from "eslint-plugin-mdx";
import onlyWarn from "eslint-plugin-only-warn";

export default defineConfig([
  // TypeScript ESLint 권장 설정
  ...tseslint.configs.recommended,

  // React 설정
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
  },

  // Storybook 권장 설정
  ...storybookPlugin.configs["flat/recommended"],

  // 메인 설정
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      storybook: storybookPlugin,
      "only-warn": onlyWarn,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        JSX: "readonly",
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // React Hooks 권장 규칙
      ...reactHooksPlugin.configs.recommended.rules,

      // React 규칙
      "react/no-unknown-property": "off",
      "react/prop-types": "off",

      // Import 규칙 - Storybook에서는 default export가 필수
      "import/no-default-export": "off",
    },
  },

  // MDX 파일 설정
  {
    files: ["**/*.mdx"],
    ...mdxPlugin.flat,
    processor: mdxPlugin.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },

  // Storybook 스토리 파일 특정 설정
  {
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      // Storybook 스토리에서는 컴포넌트만 export하는 경우가 많음
      "react-hooks/rules-of-hooks": "off",
      // Storybook CSF3 형식 권장
      "storybook/csf-component": "error",
    },
  },

  // .storybook 디렉토리도 린트 대상에 포함
  {
    ignores: ["!.storybook"],
  },

  // 일반 Ignore 패턴
  {
    ignores: ["node_modules/", "dist/", "build/", "storybook-static/"],
  },
]);
