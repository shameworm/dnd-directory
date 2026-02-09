export interface CategoryColors {
  bg: string;
  text: string;
  border: string;
  accent: string;
}

const COLOR_MAP: Record<string, CategoryColors> = {
  "g-stone": {
    bg: "rgba(120, 113, 108, 0.15)",
    text: "#a8a29e",
    border: "#78716c",
    accent: "#d6d3d1",
  },
  "g-red": {
    bg: "rgba(239, 68, 68, 0.15)",
    text: "#ef4444",
    border: "#dc2626",
    accent: "#fca5a5",
  },
  "g-orange": {
    bg: "rgba(249, 115, 22, 0.15)",
    text: "#f97316",
    border: "#ea580c",
    accent: "#fdba74",
  },
  "g-amber": {
    bg: "rgba(245, 158, 11, 0.15)",
    text: "#f59e0b",
    border: "#d97706",
    accent: "#fcd34d",
  },
  "g-yellow": {
    bg: "rgba(234, 179, 8, 0.15)",
    text: "#eab308",
    border: "#ca8a04",
    accent: "#fde047",
  },
  "g-lime": {
    bg: "rgba(132, 204, 22, 0.15)",
    text: "#84cc16",
    border: "#65a30d",
    accent: "#bef264",
  },
  "g-green": {
    bg: "rgba(34, 197, 94, 0.15)",
    text: "#22c55e",
    border: "#16a34a",
    accent: "#86efac",
  },
  "g-emerald": {
    bg: "rgba(16, 185, 129, 0.15)",
    text: "#10b981",
    border: "#059669",
    accent: "#6ee7b7",
  },
  "g-teal": {
    bg: "rgba(20, 184, 166, 0.15)",
    text: "#14b8a6",
    border: "#0d9488",
    accent: "#5eead4",
  },
  "g-cyan": {
    bg: "rgba(6, 182, 212, 0.15)",
    text: "#06b6d4",
    border: "#0891b2",
    accent: "#67e8f9",
  },
  "g-sky": {
    bg: "rgba(14, 165, 233, 0.15)",
    text: "#0ea5e9",
    border: "#0284c7",
    accent: "#7dd3fc",
  },
  "g-blue": {
    bg: "rgba(59, 130, 246, 0.15)",
    text: "#3b82f6",
    border: "#2563eb",
    accent: "#93bbfd",
  },
  "g-indigo": {
    bg: "rgba(99, 102, 241, 0.15)",
    text: "#6366f1",
    border: "#4f46e5",
    accent: "#a5b4fc",
  },
  "g-violet": {
    bg: "rgba(139, 92, 246, 0.15)",
    text: "#8b5cf6",
    border: "#7c3aed",
    accent: "#c4b5fd",
  },
  "g-purple": {
    bg: "rgba(168, 85, 247, 0.15)",
    text: "#a855f7",
    border: "#9333ea",
    accent: "#d8b4fe",
  },
  "g-fuchsia": {
    bg: "rgba(217, 70, 239, 0.15)",
    text: "#d946ef",
    border: "#c026d3",
    accent: "#f0abfc",
  },
};

export function getCategoryColors(colorName: string): CategoryColors {
  return (
    COLOR_MAP[colorName] ?? {
      bg: "rgba(148, 163, 184, 0.15)",
      text: "#94a3b8",
      border: "#64748b",
      accent: "#cbd5e1",
    }
  );
}
