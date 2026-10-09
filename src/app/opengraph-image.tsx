import { ImageResponse } from "next/og";
export const alt = "Dovindustries — software, hardware, and room to explore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#e6eef3", color: "#20242b", display: "flex", flexDirection: "column", padding: "64px 72px", justifyContent: "space-between" }}>
      <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-2px" }}>dovindustries</div>
      <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: "-4px", maxWidth: 930 }}>Software, hardware, and room to explore.</div>
      <div style={{ display: "flex", fontSize: 24, color: "#5a636c" }}>Live projects. Ongoing research.</div>
    </div>, size,
  );
}
