import type { CSSProperties } from "react";

const grains = Array.from({ length: 48 }, (_, index) => {
  const spread = index + 1;
  return {
    top: (spread * 13 + 5) % 100,
    left: (spread * 29 + 9) % 100,
    size: 1.5 + (spread % 4),
    delay: -(spread * 0.55),
    duration: 16 + (spread % 10) * 1.8,
    drift: -28 + (spread % 8) * 8,
    blur: spread % 3 === 0 ? 1.2 : 0,
  };
});

export function AmbientLayer() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__field" />
      <div className="ambient__pool" />
      <div className="ambient__ridge" />
      <p className="ambient__ghost">living</p>
      {grains.map((grain, index) => (
        <span
          key={index}
          className="ambient__grain"
          style={
            {
              top: `${grain.top}%`,
              left: `${grain.left}%`,
              width: `${grain.size}px`,
              height: `${grain.size}px`,
              filter: grain.blur ? `blur(${grain.blur}px)` : undefined,
              animationDuration: `${grain.duration}s`,
              animationDelay: `${grain.delay}s`,
              "--drift": `${grain.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
