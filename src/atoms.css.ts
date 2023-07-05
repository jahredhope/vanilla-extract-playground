import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
// import { vars } from "./vars.css";

const properties = defineProperties({
  properties: {
    color: ["green", "blue", "red"],
    // color: { green: vars.green, blue: vars.blue, red: vars.red },
  },
});

export const atoms = createSprinkles(properties);
