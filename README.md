# Sample Next.js Full Stack

Application Next.js 15 avec Prisma, PostgreSQL et gestion d'utilisateurs.

## Stack Technique

- **Next.js 15.5.6** avec App Router et Turbopack
- **React 19.2.0**
- **TypeScript 5.9.3**
- **Prisma 6.17.1** (ORM)
- **PostgreSQL** (Docker)
- **Tailwind CSS 4.1.14**
- **SWR** pour le data fetching
- **next-themes** pour le thème dark/light

## Prérequis

- Node.js 20+
- pnpm 10.18.3+
- Docker

## Installation

1. Cloner le projet et installer les dépendances :

```bash
pnpm install
```

2. Démarrer PostgreSQL :

```bash
docker-compose up -d
```

3. Configurer la base de données :

```bash
npx prisma migrate dev
npx prisma db seed
```

4. Lancer le serveur de développement :

```bash
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Structure du Projet

- `/app` - Pages et routes (App Router)
  - `/admin` - Gestion de tous les utilisateurs
  - `/about` - Vue des managers et développeurs
  - `/queues` - Gestion des files d'attente
- `/components` - Composants réutilisables
- `/lib` - Logique métier et actions serveur
- `/prisma` - Schéma et seed de la base de données

## Scripts Disponibles

```bash
pnpm dev       # Serveur de développement avec Turbopack
pnpm build     # Build de production
pnpm start     # Serveur de production
pnpm lint      # Linter ESLint
```

## Base de Données

Le projet utilise PostgreSQL avec Prisma. Le schéma définit :
- **users** - Utilisateurs avec rôles (Manager, Developer, Executive)
- **comments** - Commentaires liés aux utilisateurs
