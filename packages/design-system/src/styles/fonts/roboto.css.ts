import { globalFontFace, globalStyle } from "@vanilla-extract/css";

// Roboto 폰트 정의
globalFontFace("Roboto", {
  src: 'url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")',
  fontWeight: "400",
  fontStyle: "normal",
});

globalFontFace("Roboto", {
  src: 'url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")',
  fontWeight: "500",
  fontStyle: "normal",
});

globalFontFace("Roboto", {
  src: 'url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")',
  fontWeight: "700",
  fontStyle: "normal",
});

// Roboto를 기본 폰트로 설정하는 클래스
export const robotoFont = "Roboto, sans-serif";

globalStyle(`.font-roboto`, {
  fontFamily: robotoFont,
});

globalStyle(`.font-roboto *`, {
  fontFamily: robotoFont,
});
