import { Img, staticFile } from "remotion";
import { colors, fontFamily } from "./theme";

/** The AR monogram from the site's favicon (src/assets/AR.svg). */
export const BrandMark: React.FC<{ size: number }> = ({ size }) => (
  <Img
    src={staticFile("brand/ar-logo.svg")}
    style={{
      width: size,
      height: size,
      borderRadius: size * 0.18,
      border: `1.5px solid ${colors.border}`,
    }}
  />
);

export const Wordmark: React.FC<{ size: number }> = ({ size }) => (
  <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
    <BrandMark size={size} />
    <span
      style={{
        fontFamily,
        fontSize: size * 0.5,
        fontWeight: 500,
        letterSpacing: "-0.03em",
        color: colors.text,
      }}
    >
      AR Digital Solutions
    </span>
  </div>
);

/** Small uppercase label with a leading rule, like the site's eyebrows. */
export const Eyebrow: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 18,
      fontFamily,
      ...style,
    }}
  >
    <span
      style={{
        width: 56,
        height: 1.5,
        backgroundColor: "rgba(255,255,255,0.4)",
      }}
    />
    <span
      style={{
        fontSize: 22,
        fontWeight: 500,
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: colors.dim,
      }}
    >
      {children}
    </span>
  </div>
);
