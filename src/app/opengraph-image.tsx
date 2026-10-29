import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bradley's Window Cleaning - Ilkeston & Long Eaton";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B2540 0%, #1678B8 100%)",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Sparkle badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "40px",
            backgroundColor: "#F27414",
            marginBottom: "30px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0B2540"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            textAlign: "center",
            letterSpacing: "-1px",
          }}
        >
          Bradley&apos;s Window Cleaning
        </h1>

        {/* Orange Accent Bar */}
        <div
          style={{
            width: "120px",
            height: "6px",
            backgroundColor: "#F27414",
            borderRadius: "3px",
            marginBottom: "24px",
          }}
        />

        {/* Services */}
        <p
          style={{
            fontSize: "30px",
            fontWeight: 600,
            color: "#B7DEF7",
            margin: "0 0 20px 0",
            textAlign: "center",
          }}
        >
          Windows &middot; Gutters &middot; Fascias &middot; Doors &middot; Conservatories
        </p>

        {/* Areas */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px 28px",
            borderRadius: "999px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 500,
          }}
        >
          Ilkeston &middot; Long Eaton &middot; Draycott &middot; Stapleford &middot; Spondon
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
