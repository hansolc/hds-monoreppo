module.exports = {
  extends: [
    '../../.eslintrc.cjs', // 공통 React 설정 상속
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // packages/ui 전용 규칙 오버라이드
  },
}
