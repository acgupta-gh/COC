/**
 * GridTexture — subtle grid overlay that creates the premium academic atmosphere.
 *
 * Positioned absolute/inset-0 with pointer-events-none.
 * Parent must have position:relative.
 */

interface GridTextureProps {
  /** Grid cell size in pixels (default: 52) */
  cellSize?: number
  /** Line opacity 0–1 (default: 0.035) */
  opacity?: number
  /** Top radial fade — softens the grid at top/bottom */
  fade?: boolean
}

export function GridTexture({
  cellSize = 52,
  opacity  = 0.035,
  fade     = false,
}: GridTextureProps) {
  const lineColor = `rgba(244, 237, 225, ${opacity})`

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: [
          `linear-gradient(${lineColor} 1px, transparent 1px)`,
          `linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        ].join(', '),
        backgroundSize: `${cellSize}px ${cellSize}px`,
        maskImage: fade
          ? 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          : undefined,
        WebkitMaskImage: fade
          ? 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          : undefined,
      }}
    />
  )
}

/**
 * CopperGlow — radial gradient spotlight in copper, for hero drama.
 */
export function CopperGlow({ intensity = 0.08 }: { intensity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 75% 55% at 50% 0%, rgba(184, 115, 51, ${intensity}) 0%, transparent 70%)`,
      }}
    />
  )
}
