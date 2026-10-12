import { loadFont } from "@remotion/fonts";
import { Easing, staticFile } from "remotion";

export const fontFamily = "Inter";

// The site's typeface (Inter), bundled locally (SIL OFL, see public/fonts/OFL.txt)
loadFont({
  family: fontFamily,
  weight: "100 900",
  url: staticFile("fonts/inter-latin-wght-normal.woff2"),
});

// The site's monochrome palette (Tailwind neutral on pure black)
export const colors = {
  ink: "#000000",
  inkRaised: "#0a0a0a",
  text: "#ffffff",
  muted: "#a3a3a3", // neutral-400
  dim: "#737373", // neutral-500
  faint: "#525252", // neutral-600
  border: "rgba(255,255,255,0.1)",
  canvas: "#000000",
};

export const ease = Easing.bezier(0.16, 1, 0.3, 1);
export const inOut = Easing.bezier(0.65, 0, 0.35, 1);

export const clamp = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;
