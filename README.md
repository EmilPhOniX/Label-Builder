# Label builder

Label builder est un projet de créations d'étiquettes pour une utilisation spécifique de l'épicerie [La Halle Lamastroise](https://www.facebook.com/profile.php?id=100088265478897). 

La problématique initiale étant un besoin d'automatisation de la création d'étiquettes pour des produits anti-gaspi.

La Halle Lamastroise reçoit des produits anti-gaspi, ses produits doivent être étiquetés avec une promotion antigaspi. La solution adoptée par la boutique est l'utilisation de feuilles d'étiquette format A4 contenant 3x8 étiquettes de grandes tailles. chaque étiquette contient alors 3 "sous-étiquettes" dans lesquelles sont indiqués le prix de vente initial, le pourcentage de promotion ainsi que le nouveau prix de vente.

## Stack technique

- **React** + **TypeScript**
- **Tailwind CSS**
- **Vite**

## Fonctionnalités
- Ajout et suppression d'articles avec prix, remise et quantité
- Calcul automatique du prix remisé (prix d'achat x la marge du magasin - la remise)
- Prévisualisation en temps réel de la page
- Impression directe depuis le navigateur adapté aux étiquettes 3x8 utilisé par le magasin
- Décalage pour la réutilisation de feuilles d'étiquettes déjà utilisées

## Installation

Pour installer le projet, vous pouvez cloner le dépôt GitHub et installer les dépendances nécessaires. 

```bash
git clone https://github.com/EmilPhOniX/Label-Builder.git
cd label-builder
npm install
```

## Utilisation
Pour utiliser le projet, vous pouvez exécuter la commande suivante pour démarrer l'application :

### Mode développement
```bash
npm run dev
```

>L'application sera accessible à l'adresse `http://localhost:5173` dans votre navigateur.

### Mode production
```bash
npm run build
npm run preview
```

### Via Docker 
Prérequis : **Docker** et **Make**

```bash
# Démarrer
./start.sh dev 
```

```bash
# Arrêter
./stop.sh dev
```
