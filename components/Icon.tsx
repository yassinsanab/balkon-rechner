type IconProps = { name: IconName; size?: number; className?: string };

export type IconName =
  | "sun"
  | "bolt"
  | "calculator"
  | "document"
  | "check"
  | "arrow"
  | "leaf"
  | "battery"
  | "plug"
  | "car"
  | "percent";

const paths: Record<IconName, React.ReactNode> = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />,
  calculator: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <path d="M8 6.5h8M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h4" />
    </>
  ),
  document: (
    <>
      <path d="M6 2.5h8l4 4V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z" />
      <path d="M14 2.5V6.5h4M8.5 12h7M8.5 16h7" />
    </>
  ),
  check: <path d="M4 12.5l5 5 11-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  leaf: (
    <>
      <path d="M4 20c0-9 7-16 16-16 0 9-7 16-16 16z" />
      <path d="M9 15c3-3 6-5 9-6" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="16" height="9" rx="2" />
      <path d="M21 11v3M7 11v3M11 11v3" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v6M15 2v6" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5" />
    </>
  ),
  car: (
    <>
      <path d="M5 16V11l2-5h10l2 5v5" />
      <path d="M3 16h18v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3z" />
      <path d="M7 13h.01M17 13h.01" />
    </>
  ),
  percent: (
    <>
      <path d="M19 5 5 19" />
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </>
  ),
};

export default function Icon({ name, size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
