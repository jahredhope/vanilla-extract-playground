import fontMetrics from "@capsizecss/metrics/appleSystem";
import { createTextStyle } from "@capsizecss/vanilla-extract";

export const xlargeText = createTextStyle({
  fontSize: 32,
  leading: 28,
  fontMetrics: fontMetrics,
});

export const largeText = createTextStyle({
  fontSize: 18,
  leading: 24,
  fontMetrics: fontMetrics,
});

export const mediumText = createTextStyle({
  fontSize: 16,
  leading: 24,
  fontMetrics: fontMetrics,
});

export const smallText = createTextStyle({
  fontSize: 14,
  leading: 18,
  fontMetrics: fontMetrics,
});
