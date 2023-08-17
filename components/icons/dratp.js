export default function DRATPIcon() {
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
      {/* Task Priority Lines */}
      <line x1="6" y1="8" x2="6" y2="12" />
      <line x1="9" y1="8" x2="9" y2="12" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="15" y1="8" x2="15" y2="12" />
      <line x1="18" y1="8" x2="18" y2="12" />

      {/* Dynamic Resource Lines */}
      <line x1="6" y1="15" x2="12" y2="19" />
      <line x1="12" y1="19" x2="18" y2="15" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}
