import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Ajoute l'effet de survol (léger soulèvement + bordure or). */
  interactive?: boolean;
}

/**
 * Carte signature Solayia : surface blanche, bordure douce, ombre chaude.
 * Au survol (si `interactive`) : translateY(-2px) + bordure or.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { interactive = false, className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-card border border-line bg-surface shadow-soft",
        interactive &&
          "transition duration-200 ease-solayia hover:-translate-y-0.5 hover:border-gold hover:shadow-soft-lg",
        className,
      )}
      {...props}
    />
  );
});
