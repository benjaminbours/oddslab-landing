const HUBS: [number, number][] = [
  [340.0, 438.0], [255.1, 389.0], [255.1, 291.0],
  [340.0, 242.0], [424.9, 291.0], [424.9, 389.0],
];

const TIPS: [number, number][] = [
  [182.3, 454.6], [222.2, 544.1], [319.6, 533.9],
  [319.6, 146.1], [222.2, 135.9], [182.3, 225.4],
  [518.1, 419.3], [575.7, 340.0], [518.1, 260.7],
];

const RINGS = [
  "182.3,454.6 222.2,544.1 319.6,533.9 340.0,438.0 255.1,389.0",
  "319.6,146.1 222.2,135.9 182.3,225.4 255.1,291.0 340.0,242.0",
  "518.1,419.3 575.7,340.0 518.1,260.7 424.9,291.0 424.9,389.0",
  "340.0,438.0 255.1,389.0 255.1,291.0 340.0,242.0 424.9,291.0 424.9,389.0",
];

/** OddsLab brand mark. Sized by CSS so it can scale with the viewport. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="119.7 80.7 518.6 518.6"
      role="img"
      aria-label="OddsLab"
    >
      <g fill="none" stroke="#2DD4BF" strokeWidth={14} strokeLinejoin="round">
        {RINGS.map((points) => (
          <polygon key={points} points={points} />
        ))}
      </g>
      <g fill="#2DD4BF">
        {HUBS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={20} />
        ))}
        {TIPS.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={12} />
        ))}
      </g>
    </svg>
  );
}
