// 공통 React ESLint 설정 (모든 React 프로젝트에서 공유)
module.exports = {
  root: true,
  extends: [
    '@rushstack/eslint-config/profile/web-app',
    '@rushstack/eslint-config/mixins/react',
  ],
  ignorePatterns: [
    'dist',
    '.next',
    'build',
    'node_modules',
    '*.config.ts',
    '*.config.js',
  ],
  rules: {
    // 공통 규칙 오버라이드
    '@typescript-eslint/naming-convention': 'warn',
    '@rushstack/typedef-var': 'off', // 타입 추론 허용
    'react/jsx-no-bind': 'off', // 인라인 화살표 함수 허용
    '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 자동 추론 허용
    'react/jsx-no-bind': 'off', // 인라인 화살표 함수 허용
  },
}
