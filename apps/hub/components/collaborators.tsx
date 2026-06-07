import { cn } from "@solayia/ui";

interface Collaborator {
  name: string;
  initials: string;
  online: boolean;
}

// Données mockées tant que la table équipe n'existe pas (Phase 1).
const TEAM: Collaborator[] = [
  { name: "Camille", initials: "Ca", online: true },
  { name: "Théo", initials: "Th", online: true },
  { name: "Inès", initials: "In", online: false },
  { name: "Marc", initials: "Ma", online: true },
];

/** Rangée de présence de l'équipe (avatars + point « en ligne »). */
export function Collaborators() {
  const onlineCount = TEAM.filter((m) => m.online).length;

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {TEAM.map((member) => (
          <div key={member.name} className="relative" title={member.name}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface bg-navy-tint text-xs font-semibold text-navy">
              {member.initials}
            </div>
            <span
              aria-hidden
              className={cn(
                "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface",
                member.online ? "bg-gold" : "bg-faint",
              )}
            />
          </div>
        ))}
      </div>
      <span className="text-sm text-ink-2">
        {onlineCount} collaborateur{onlineCount > 1 ? "s" : ""} en ligne
      </span>
    </div>
  );
}
