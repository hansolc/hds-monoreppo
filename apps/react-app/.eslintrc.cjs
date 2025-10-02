module.exports = {
  extends: [
    '../../.eslintrc.cjs', // 공통 React 설정 상속
  ],
  parserOptions: {
    project: './tsconfig.app.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // react-app 전용 규칙 오버라이드
  },
}
