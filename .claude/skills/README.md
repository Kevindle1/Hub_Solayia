# Skills — Hub Solayia

Ce dossier contient les **compétences** (skills) que Claude Code charge automatiquement selon le contexte. Chaque skill vit dans son propre dossier sous la forme `<nom>/SKILL.md`, avec un frontmatter `name` + `description` qui décrit *quand* l'utiliser.

Consulte le skill pertinent **avant** toute tâche qui le concerne.

| Skill | Quand l'utiliser |
| --- | --- |
| [`charte-solayia`](./charte-solayia/SKILL.md) | Dès que tu crées ou modifies une interface, une page, un composant, une couleur, un bouton ou une mise en page — dans n'importe quel module. Garantit la cohérence visuelle de la marque. |
| [`deploiement-hostinger`](./deploiement-hostinger/SKILL.md) | Dès qu'il s'agit de déployer, publier, mettre en ligne, configurer un domaine, un vhost nginx ou un certificat SSL. **Jamais de déploiement en prod sans validation humaine explicite.** |
| [`redaction-seo-local`](./redaction-seo-local/SKILL.md) | Dès qu'il s'agit d'écrire un article, une page de service ou un contenu web optimisé pour le référencement local français (TPE, artisans, zone Toulouse & Occitanie). |

## Ajouter un skill

1. Crée un dossier `.claude/skills/<nom>/`.
1. Ajoute un `SKILL.md` avec un frontmatter YAML :

   ```yaml
   ---
   name: mon-skill
   description: Décris précisément QUAND déclencher ce skill, avec des mots-clés concrets.
   ---
   ```

1. Rédige le corps du skill (procédure, règles, exemples).
1. Référence-le dans le tableau ci-dessus.
