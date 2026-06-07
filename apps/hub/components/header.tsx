import { Button } from "@solayia/ui";
import { signOut } from "../app/actions";
import { IconDiamond } from "./icons";

interface HeaderProps {
  email: string;
}

/** En-tête du hub : logo Solayia + identité + déconnexion. */
export function Header({ email }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-field bg-navy text-gold">
          <IconDiamond />
        </span>
        <span className="font-title text-lg font-semibold text-ink">Solayia</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-ink-2 sm:inline">{email}</span>
        <form action={signOut}>
          <Button variant="secondary" size="sm" type="submit">
            Se déconnecter
          </Button>
        </form>
      </div>
    </header>
  );
}
