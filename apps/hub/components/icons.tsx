import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** IA Solayia — étincelle / assistant. */
export function IconSparkles(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
      <path d="M18.5 15.5l.8 2 .7.8-2 .7-.8 2-.7-2-2-.7 2-.8.8-2z" />
    </svg>
  );
}

/** CRM — fiches / contacts. */
export function IconContacts(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <circle cx="9" cy="11" r="2.2" />
      <path d="M5.5 17c.6-1.8 2-2.7 3.5-2.7s2.9.9 3.5 2.7" />
      <path d="M15 9h3.5M15 13h3.5" />
    </svg>
  );
}

/** Plateforme de développement — code. */
export function IconCode(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8.5 8.5L5 12l3.5 3.5" />
      <path d="M15.5 8.5L19 12l-3.5 3.5" />
      <path d="M13 6l-2 12" />
    </svg>
  );
}

/** Petit losange signature (logo). */
export function IconDiamond(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3l7 7-7 11-7-11 7-7z" />
      <path d="M5 10h14" />
    </svg>
  );
}
