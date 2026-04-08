import { ImageResponse } from "next/og";
import { siteData, t } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(124,127,255,0.26), transparent 34%), radial-gradient(circle at bottom right, rgba(56,189,248,0.18), transparent 26%), #06060a",
          color: "#e8e8ed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 36,
            display: "flex",
            borderRadius: 32,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#9b9eff",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "#7c7fff",
                boxShadow: "0 0 28px rgba(124,127,255,0.65)",
              }}
            />
            {siteData.name}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 860,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#38bdf8",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                lineHeight: 1.03,
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              {t(siteData.role)}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 31,
                lineHeight: 1.4,
                color: "#b4b4c5",
                maxWidth: 900,
              }}
            >
              {t(siteData.headline)}
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            {["React", "Next.js", ".NET", "Python"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: 24,
                  color: "#d7d7e3",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
