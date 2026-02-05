export function AnimatedGradientBG() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-background">
      {/* Primary morphing gradient layer */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `linear-gradient(
            135deg,
            hsl(162, 72%, 51%) 0%,
            hsl(222, 84%, 15%) 25%,
            hsl(210, 15%, 70%) 50%,
            hsl(222, 84%, 15%) 75%,
            hsl(162, 72%, 51%) 100%
          )`,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Secondary flowing gradient layer with blend mode */}
      <div
        className="absolute inset-0 opacity-80 mix-blend-overlay animate-gradient-flow"
        style={{
          background: `linear-gradient(
            45deg,
            transparent,
            hsl(162, 72%, 51%, 0.4),
            transparent
          )`,
          backgroundSize: '400% 400%',
        }}
      />

      {/* Radial accent from top */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(
            ellipse at 50% 0%,
            hsl(162, 72%, 51%, 0.3) 0%,
            transparent 60%
          )`,
        }}
      />

      {/* Dynamic color morphing with accent */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-lighten"
        style={{
          background: `radial-gradient(
            circle at 70% 50%,
            hsl(162, 72%, 51%, 0.2) 0%,
            transparent 50%
          )`,
        }}
      />
    </div>
  )
}
