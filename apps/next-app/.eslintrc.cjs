module.exports = {
  extends: [
    '../../.eslintrc.cjs', // 공통 React 설정 상속
    'next/core-web-vitals', // Next.js 전용 규칙
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // next-app 전용 규칙 오버라이드
  },
}
