---
name: deploiement-hostinger
description: Procédure de mise en ligne d'une app ou d'un site Solayia sur le VPS Hostinger (nginx partagé, domaines NameSilo, SSL Let's Encrypt). Utilise CE skill dès qu'il s'agit de déployer, publier, mettre en ligne, configurer un domaine, un vhost nginx ou un certificat — même si la demande dit juste « mets ça en ligne ». NE LANCE JAMAIS un déploiement en production sans validation humaine explicite.
---

# Déploiement Hostinger

Les projets Solayia tournent sur un VPS Hostinger derrière un **nginx partagé** (un seul nginx, plusieurs vhosts), domaines gérés chez **NameSilo**, certificats via **Let's Encrypt**.

> ⚠️ Règle absolue : un déploiement en production est une action irréversible. **Toujours demander confirmation explicite** avant de pousser en prod.

## Vue d'ensemble

1. Build de l'app (Next.js → `next build`, sortie standalone de préférence).
1. Transfert sur le VPS (CI GitHub Actions → SSH/rsync, ou pipeline de déploiement).
1. Service applicatif géré par **pm2** (process Node persistant).
1. Vhost **nginx** en reverse proxy vers le port local de l'app.
1. Domaine pointé chez NameSilo → IP du VPS (enregistrement A).
1. Certificat SSL via certbot.

## Étapes types

### 1. Build

```bash
pnpm --filter <app> build
```

### 2. Process pm2 (sur le VPS)

```bash
pm2 start "pnpm --filter <app> start" --name <app>
pm2 save
```

### 3. Vhost nginx (reverse proxy)

Créer `/etc/nginx/sites-available/<domaine>` :

```nginx
server {
    server_name <domaine>;
    location / {
        proxy_pass http://127.0.0.1:<port>;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Puis activer et recharger :

```bash
ln -s /etc/nginx/sites-available/<domaine> /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### 4. Domaine (NameSilo)

Enregistrement **A** : `<domaine>` → IP du VPS. (Sous-domaine = enregistrement A ou CNAME selon le cas.)

### 5. SSL

```bash
certbot --nginx -d <domaine>
```

## À adapter (placeholders à confirmer avec l'équipe)

- Le **port local** attribué à chaque app (éviter les collisions sur le nginx partagé).
- L'utilisateur système et le chemin de déploiement sur le VPS.
- Le mécanisme exact de transfert (rsync, git pull sur le VPS, ou artefact CI).

Si l'un de ces points n'est pas documenté, **demande-le avant de déployer** plutôt que de deviner.
