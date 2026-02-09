"use client";

import { ICON_MAP } from "@/lib/icon-map";

interface GameIconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

export function GameIcon({ name, size = 24, className, color }: GameIconProps) {
  const Icon = ICON_MAP[name];

  if (!Icon) {
    return (
      <span
        className={className}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.6,
          fontWeight: 700,
          color,
          opacity: 0.7,
        }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return <Icon size={size} className={className} style={{ color }} />;
}
