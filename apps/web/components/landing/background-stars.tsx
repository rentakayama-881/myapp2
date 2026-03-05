import { BACKGROUND_STARS } from './background-stars-data';

export function BackgroundStars() {
  return (
    <div className="fixed inset-x-0 top-0 -z-10 max-w-(--breakpoint-lg) mx-auto aspect-2/1 overflow-hidden">
      <div className="overflow-hidden pointer-events-none select-none blur-[0.5px] before:absolute before:inset-0 before:bg-radial-[at_top_center] before:from-primary/30 before:to-transparent before:to-60% absolute size-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="872"
          height="600"
          role="img"
          aria-label="Stars"
          className="fill-current absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-radial-from-black mask-radial-to-transparent"
        >
          {BACKGROUND_STARS.map((star, index) => (
            <circle key={index} cx={star.cx} cy={star.cy} r={star.r} opacity={star.opacity} />
          ))}
        </svg>
      </div>
    </div>
  );
}
