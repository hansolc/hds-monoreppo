import { globalFontFace, globalStyle } from "@vanilla-extract/css";

// Pretendard 폰트 정의 (CDN 사용)
globalFontFace("Pretendard", {
  src: 'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css")',
  fontWeight: "400",
  fontStyle: "normal",
});

globalFontFace("Pretendard", {
  src: 'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css")',
  fontWeight: "500",
  fontStyle: "normal",
});

globalFontFace("Pretendard", {
  src: 'url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css")',
  fontWeight: "700",
  fontStyle: "normal",
});

// Pretendard를 기본 폰트로 설정하는 클래스
export const pretendardFont =
  'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

globalStyle(`.font-pretendard`, {
  fontFamily: pretendardFont,
});

globalStyle(`.font-pretendard *`, {
  fontFamily: pretendardFont,
});
