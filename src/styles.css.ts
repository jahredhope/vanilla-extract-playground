import { globalStyle, style } from "@vanilla-extract/css";

export const greenText = style({ color: "green" });

globalStyle(`body ${greenText}`, {
  fontWeight: "bold",
});
