import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
  // TypeScript ESLint 권장 설정
  ...tseslint.configs.recommended,

  // React 설정
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],
  },

  // Next.js 및 통합 설정
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@next/next": nextPlugin,
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
      next: {
        rootDir: process.cwd(),
      },
    },

    rules: {
      // React Hooks 권장 규칙
      ...reactHooksPlugin.configs.recommended.rules,

      // Next.js Core Web Vitals 규칙
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-unwanted-polyfillio": "error",
      "@next/next/no-page-custom-font": "warn",
      "@next/next/no-duplicate-head": "error",
      "@next/next/inline-script-id": "error",
      "@next/next/no-css-tags": "error",
      "@next/next/no-head-element": "error",
      "@next/next/no-head-import-in-document": "error",
      "@next/next/no-script-component-in-head": "error",
      "@next/next/no-styled-jsx-in-document": "error",
      "@next/next/no-title-in-document-head": "warn",
      "@next/next/no-typos": "error",
      "@next/next/no-document-import-in-page": "error",
      "@next/next/google-font-display": "warn",
      "@next/next/google-font-preconnect": "warn",
      "@next/next/next-script-for-ga": "warn",
      "@next/next/no-before-interactive-script-outside-document": "warn",

      // JSX A11y 규칙
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",

      // React 규칙
      "react/no-unknown-property": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // Import 규칙
      "import/no-anonymous-default-export": [
        "warn",
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowNew: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
    },
  },

  // Ignore 패턴
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "build/",
      "dist/",
      "next-env.d.ts",
      "**/*.css",
    ],
  },
]);

