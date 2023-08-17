export default function LatencyReductionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
    >
      <circle cx="5" cy="12" r="2" />
      <line x1="5" y1="10" x2="19" y2="10" />
      <circle cx="19" cy="12" r="2" />
      <line x1="5" y1="14" x2="19" y2="14" />
      <path d="M12 2L2 7l10 5" />
      <path d="M22 9L12 14l10 5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}
