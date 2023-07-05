import { globalStyle, style } from "@vanilla-extract/css";
import { atoms } from "./atoms.css";
// import { vars } from "./vars.css";

globalStyle("#root", {
  maxWidth: "1280px",
  margin: "0 auto",
  fontSize: "20px",
  padding: "2rem",
  textAlign: "center",
  // vars: {
  //   [vars.green]: "#11FF11",
  //   [vars.red]: "#FF4444",
  //   [vars.blue]: "#8888FF",
  // },
});

globalStyle("body", {
  margin: 0,
  display: "flex",
  placeItems: "center",
  minWidth: "320px",
  minHeight: "100vh",
});

globalStyle(":root", {
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  lineHeight: "1.5",
  fontWeight: "400",

  colorScheme: "light dark",
  color: "rgba(255, 255, 255, 0.87)",
  backgroundColor: "#242424",

  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
});

export const greenFromStyles = style({
  color: "green",
});

export const redFromStylesWithAtoms = atoms({ color: "red" });

console.log("styles.css.ts EXPORTS", {
  greenFromStyles,
  redFromStylesWithAtoms,
});
