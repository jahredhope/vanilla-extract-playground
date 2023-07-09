import { globalStyle } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  properties: {
    color: ["green", "blue", "red"],
  },
});

export const atoms = createSprinkles(properties);

export const atomsFromCss = atoms({ color: "red" });

export const atomsFromCssUsedInSelector = atoms({ color: "red" });

globalStyle(`body ${atomsFromCssUsedInSelector}`, {
  color: "green",
});
