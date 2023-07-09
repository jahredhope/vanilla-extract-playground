import { globalStyle, style } from "@vanilla-extract/css";

export const red = style({ color: "red" });

export const underline = style({ textDecoration: "underline" });

export const green = style({ color: "green" });

export const redText = style([red, underline]);

export const greenText = style([green, underline]);

globalStyle(`body ${greenText}`, {
  fontWeight: "bold",
});
