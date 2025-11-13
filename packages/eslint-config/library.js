import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

/**
 * This is a custom ESLint configuration for use with
 * TypeScript library packages.
 */

export default defineConfig([
  // TypeScript ESLint 권장 설정
  ...tseslint.configs.recommended,

  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        React: "readonly",
        JSX: "readonly",
      },
    },

    rules: {
      // TypeScript 라이브러리에 적합한 규칙
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Ignore 패턴
  {
    ignores: ["node_modules/", "dist/", "**/*.d.ts"],
  },
]);
