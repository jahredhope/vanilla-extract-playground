import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const properties = defineProperties({
  properties: {
    color: ["green", "blue", "red"],
  },
});

export const atoms = createSprinkles(properties);

export const redFromAtomsInCss = atoms({ color: "red" });
