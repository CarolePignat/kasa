# Kasa

### Projet 7 | Parcours "Développeur web" OpenClassrooms - Créez une application web de location immobilière avec React

## Mission
Développer la nouvelle plateforme web de la société Kasa, leader dans la location d'appartements entre a particuliers en France, dans le cadre de la refonte totale du site. Le front-end sera codé en React.

![Page d'accueil](Accueil.png)

## Spécificités fonctionnelles

* Composant *Gallery* : permet le défilement des photos dans la galerie
    * Si la première image est affichée : au clic sur "Image précédente", affichage de la dernière image
    * Si la dernière image est affichée : au clic sur "Image suivante", affichage de la première image
    * S'il n'y a qu'une seule image : les boutons "Suivant" et "Précédent" n'apparaissent pas
    * Hauteur de la galerie : 
        * Celle indiquée sur la maquette
        * Les images sont coupées et centrées dans le cadre de l'image

* Composant *Collapse* :
    * Par défaut, les *Collapses* sont fermés à l'initialisation de la page
    * Si le *Collapse* est ouvert : au clic, il se ferme
    * Si le *Collapse* est fermé : au clic, il s'ouvre
    
## Spécificités techniques

### Technologies utilisées

* **Figma** : maquettes (fournies)
* **create-react-app** : création du projet
* **React Router V6** : routing
* **React v.18.2.0** 
* **Sass** : styling
* **VSCode** : éditeur de code
* **GitHub** : hébergement du projet
* Pas de librairie React externe

### React

* Éléments React à utiliser :
    * Découpage en composants modulaires et réutilisables
    * Un composant par fichier
    * Structure logique des différents fichiers
    * Utilisation des *props* entre les composants
    * Utilisation du *state* dans les composants lorsque c'est nécessaire
    * Gestion des éléments
    * Utilisation des *listes* en itérant dessus avec **map**, par exemple
    * Utilisation de composants fonctionnels fortement recommandée

### React Router 

* La gestion des paramètres de routes est gérée par React Router dans l'URL pour récupérer les informations de chaque logement
* Une page par route
* Une page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l'URL ne fait pas partie des données renseignées
* La logique du routeur est réunie dans un seul fichier

Le code ne doit pas produire d'erreur ou de warning dans la console

### Lancement du projet

Dans le dossier du projet, lancer :

`npm start`

Pour l'ouvrir dans le navigateur :

* Ouvrir [http://localhost:3000](http://localhost:3000)
