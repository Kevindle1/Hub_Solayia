import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-btn " +
  "transition-colors duration-200 ease-solayia " +
  "disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<ButtonVariant, string> = {
  // Primaire : navy plein, texte blanc (action principale)
  primary: "bg-navy text-white hover:bg-navy-d",
  // Secondaire : surface blanche, bordure, texte navy
  secondary: "bg-surface text-navy border border-line hover:bg-surface-2",
  // Discret : sans fond, texte navy
  ghost: "bg-transparent text-navy hover:bg-navy-tint",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

/**
 * Bouton signature Solayia.
 * L'or n'est jamais un fond d'action plein (contraste faible) — on reste sur navy.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});
