// Original SVG illustration — a balcony solar (Balkonkraftwerk) scene.
// Hand-authored vector art: copyright-clean, scalable, theme-matched. No raster deps.
export default function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      className={className}
      role="img"
      aria-label="Illustration eines Balkonkraftwerks mit Solarmodulen am Balkongeländer in der Sonne"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fef3e2" />
          <stop offset="1" stopColor="#eaf4ff" />
        </linearGradient>
        <radialGradient id="ha-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffd166" />
          <stop offset="1" stopColor="#ff9f0a" />
        </radialGradient>
        <linearGradient id="ha-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e63b3" />
          <stop offset="1" stopColor="#0b3a6f" />
        </linearGradient>
        <linearGradient id="ha-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef0f4" />
        </linearGradient>
      </defs>

      {/* soft rounded backdrop */}
      <rect x="14" y="14" width="492" height="432" rx="32" fill="url(#ha-sky)" />

      {/* sun + rays */}
      <g>
        <g stroke="#ffb73a" strokeWidth="5" strokeLinecap="round">
          <line x1="404" y1="58" x2="404" y2="36" />
          <line x1="404" y1="146" x2="404" y2="168" />
          <line x1="360" y1="102" x2="338" y2="102" />
          <line x1="448" y1="102" x2="470" y2="102" />
          <line x1="372" y1="70" x2="356" y2="54" />
          <line x1="436" y1="134" x2="452" y2="150" />
          <line x1="436" y1="70" x2="452" y2="54" />
          <line x1="372" y1="134" x2="356" y2="150" />
        </g>
        <circle cx="404" cy="102" r="34" fill="url(#ha-sun)" />
      </g>

      {/* clouds */}
      <g fill="#ffffff" opacity="0.85">
        <ellipse cx="120" cy="92" rx="40" ry="16" />
        <ellipse cx="150" cy="84" rx="28" ry="14" />
        <ellipse cx="248" cy="150" rx="30" ry="12" />
      </g>

      {/* building wall + window (left) */}
      <rect x="40" y="150" width="150" height="282" rx="6" fill="url(#ha-wall)" stroke="#dfe3ea" strokeWidth="2" />
      <rect x="66" y="186" width="98" height="78" rx="5" fill="#cfe3fb" stroke="#b7d2f0" strokeWidth="2" />
      <line x1="115" y1="186" x2="115" y2="264" stroke="#b7d2f0" strokeWidth="2" />
      <line x1="66" y1="225" x2="164" y2="225" stroke="#b7d2f0" strokeWidth="2" />
      {/* socket + cable (energy goes inside) */}
      <rect x="96" y="320" width="40" height="40" rx="8" fill="#ffffff" stroke="#dfe3ea" strokeWidth="2" />
      <circle cx="110" cy="340" r="3.4" fill="#86868b" />
      <circle cx="122" cy="340" r="3.4" fill="#86868b" />

      {/* balcony slab */}
      <rect x="170" y="300" width="300" height="20" rx="5" fill="#e7eaf0" stroke="#d2d2d7" strokeWidth="2" />
      <rect x="180" y="320" width="280" height="92" rx="4" fill="#f2f4f8" stroke="#d2d2d7" strokeWidth="2" />
      {/* railing bars */}
      <g stroke="#c4c9d2" strokeWidth="4" strokeLinecap="round">
        <line x1="200" y1="320" x2="200" y2="300" />
        <line x1="230" y1="320" x2="230" y2="300" />
        <line x1="260" y1="320" x2="260" y2="300" />
        <line x1="290" y1="320" x2="290" y2="300" />
        <line x1="320" y1="320" x2="320" y2="300" />
        <line x1="350" y1="320" x2="350" y2="300" />
        <line x1="380" y1="320" x2="380" y2="300" />
        <line x1="410" y1="320" x2="410" y2="300" />
        <line x1="440" y1="320" x2="440" y2="300" />
      </g>

      {/* two tilted solar panels mounted on railing */}
      <g transform="rotate(-18 300 250)">
        <rect x="196" y="214" width="208" height="78" rx="6" fill="url(#ha-panel)" stroke="#0a2f59" strokeWidth="3" />
        <g stroke="#3f7fc9" strokeWidth="1.6" opacity="0.75">
          <line x1="248" y1="214" x2="248" y2="292" />
          <line x1="300" y1="214" x2="300" y2="292" />
          <line x1="352" y1="214" x2="352" y2="292" />
          <line x1="196" y1="240" x2="404" y2="240" />
          <line x1="196" y1="266" x2="404" y2="266" />
        </g>
        {/* sun glint */}
        <path d="M210 224 L250 224 L226 250 L210 250 Z" fill="#ffffff" opacity="0.12" />
      </g>
      {/* mounting brackets */}
      <g stroke="#9aa0ab" strokeWidth="4" strokeLinecap="round">
        <line x1="250" y1="300" x2="262" y2="276" />
        <line x1="340" y1="300" x2="352" y2="262" />
      </g>

      {/* energy flow: panel → socket, in solar tone */}
      <path
        d="M250 300 C 220 330, 170 320, 138 340"
        fill="none"
        stroke="#ff9f0a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 9"
        opacity="0.9"
      />
      {/* little bolt badge */}
      <g transform="translate(196 350)">
        <circle cx="0" cy="0" r="17" fill="#fff" stroke="#ffd9a0" strokeWidth="2" />
        <path d="M2 -9 L-5 1 H1 L-2 9 L6 -2 H0 L2 -9 Z" fill="#ff9f0a" />
      </g>

      {/* plant for life */}
      <g>
        <rect x="420" y="392" width="30" height="22" rx="3" fill="#e0a36b" />
        <path d="M435 392 C 426 372, 430 360, 435 352 C 440 360, 444 372, 435 392 Z" fill="#0f7a4e" />
        <path d="M435 392 C 448 380, 456 380, 462 378 C 456 392, 446 394, 435 392 Z" fill="#13935e" />
      </g>
    </svg>
  );
}
