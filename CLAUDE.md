# Hub Solayia — Cadrage projet (CLAUDE.md)

Ce fichier est lu automatiquement par Claude Code à chaque session. Il définit le projet, la stack, les conventions et la méthode de travail. Respecte-le.

## Le projet

Le **Hub Solayia** est l'espace de travail interne de l'agence Solayia. C'est un monorepo qui regroupe trois modules autour d'un socle commun (identité unique + données partagées + design system).

Les trois modules :

1. **Hub** — la page d'accueil / lanceur. Porte d'entrée unique vers les autres modules.
1. **IA Solayia** — l'assistant à agents. L'utilisateur décrit une demande en langage naturel ; un chef de projet répartit le travail sur une équipe d'agents (dev front, dev back, designer, etc.) qui agissent sur les outils connectés. Interface ultra-simple, pensée pour être utilisable par quelqu'un sans compétence technique (et à terme revendable).
1. **CRM** — clients, prospects, contrats. C'est le **socle de données partagé** : les autres modules y lisent/écrivent.

(Un quatrième module, *Plateforme de développement*, viendra plus tard. Ne pas le construire pour l'instant.)

## Stack

- **Monorepo** : pnpm workspaces + Turborepo.
- **Apps** : Next.js 15 (App Router) + TypeScript strict + Tailwind CSS.
- **Données / auth** : Supabase (Postgres, Auth, RLS multi-tenant).
- **Déploiement** : VPS Hostinger derrière nginx partagé (voir le skill `deploiement-hostinger`). Domaines via NameSilo.
- **CI** : GitHub Actions.

## Structure cible

```
solayia-hub/
├── apps/
│   ├── hub/           # lanceur (page d'accueil, 3 tuiles)
│   ├── ia-solayia/    # assistant à agents
│   └── crm/           # CRM (socle de données)
├── packages/
│   ├── ui/            # design system Solayia (tokens + composants partagés)
│   ├── supabase/      # client Supabase + types + helpers RLS
│   └── config/        # config partagée (tsconfig, tailwind, eslint)
├── .claude/skills/    # compétences des agents (voir README)
└── CLAUDE.md
```

## Design

Toute l'UI suit la **charte Solayia** — applique systématiquement le skill `charte-solayia`. En résumé : fond ivoire, navy `#0e1937` en primaire, or `#cca95b` en accent, titres en Fraunces, UI en Plus Jakarta Sans.

## Conventions de code

- TypeScript strict, composants fonctionnels, hooks.
- Pas de secret en dur : tout passe par `.env` (jamais commité).
- Nommage et commits **en français**, commits atomiques et explicites.
- Réutilise `packages/ui` plutôt que de redéfinir des styles dans chaque app.
- Accessibilité de base (labels, contrastes, focus visibles).

## Méthode de travail (important)

- **Propose toujours un plan avant d'agir**, surtout pour une tâche multi-fichiers. Attends validation.
- Travaille **par petites étapes**, une brique à la fois.
- **Demande confirmation avant toute action destructrice ou irréversible** : suppression de fichiers, migration de base de données, déploiement en production, opération sur un dépôt distant.
- Une tâche n'est « terminée » que si le **typecheck, le lint et le build passent**.
- Si tu hésites entre deux approches, expose le compromis brièvement et recommande-en une.

## Contrainte modèle

L'usage passe par l'**abonnement Claude Max**, pas par une clé API. Ne jamais introduire de `ANTHROPIC_API_KEY` dans l'environnement du projet ni dans les scripts.

## Skills disponibles

Voir `.claude/skills/`. Consulte le skill pertinent avant une tâche qui le concerne (charte, déploiement, rédaction SEO, etc.).
