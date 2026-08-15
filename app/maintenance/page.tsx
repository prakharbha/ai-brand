import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Maintenance | AI Brand Exhibit",
  description:
    "We're making improvements to deliver you an even better experience. We'll be back shortly.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <>
      {/* Full-screen overlay — covers Navbar/Footer from root layout */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#0b060e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* ── Animated background blobs ── */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "60vw",
              height: "60vw",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(222,96,66,0.20) 0%, transparent 70%)",
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
              background: "radial-gradient(circle, rgba(122,58,143,0.16) 0%, transparent 70%)",
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
              background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
              animation: "blobFloat 14s ease-in-out infinite",
            }}
          />
        </div>

        {/* ── Main card ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "2.5rem 2rem",
            maxWidth: "640px",
            width: "100%",
          }}
        >
          {/* Logo wordmark */}
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "2.5rem",
              animation: "fadeInDown 0.7s ease-out",
            }}
          >
            AI Brand Exhibit
          </p>

          {/* Spinning gear */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
              animation: "fadeInDown 0.7s ease-out 0.1s backwards",
            }}
          >
            <svg
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 64, height: 64, animation: "spinSlow 14s linear infinite" }}
            >
              <circle cx="40" cy="40" r="37" stroke="rgba(222,96,66,0.2)" strokeWidth="1.5" strokeDasharray="7 5" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <rect
                  key={i}
                  x="37.5"
                  y="4"
                  width="5"
                  height="11"
                  rx="2.5"
                  fill="rgba(222,96,66,0.75)"
                  transform={`rotate(${angle} 40 40)`}
                />
              ))}
              <circle cx="40" cy="40" r="18" stroke="rgba(222,96,66,0.5)" strokeWidth="1.5" fill="rgba(222,96,66,0.07)" />
              <circle cx="40" cy="40" r="6" fill="#de6042" opacity={0.9} />
            </svg>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 1.25rem",
              animation: "fadeInUp 0.8s ease-out 0.2s backwards",
              color: "#fff",
            }}
          >
            We&apos;re Under{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #de6042 0%, #e11d48 55%, #7a3a8f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Maintenance
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              margin: "0 0 2.5rem",
              fontWeight: 300,
              animation: "fadeInUp 0.8s ease-out 0.35s backwards",
            }}
          >
            We&apos;re working hard behind the scenes to bring you something even better.
            <br />
            We&apos;ll be back very soon.
          </p>

          {/* Gradient divider */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "linear-gradient(90deg, #de6042, #7a3a8f)",
              margin: "0 auto 2.5rem",
              borderRadius: 2,
              animation: "fadeInUp 0.8s ease-out 0.45s backwards",
            }}
          />

          {/* Contact info */}
          <div
            style={{
              animation: "fadeInUp 0.8s ease-out 0.55s backwards",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                margin: 0,
                fontWeight: 600,
              }}
            >
              Need to reach us?
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="tel:+919919977300"
                className="maint-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 99199 77300
              </a>
              <a
                href="mailto:sales@aibrandexhibit.com"
                className="maint-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                sales@aibrandexhibit.com
              </a>
            </div>
          </div>

          {/* Footer stamp */}
          <p
            style={{
              marginTop: "4rem",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.04em",
              animation: "fadeInUp 0.8s ease-out 0.7s backwards",
            }}
          >
            © {new Date().getFullYear()} AI Brand Exhibit (OPC) Private Limited. All rights reserved.
          </p>
        </div>

        {/* ── Inline keyframes ── */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

          @keyframes blobFloat {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33%       { transform: translate(2%, 3%) scale(1.04); }
            66%       { transform: translate(-2%, -2%) scale(0.97); }
          }
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-14px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(14px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .maint-link {
            color: rgba(255,255,255,0.5);
            transition: color 0.2s;
          }
          .maint-link:hover {
            color: #de6042;
          }
        `}</style>
      </div>
    </>
  );
}
