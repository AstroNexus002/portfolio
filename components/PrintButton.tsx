"use client";

import { FiDownload } from "react-icons/fi";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-night transition-all hover:glow hover:brightness-110"
    >
      <FiDownload /> Download PDF
    </button>
  );
}
