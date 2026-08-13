import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Maintenance | AI Brand Exhibit",
  description:
    "We're making improvements to deliver you an even better experience. We'll be back shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          background: "#0b060e",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Animated background blobs */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "60vw",
              height: "60vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(222,96,66,0.18) 0%, transparent 70%)",
              animation: "blobFloat 8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "-10%",
              width: "55vw",
              height: "55vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(122,58,143,0.15) 0%, transparent 70%)",
              animation: "blobFloat 11s ease-in-out infinite reverse",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
              animation: "blobFloat 14s ease-in-out infinite",
            }}
          />
        </div>

        {/* Noise/grain texture overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "2rem",
            maxWidth: "680px",
            width: "100%",
          }}
        >
          {/* Animated gear icon */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <div style={{ position: "relative", width: 72, height: 72 }}>
              <svg
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: 72,
                  height: 72,
                  animation: "spinSlow 12s linear infinite",
                }}
              >
                <circle
                  cx="36"
                  cy="36"
                  r="33"
                  stroke="rgba(222,96,66,0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                <path
                  d="M36 14a22 22 0 1 0 0 44A22 22 0 0 0 36 14zm0 6a16 16 0 1 1 0 32A16 16 0 0 1 36 20z"
                  fill="rgba(222,96,66,0.1)"
                  stroke="rgba(222,96,66,0.6)"
                  strokeWidth="1"
                />
                {/* Gear teeth */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <rect
                    key={i}
                    x="34"
                    y="5"
                    width="4"
                    height="10"
                    rx="2"
                    fill="rgba(222,96,66,0.7)"
                    transform={`rotate(${angle} 36 36)`}
                  />
                ))}
                <circle cx="36" cy="36" r="5" fill="rgba(222,96,66,0.9)" />
              </svg>
            </div>
          </div>

          {/* Brand wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "2.5rem",
              animation: "fadeInDown 0.8s ease-out",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              AI Brand Exhibit
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: "0 0 1.25rem",
              animation: "fadeInUp 0.8s ease-out 0.15s backwards",
              background:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We&apos;re Under
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #de6042 0%, #e11d48 50%, #7a3a8f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Maintenance
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              margin: "0 0 2.5rem",
              fontWeight: 300,
              animation: "fadeInUp 0.8s ease-out 0.3s backwards",
            }}
          >
            We&apos;re making things even better for you.
            <br />
            Our team is working hard and we&apos;ll be back shortly.
          </p>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background:
                "linear-gradient(90deg, #de6042, #7a3a8f)",
              margin: "0 auto 2.5rem",
              borderRadius: "2px",
              animation: "fadeInUp 0.8s ease-out 0.45s backwards",
            }}
          />

          {/* Contact info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              alignItems: "center",
              animation: "fadeInUp 0.8s ease-out 0.6s backwards",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Need to reach us?
            </p>
            <div
              style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}
            >
              <a
                href="tel:+919891498148"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#de6042")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 98914 98148
              </a>
              <a
                href="mailto:info@aibrandexhibit.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#de6042")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                info@aibrandexhibit.com
              </a>
            </div>
          </div>

          {/* Bottom brand stamp */}
          <p
            style={{
              marginTop: "4rem",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.18)",
              fontWeight: 400,
              letterSpacing: "0.05em",
              animation: "fadeInUp 0.8s ease-out 0.75s backwards",
            }}
          >
            © {new Date().getFullYear()} AI Brand Exhibit (OPC) Private Limited
          </p>
        </div>

        {/* Inline keyframe styles */}
        <style>{`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes blobFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33%       { transform: translate(2%, 3%) scale(1.04); }
            66%       { transform: translate(-2%, -2%) scale(0.97); }
          }
        `}</style>
      </body>
    </html>
  );
}
