import React from "react";

export default function Loader() {
  return (
    <div
      // fixed full-screen overlay so nothing else causes layout shifts
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      // ensure parent has no transition that can conflict
      style={{ transition: "none" }}
      aria-live="polite"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          // Prevent jitter by using fill-box transform origin and GPU hint
          style={{
            transformOrigin: "center",
            willChange: "transform",
            transform: "translateZ(0)",
            // optional: make rendering crisper
            shapeRendering: "geometricPrecision",
          }}
          transformBox="fill-box"
          aria-hidden="true"
          className="spin-smooth"
        >
          {/* background ring */}
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
            strokeLinecap="butt" // use 'butt' to avoid cap anti-alias jitter
          />
          {/* arc */}
          <path
            d="M32 4 A28 28 0 0 1 60 32"
            stroke="#666666"
            strokeWidth="4"
            strokeLinecap="butt"
            fill="none"
          />
        </svg>

        <p className="text-gray-600 font-medium">Loading…</p>
      </div>

      {/* Inline styles for the rotation to avoid conflicting Tailwind behavior */}
      <style jsx>{`
        @keyframes spin-smooth {
          to {
            transform: rotate(360deg);
          }
        }
        /* attach animation to the svg, but do not add transition to parent elements */
        .spin-smooth {
          animation: spin-smooth 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
}
