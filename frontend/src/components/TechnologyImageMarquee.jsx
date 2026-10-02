import React from 'react';

/**
 * TechnologyImageMarquee
 *
 * A reusable horizontal image strip that smoothly and continuously
 * moves from LEFT → RIGHT in an infinite, seamless loop.
 *
 * Props:
 *   images: Array<{ src: string, alt: string, label?: string, category?: string }>
 *   label?: string (optional section badge above the marquee)
 *   title?: string (optional section heading above the marquee)
 *   subtitle?: string (optional subtitle above the marquee)
 *   speed?: number (duration in seconds, default: 45)
 *   className?: string
 */
export default function TechnologyImageMarquee({
  images = [],
  label,
  title,
  subtitle,
  speed = 45,
  className = '',
}) {
  if (!images || images.length === 0) return null;

  // Quadruple images to ensure full width coverage even on 4K displays
  // Half A (2x images) and Half B (2x images) create a mathematically seamless 50% loop.
  const halfA = [...images, ...images];
  const halfB = [...images, ...images];

  return (
    <section className={`relative w-full overflow-hidden py-8 md:py-12 ${className}`}>
      {/* Optional Static Header / Section Info */}
      {(label || title || subtitle) && (
        <div className="mx-auto mb-8 max-w-7xl px-6 text-center">
          {label && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              {label}
            </div>
          )}
          {title && (
            <h3 className="tech-font text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mx-auto mt-2 max-w-xl text-sm font-light text-slate-400 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Marquee Wrapper with edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks for cinematic edge blend */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent sm:w-28 md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent sm:w-28 md:w-40" />

        {/* Continuous moving strip (LEFT → RIGHT) */}
        <div
          className="flex w-max gap-4 sm:gap-5 md:gap-6 will-change-transform animate-marquee-ltr"
          style={{ animationDuration: `${speed}s` }}
        >
          {/* First half */}
          {halfA.map((img, i) => (
            <MarqueeCard key={`half-a-${i}`} img={img} />
          ))}
          {/* Second half for seamless loop */}
          {halfB.map((img, i) => (
            <MarqueeCard key={`half-b-${i}`} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeCard({ img }) {
  return (
    <div
      className="group relative h-[170px] w-[240px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/40 transition-all duration-300 hover:border-orange-400/40 hover:shadow-xl hover:shadow-orange-500/10 sm:h-[190px] sm:w-[280px] md:h-[210px] md:w-[330px]"
    >
      {/* Image */}
      <img
        src={img.src}
        alt={img.alt || 'Axviro Technology Showcase'}
        className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
        loading="lazy"
      />

      {/* Subtle dark gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-75" />

      {/* Subtle border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-orange-400/30 transition-all duration-300" />

      {/* Card Info Pill */}
      {img.label && (
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-lg border border-white/15 bg-slate-950/85 px-3 py-1 text-[11px] font-medium tracking-wide text-slate-200 backdrop-blur-md transition-colors group-hover:border-orange-400/30 group-hover:text-white sm:text-xs">
            {img.label}
          </span>
          {img.category && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 sm:text-[11px]">
              {img.category}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
