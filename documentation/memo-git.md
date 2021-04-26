# Mémo git
## Je démarre un nouveau projet
Après avoir créé un nouveau dossier pour ce projet, dans le terminal, il faut se placer dans le dossier du projet, en naviguant en utilisant la commande `cd` (voir exemple dans le chapitre "Se déplacer dans les dossiers avec le terminal" ci-dessous).

Une fois dans le dossier du projet, faire : 
```
git init
```
Il faut faire un premier commit. Pour cela, copier/coller : 
```
echo '# Titre' >> README.md
git add .
git commit -m "Premier commit"
```

## Je développe une nouvelle fonctionnalité
A Fabernovel, on développe toujours une nouvelle fonctionnalité dans une branche à part, pour ne pas risquer de casser ce qu'on a déjà fait. Pour créer une branche :
```
git switch -c le-nom-de-ma-branche
```
Ensuite, quand on travaille, on pourra sauvegarder son travail en suivant la section "Je veux sauvegarder mon travail".
Une fois fini, sur GitHub on créé une pull-request. Lorsqu'elle sera mergée, il faudra retourner sur la branche nommée `main`. Pour cela on fait `git switch main`.

## Je veux sauvegarder mon travail (à faire au moins 4 fois par jour)
**ATTENTION** : avant de commencer à travailler sur une nouvelle fonctionnalité, il faut avoir créé une branche
```
# Commence par regarder quels fichiers ont été modifiés
git status

# Ensuite il faut sélectionner les fichiers à sauvegarder
# Si tu veux en sauvegarder un seul, fait:
git add mon-fichier.html
# Ou s'il est dans un dossier
git add dossier/mon-fichier.html
# Pour en sauvegarder plusieurs, il faut les faire un par un
git add mon-fichier-1.html
git add mon-fichier-2.html
# Si tu veux tout sauvegarder, depuis la racine du dossier de ton projet
git add .

# Ensuite on fait la sauvegarde
git commit -m "Ici je décris les modifications que j'ai faite"

# Pour que la sauvegarde se fasse sur GitHub
git push
```