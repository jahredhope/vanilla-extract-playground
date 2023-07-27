import { globalStyle, style } from "@vanilla-extract/css";

export const blueText = style({ color: "blue" });

globalStyle(`body`, {
  fontWeight: "bold",
  border: "solid red 1px",
});
