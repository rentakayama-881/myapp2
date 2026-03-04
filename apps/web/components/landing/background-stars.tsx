const STAR_COUNT = 220;

function buildStars() {
  const radii = [0.587, 0.881, 1.175] as const;
  const opacities = ['0.11', '0.3', undefined] as const;

  return Array.from({ length: STAR_COUNT }, (_, index) => {
    const x = ((index * 131) % 872) + ((index * 19) % 31) * 0.37;
    const y = ((index * 89) % 600) + ((index * 11) % 29) * 0.41;
    const r = radii[index % radii.length];
    const opacity = opacities[index % opacities.length];

    return {
      id: index,
      cx: Number(x.toFixed(6)),
      cy: Number(y.toFixed(6)),
      r,
      opacity,
    };
  });
}

const STARS = buildStars();

export function BackgroundStars() {
  return (
    <div className="fixed inset-x-0 top-0 -z-10 mx-auto aspect-2/1 max-w-(--breakpoint-lg) overflow-hidden">
      <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 overflow-hidden blur-[0.5px] before:absolute before:inset-0 before:bg-radial-[at_top_center] before:from-primary/30 before:to-transparent before:to-60% pointer-events-none select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="872"
          height="600"
          role="img"
          aria-label="Stars"
          className="fill-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mask-radial-from-black mask-radial-to-transparent"
        >
          {STARS.map((star) => (
            <circle
              key={star.id}
              cx={star.cx}
              cy={star.cy}
              r={star.r}
              opacity={star.opacity}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
