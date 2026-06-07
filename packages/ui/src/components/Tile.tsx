import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../cn";

export interface TileProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "title"> {
  title: string;
  description: string;
  /** Icône ou pictogramme du module. */
  icon?: ReactNode;
  /** Module pas encore disponible : affiche « Bientôt » et désactive le clic. */
  soon?: boolean;
  /** Contenu de bas de tuile (ex. présence des collaborateurs). */
  footer?: ReactNode;
}

/**
 * Tuile de lancement d'un module (page d'accueil du Hub).
 * Carte généreuse : fond blanc, accent or au survol, navy en primaire.
 * Les modules « Bientôt » sont présentés mais non cliquables.
 */
export function Tile({
  title,
  description,
  icon,
  soon = false,
  footer,
  href,
  className,
  ...props
}: TileProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {icon ? (
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-field",
              soon ? "bg-navy-tint text-faint" : "bg-navy text-white",
            )}
          >
            {icon}
          </div>
        ) : null}
        {soon ? (
          <span className="rounded-full bg-gold-bg px-3 py-1 text-xs font-semibold text-gold-d">
            Bientôt
          </span>
        ) : (
          <span
            aria-hidden
            className="text-faint transition-transform duration-200 ease-solayia group-hover:translate-x-0.5"
          >
            →
          </span>
        )}
      </div>

      <div className="mt-5">
        <h3 className="font-title text-xl text-ink">{title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{description}</p>
      </div>

      {footer ? <div className="mt-5 border-t border-line pt-4">{footer}</div> : null}
    </>
  );

  const cardClass = cn(
    "group block rounded-card border border-line bg-surface p-6 shadow-soft",
    soon
      ? "cursor-default opacity-80"
      : "transition duration-200 ease-solayia hover:-translate-y-0.5 hover:border-gold hover:shadow-soft-lg",
    className,
  );

  if (soon || !href) {
    return (
      <div className={cardClass} aria-disabled={soon || undefined}>
        {content}
      </div>
    );
  }

  return (
    <a href={href} className={cardClass} {...props}>
      {content}
    </a>
  );
}
