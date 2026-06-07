---
name: charte-solayia
description: Le design system de Solayia (couleurs navy + or, typographie Fraunces/Plus Jakarta, composants signature). Utilise CE skill systématiquement dès que tu crées ou modifies la moindre interface, page, composant, couleur, bouton ou mise en page dans n'importe quel module du Hub Solayia — même si la demande ne mentionne pas explicitement le design. Toute UI doit en sortir cohérente avec la marque.
---

# Charte Solayia

Identité visuelle premium et chaleureuse : navy profond pour l'autorité, or champagne en accent signature, sur un fond ivoire clair qui reste accessible et non-intimidant.

## Couleurs (tokens)

```css
--bg:        #f4f4ef;  /* fond ivoire clair */
--surface:   #ffffff;  /* cartes, panneaux */
--surface-2: #faf9f4;  /* fonds secondaires */
--navy:      #0e1937;  /* PRIMAIRE : texte, boutons, logo, actions */
--navy-d:    #0a1229;  /* navy au survol */
--navy-tint: #eceef3;  /* fonds navy très clairs */
--gold:      #cca95b;  /* ACCENT signature : états actifs, progression, validation */
--gold-d:    #b8964a;  /* or foncé : texte sur fond clair */
--gold-bg:   #f7efd9;  /* fond or très clair */
--ink:       #0e1937;  /* texte principal */
--ink-2:     #56607a;  /* texte secondaire */
--faint:     #9aa0ad;  /* texte tertiaire / placeholders */
--line:      #e6e5dd;  /* bordures */
```

## Typographie

- **Titres** : `Fraunces` (serif, chaleureuse) — poids 500/600, légèrement condensée par `letter-spacing:-.4px`.
- **Interface & corps** : `Plus Jakarta Sans` — poids 400/500/600/700.
- Import :

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Règles d'usage des couleurs

- **Navy = primaire.** Boutons d'action principale, logo, texte, éléments « terminé ». Texte blanc sur navy.
- **Or = accent.** Réservé aux états actifs, barres de progression, cartes de validation, liens, points « connecté », détails signature. Ne pas en faire un bouton plein avec texte blanc (contraste faible) — l'or sert d'accent, pas de fond d'action principale.
- **Fond ivoire**, surfaces blanches. Le navy et l'or se posent dessus.
- Les logos de services tiers (Gmail, GitHub…) gardent leurs vraies couleurs de marque.

## Composants

- **Rayons** : généreux — 12–14px (petits éléments), 18–22px (cartes, zones de saisie).
- **Ombres** : douces et chaudes — `0 4px 20px rgba(14,25,55,.07), 0 1px 3px rgba(14,25,55,.05)`.
- **Bouton primaire** : fond navy, texte blanc, radius 12px ; survol → `--navy-d`.
- **Bouton secondaire** : fond blanc, bordure `--line`, texte navy.
- **Carte** : fond blanc, bordure `--line`, ombre douce ; au survol, léger `translateY(-2px)` + bordure or.
- **Badges/états** : pastille colorée + libellé court. Actif → or ; à valider → or ; terminé → navy.

## Ton & esprit

- Chaleureux, clair, rassurant. Beaucoup d'air (espacements généreux).
- Langage humain et simple dans l'UI : « On prépare votre site… », « C'est prêt, on valide ? ». Pas de jargon technique exposé à l'utilisateur final.
- Animations sobres : apparitions douces (fondu + léger translate), pas d'effets tape-à-l'œil.

## À éviter

- Police générique (pas d'Inter par défaut), dégradés violets, néons.
- Or en gros aplats illisibles.
- Surcharge de bordures et d'ombres dures.
