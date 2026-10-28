// Flat "developer workstation" illustration: monitor, phone, floating cards and gears.

function gear(
  cx: number,
  cy: number,
  r: number,
  depth: number,
  teeth: number,
  hole: number,
) {
  const step = (Math.PI * 2) / teeth;
  const point = (angle: number, radius: number) =>
    `${(cx + Math.cos(angle) * radius).toFixed(1)} ${(cy + Math.sin(angle) * radius).toFixed(1)}`;
  const outline: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    outline.push(
      point(a - step * 0.28, r),
      point(a - step * 0.17, r + depth),
      point(a + step * 0.17, r + depth),
      point(a + step * 0.28, r),
      point(a + step * 0.5, r),
    );
  }
  const holePath = `M${cx + hole} ${cy}a${hole} ${hole} 0 1 0 ${-hole * 2} 0a${hole} ${hole} 0 1 0 ${hole * 2} 0Z`;
  return `M${outline.join("L")}Z${holePath}`;
}

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 460"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a developer workstation"
    >
      <defs>
        <linearGradient id="hi-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b4bff" />
          <stop offset="1" stopColor="#8fa0ff" />
        </linearGradient>
        <linearGradient id="hi-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d8c8" />
          <stop offset="1" stopColor="#22c3e6" />
        </linearGradient>
        <linearGradient id="hi-phone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6d5dfc" />
          <stop offset="1" stopColor="#8b7bff" />
        </linearGradient>
        <linearGradient id="hi-stand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c7d2fe" />
          <stop offset="1" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>

      {/* Gears in the background */}
      <path
        className="spin-slow"
        d={gear(400, 112, 52, 15, 10, 26)}
        fill="#e5e7eb"
        fillRule="evenodd"
        opacity="0.9"
      />
      <path
        className="spin-slow-reverse"
        d={gear(478, 222, 24, 9, 8, 10)}
        fill="#e5e7eb"
        fillRule="evenodd"
        opacity="0.9"
      />
      <path
        className="spin-slow"
        d={gear(82, 340, 38, 12, 9, 17)}
        fill="#e5e7eb"
        fillRule="evenodd"
        opacity="0.9"
      />

      {/* Floor shadows */}
      <ellipse
        cx="290"
        cy="410"
        rx="200"
        ry="12"
        fill="#e5e7eb"
        opacity="0.9"
      />
      <ellipse cx="452" cy="418" rx="62" ry="7" fill="#e5e7eb" opacity="0.9" />

      {/* Monitor */}
      <rect x="110" y="122" width="330" height="222" rx="14" fill="#3b3a8f" />
      <rect
        x="122"
        y="134"
        width="306"
        height="172"
        rx="6"
        fill="url(#hi-screen)"
      />
      <path
        d="M122 260 L300 134 H350 L170 306 H122 Z"
        fill="#fff"
        opacity="0.07"
      />
      <path
        d="M220 306 L400 134 H428 V160 L265 306 Z"
        fill="#fff"
        opacity="0.06"
      />
      <rect
        x="392"
        y="182"
        width="16"
        height="3"
        rx="1.5"
        fill="#fff"
        opacity="0.6"
      />
      <rect x="110" y="306" width="330" height="38" rx="0" fill="#dbe2ff" />
      <rect x="110" y="330" width="330" height="14" rx="7" fill="#dbe2ff" />
      <circle cx="275" cy="325" r="5" fill="#a5b4fc" />
      <path d="M248 344 H302 L314 396 H236 Z" fill="url(#hi-stand)" />
      <rect x="198" y="394" width="154" height="10" rx="5" fill="#eef2ff" />

      {/* Phone */}
      <g className="float-slow">
        <rect
          x="408"
          y="262"
          width="90"
          height="150"
          rx="12"
          fill="url(#hi-phone)"
          stroke="#4338ca"
          strokeWidth="4"
        />
        <rect x="416" y="276" width="74" height="122" rx="6" fill="#7c83ff" />
        <rect x="438" y="266" width="30" height="4" rx="2" fill="#312e81" />
        <rect
          x="428"
          y="306"
          width="50"
          height="50"
          rx="8"
          fill="url(#hi-teal)"
        />
        <circle
          cx="453"
          cy="331"
          r="10"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.85"
        />
      </g>

      {/* Top bar over the monitor */}
      <g className="float">
        <rect
          x="172"
          y="98"
          width="196"
          height="28"
          rx="8"
          fill="url(#hi-teal)"
        />
        <rect
          x="183"
          y="107"
          width="174"
          height="10"
          rx="3"
          fill="#3b3a8f"
          opacity="0.85"
        />
      </g>

      {/* Small floating pill */}
      <g className="float-slow">
        <rect
          x="64"
          y="64"
          width="76"
          height="24"
          rx="7"
          fill="url(#hi-teal)"
        />
        <rect x="74" y="72" width="56" height="8" rx="3" fill="#4338ca" />
      </g>

      {/* Settings card */}
      <g className="float">
        <rect
          x="58"
          y="168"
          width="78"
          height="78"
          rx="10"
          fill="url(#hi-teal)"
        />
        <path d={gear(97, 207, 17, 6, 8, 7)} fill="#fff" fillRule="evenodd" />
      </g>

      {/* Code card */}
      <g className="float-slow">
        <rect
          x="150"
          y="242"
          width="100"
          height="64"
          rx="10"
          fill="url(#hi-teal)"
        />
        <text
          x="200"
          y="285"
          textAnchor="middle"
          fill="#fff"
          fontSize="30"
          fontWeight="800"
          fontFamily="ui-monospace, monospace"
        >
          {"</>"}
        </text>
      </g>

      {/* Cloud download card */}
      <g className="float">
        <rect
          x="420"
          y="58"
          width="104"
          height="104"
          rx="10"
          fill="url(#hi-teal)"
        />
        <circle cx="455" cy="94" r="12" fill="#fff" />
        <circle cx="473" cy="85" r="17" fill="#fff" />
        <circle cx="491" cy="96" r="11" fill="#fff" />
        <rect x="443" y="94" width="60" height="13" rx="6.5" fill="#fff" />
        <rect x="469" y="114" width="7" height="20" rx="2" fill="#fff" />
        <path d="M459 130 H486 L472.5 145 Z" fill="#fff" />
      </g>
    </svg>
  );
}
