---
title: "Changer le message du jour sur Linux"
description: "Voici comment changer simplement le message qui s'affiche lors de la connexion à un utilisateur Linux :D"
banner: https://becauseofprog.fr/assets/articles/changer-motd-linux-4.png
type: tutorial
authorId: gildasgh
category: linux
labels: ["linux", "astuce"]
timestamp: 1505582277
---

Quand vous vous connectez dans un terminal sur le système GNU/Linux, vous pouvez voir un message de bienvenue, généralement en anglais avec les propriétés du système, ou alors un message de l'administrateur de la machine. Sauf que c'est vous le propriétaire de la machine, alors nous allons apprendre à changer ce message !

  

 Sur Debian & Ubuntu
-------------------

 Vous pouvez modifier le fichier /etc/motd, un simple fichier de texte, mais c'est un peu trop basique et nous allons aller plus loin.

 L'autre solution, c'est de placer des scripts shell qui contiennent des commandes à exécuter dans le répertoire /etc/update-motd.d/. Le nom des scripts commence par deux chiffres suivi d'un titre, ils s'exécuteront dans l'ordre (ex. 00-header, 01-content...). Dans ces fichiers bash, vous pouvez définir des variables et y placer des commandes Linux, par exemple :

```bash
   #! /bin/bash HOSTNAME=`uname -n` KERNEL=`uname -r` echo "Bienvenue sur le serveur $HOSTNAME, Vous utilisez $KERNEL!"  Pensez bien à rendre ces fichiers executables!
```
  

 Sur toutes les autres distributions
-----------------------------------

 Vous aurez à modifier un, et un seul fichier : /etc/profile.d/motd.sh qui contient lui aussi des commandes bash que vous pouvez personnaliser à volonté ! Par exemple, voici un petit script pour choisir un texte à afficher parmi une liste au hasard :

```bash
   #! /bin/bash MSGS=("Message 1" "Le deuxième" "Et le dernier!") MSG=${MSGS[$RANDOM % ${#MSGS[@]} ]} echo "Bienvenue! $MSG";  ![Capture d'écran du MOTD du terminal.](https://becauseofprog.fr/assets/articles/change-motd-linux-1.png)
```

 Vous savez maintenant comment faire, soyez créatifs ! Bon weekend !

 
