import { globalStyle } from "@vanilla-extract/css";

// Pretendard 폰트는 HTML head에서 로드됩니다:
// <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css" />

// Pretendard를 기본 폰트로 설정하는 클래스
export const pretendardFont =
  'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

globalStyle(`.font-pretendard`, {
  fontFamily: pretendardFont,
});

globalStyle(`.font-pretendard *`, {
  fontFamily: pretendardFont,
});
