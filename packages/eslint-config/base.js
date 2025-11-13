import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import onlyWarn from "eslint-plugin-only-warn";

export default defineConfig([
  // TypeScript ESLint 권장 설정
  ...tseslint.configs.recommended,

  {
    plugins: {
      "no-relative-import-paths": noRelativeImportPaths,
      "only-warn": onlyWarn,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
        JSX: "readonly",
      },
    },

    rules: {
      // 필요한 커스텀 규칙을 여기에 정의합니다.
      "@typescript-eslint/explicit-function-return-type": "off",

      // 네이밍 컨벤션
      "@typescript-eslint/naming-convention": [
        "warn",
        // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        // camelCase 함수, PascalCase 함수 허용
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        // PascalCase 클래스, interfaces, type aliases, enums 허용
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        // interface 앞에 I 사용 불가
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
        // typeAlias 앞에 T 사용 불가
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          custom: {
            regex: "^T[A-Z]",
            match: false,
          },
        },
        // typeParameter 앞에 T 사용 불가
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          custom: {
            regex: "^T[A-Z]",
            match: false,
          },
        },
      ],

      // 상대 경로 사용 금지
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { allowSameFolder: true, rootDir: "src", prefix: "@" },
      ],

      // 구조분해 할당
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: true,
          },
        },
      ],
    },
  },

  // Ignore 패턴
  {
    ignores: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  },
]);
