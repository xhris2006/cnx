# CNX

CNX est une plateforme web academique construite avec Next.js, Prisma et NextAuth. Le projet vise a aider les etudiants a acceder a des documents de cours, anciens sujets, ressources premium et fonctionnalites communautaires dans une interface moderne.

## Fonctionnalites prevues

- Page d'accueil marketing avec sections hero, avantages, cours, temoignages et appel a l'action
- Inscription et connexion des utilisateurs
- Authentification par email et mot de passe avec NextAuth
- Base de donnees PostgreSQL geree avec Prisma
- Gestion des utilisateurs avec roles `ADMIN` et `STUDENT`
- Documents pedagogiques avec commentaires, notes et suivi des telechargements
- Abonnements premium et messagerie integree dans le schema Prisma

## Stack technique

- Next.js avec App Router
- React
- Tailwind CSS
- Prisma
- PostgreSQL
- NextAuth
- bcryptjs

## Structure actuelle du projet

- `app/` : pages et routes de l'application
- `components/` : composants d'interface
- `lib/` : configuration Prisma et authentification
- `prisma/` : schema de base de donnees

## Prerequis

Avant de lancer le projet, assure-toi d'avoir :

- Node.js 18 ou plus recent
- npm, pnpm ou yarn
- Une base PostgreSQL accessible

## Variables d'environnement

Cree un fichier `.env` a la racine avec au minimum :

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME"
NEXTAUTH_SECRET="une-cle-secrete-longue-et-complexe"
NEXTAUTH_URL="http://localhost:3000"
```

Selon ton hebergeur ou les services ajoutes plus tard, tu pourras aussi avoir besoin d'autres variables.

## Installation locale

1. Cloner le depot.
2. Installer les dependances.
3. Generer le client Prisma.
4. Appliquer les migrations ou pousser le schema.
5. Demarrer le serveur de developpement.

Exemple avec npm :

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

L'application sera ensuite accessible sur `http://localhost:3000`.

## Utilisation de l'application

### Visiteur

- Ouvrir la page d'accueil pour decouvrir la plateforme
- Acceder a `/register` pour creer un compte
- Acceder a `/login` pour se connecter

### Etudiant

- Creer un compte avec nom, email, mot de passe, universite et niveau
- Se connecter avec ses identifiants
- Etre redirige vers l'espace etudiant apres connexion
- Consulter les ressources disponibles lorsque les pages fonctionnelles sont en place

### Administrateur

Le schema prevoit un role `ADMIN`. Un administrateur peut etre cree depuis la base de donnees ou par seed pour gerer les contenus, les utilisateurs et les annonces selon les modules que tu ajouteras ou activeras.

## Deploiement

### Option recommandee : Vercel

Le projet est adapte a un deploiement sur Vercel.

1. Importer le depot GitHub dans Vercel.
2. Ajouter les variables d'environnement :
   `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
3. Configurer la base PostgreSQL de production.
4. Executer les migrations Prisma au moment du deploiement ou avant la mise en ligne.
5. Definir `NEXTAUTH_URL` avec l'URL publique finale, par exemple :

```env
NEXTAUTH_URL="https://ton-domaine.vercel.app"
```

Commande de build attendue :

```bash
npm run build
```

### Option serveur VPS ou hebergement Node.js

1. Installer Node.js sur le serveur.
2. Cloner le depot.
3. Ajouter le fichier `.env`.
4. Installer les dependances.
5. Generer Prisma et synchroniser la base.
6. Construire puis lancer l'application.

```bash
npm install
npx prisma generate
npx prisma db push
npm run build
npm run start
```

Tu peux placer l'application derriere Nginx ou Apache comme reverse proxy.

## Base de donnees

Le schema Prisma contient notamment :

- `User`
- `Document`
- `Comment`
- `Rating`
- `Subscription`
- `Chat`
- `ChatParticipant`
- `Message`
- `Announcement`

Cela donne une bonne base pour construire une vraie plateforme etudiante avec ressources, abonnements et interactions communautaires.

## Points d'attention sur l'etat actuel du depot

Le depot actuel semble encore en phase de structuration. Quelques imports visibles dans `app/page.tsx` referencent des composants qui ne sont pas presents dans l'arborescence actuelle, et le `package.json` parait incomplet. Avant un deploiement en production, il faudra verifier :

- la presence de toutes les dependances
- les scripts `dev`, `build` et `start`
- la presence de tous les composants importes
- la coherence entre les routes UI et les routes API
- les migrations Prisma et les donnees de depart

## Suggestions pour la suite

- Completer `package.json`
- Ajouter un fichier de seed Prisma pour creer un compte admin
- Ajouter les pages dashboard etudiant et admin
- Mettre en place la gestion des documents et abonnements
- Ajouter des tests et une pipeline de deploiement

## Auteur

Depot GitHub : `https://github.com/xhris2006/cnx`
