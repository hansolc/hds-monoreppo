import { globalStyle } from "@vanilla-extract/css";

// Roboto 폰트는 HTML head에서 로드됩니다:
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

// Roboto를 기본 폰트로 설정하는 클래스
export const robotoFont = "Roboto, sans-serif";

globalStyle(`.font-roboto`, {
  fontFamily: robotoFont,
});

globalStyle(`.font-roboto *`, {
  fontFamily: robotoFont,
});
