---
title: "Contourner le mot de passe admin Windows"
description: "Comment créer, modifier et supprimer des administrateurs Windows sans avoir le mot de passe admin?"
banner: https://becauseofprog.fr/assets/articles/bop-article.png
type: article
authorId: gildasgh
category: windows
labels: [ "windows", "sécurité" ]
timestamp: 1532616394
---

### Introduction

Voici la procédure pour créer un utilisateur Windows administrateur, sans avoir de mot de passe. Vous aurez besoin d'un
ordinateur Windows et d'une clé USB (ou un CD). Les actions effectuées ici sont toutes réversibles, à condition de
suivre correctement les indications.

Notez que l'opération n'est légale si et uniquement s'il s'agit de votre ordinateur.

### Création d'une clé USB contenant Linux

Munissez-vous d'une distribution Linux, comme Ubuntu :  
<https://www.ubuntu.com/download/desktop>

Installez l'image disque (.iso) récupérée sur un disque externe, tel qu'un CD ou une clé USB. Pour ce faire, téléchargez
Rufus. Ce logiciel libre ne nécessite pas d'installation sur l'ordinateur (donc pas de droits administrateur) et vous
permettra de graver l'image sur une clé USB.  
[https://rufus.ie/fr/](https://rufus.ie/fr/)

Insérez la clé USB puis lancez Rufus. Cliquez sur l'icône en forme de CD situé à droite de "Créer un disque de
démarrage" et sélectionnez le fichier Ubuntu-*.iso à l'emplacement où vous venez de le télécharger. Cliquez ensuite sur
Démarrer.

**Attention :** cette procédure efface toutes les données de votre clé USB ou du CD, pensez bien à les sauvegarder
ailleurs.

Vous aurez donc un 'Live-USB Ubuntu' fonctionnel. Redémarrez votre ordinateur en laissant la clé USB dans l'ordinateur.
Si vous voyez l'écran "essayer Ubuntu", tout va bien, passez à la suite, sinon Windows s'allume.

Si c'est le cas, il faut encore redémarrer l'ordinateur et configurer l'ordre d'amorçage de vos périphériques. Il faut
entrer dans le BIOS en appuyant sur une touche au démarrage du PC. Cette touche diffère selon les ordinateurs, c'est
souvent Echap, F1, F2 ou F12.

Regardez plutôt cette documentation. Il faut que le CD ou la clé USB soit en première
position : [https://doc.ubuntu-fr.org/tutoriel/modifier_ordre_amorcage_du_bios?&#entrez_dans_l_utilitaire_de_configuration_du_bios](https://doc.ubuntu-fr.org/tutoriel/modifier_ordre_amorcage_du_bios?&#entrez_dans_l_utilitaire_de_configuration_du_bios)

Une fois ce changement effectué, redémarrez votre ordinateur et Ubuntu devrait démarrer

### Modifications de Windows

Bien, vous êtes sur l'écran "Essayer Ubuntu" ou "Try Ubuntu". Il faut sélectionner la première entrée "Essayer Ubuntu
sans installer" ou "Try Ubuntu without installing". Cette option permet d'utiliser Ubuntu, une distribution Linux sans
rien changer sur votre ordinateur.

Allez dans le logiciel "Fichiers"/"Explorer" et dans "Autres emplacements" trouvez le disque sur lequel est installé
Windows. Vous verrez dans ce disque les dossiers Windows, Users, Program Files. Dans Users, vous pouvez voir les
fichiers et les données de tous les utilisateurs. Mais vous pouvez surtout modifier tous les fichiers du système sans
vous soucier des permissions de Windows

Commençons les opérations un peu compliquées. Ne vous trompez pas ! Il faut aller dans le dossier Windows puis system32.
Renommez le fichier Utilman.exe en Utilman.exe.bak, ensuite faire un copier-coller de cmd.exe et renommer le double de
cmd.exe en Utilman.exe. Voilà, c'est tout.

### Modifier les utilisateurs Windows

Éteignez votre ordinateur, retirez votre clé USB et rallumez-le. Dans l'écran de connexion Windows, cliquez sur le
bouton "Options d'accessibilité" et une ligne de commande avec les droits administrateurs s'ouvrira. Vous pouvez créer
un utilisateur ou en modifier un existant, voici comment faire :

1. Créer un utilisateur :  
   `net user [username] [password] /add`  
   Remplacez \[username\] par le nom d'utilisateur choisi et \[password\] par un mot de passe.  
   Pour passer l'utilisateur en administrateur, faites :  
   `net localgroup administrators [username] /add`

2. Modifiez le mot de passe d'un utilisateur (vous ne pourrez pas revenir à l'ancien mot de passe) :  
   `net user [username] [password]`

3. Supprimez un utilisateur (opération non réversible) :  
   `net user [username] /delete`

4. Obtenez la liste des utilisateurs :  
   `net user`

### Retour en arrière

Les opérations présentées sont bien-sûr réversibles. Réinsérez votre clé USB et redémarrez votre ordinateur. Retournez
dans le disque dur de Windows et dans le dossier system32, supprimez le fichier Utilman.exe et renommez Utilman.exe.bak
en Utilman.exe. Redémarrez l'ordi (en enlevant la clé USB) et constatez que la ligne de commande ne s'ouvre plus.

### Point sécurité informatique

La procédure décrite ici n'est pas nouvelle et est connue depuis de nombreuses années. Ce que vous pouvez faire sur
votre ordinateur, d'autres personnes malintentionnées pourraient le faire (surtout sur un ordinateur portable) pour
obtenir un accès administrateur et par la suite faire ce qu'il veut de l'ordinateur.

Il vaut mieux prévenir que guérir. Les seules solutions pour empêcher à quiconque d'accéder à vos fichiers et de modifier
les utilisateurs est de chiffrer le disque dur ou de changer de système d'exploitation (comme Linux ou MacOS). Chiffrer
revient à rendre illisible un message ou des données, sauf avec une clé de chiffrement qui permet de chiffrer et de
déchiffrer les données. La clé de chiffrement, dans le cas présenté ci-dessus serait votre mot de passe et sans
celui-ci, aucun moyen de se connecter à votre session même en changeant le mot de passe avec net user, ou de regarder
dans vos dossiers avec un liveUSB Linux.

Voir comment chiffrer son système avec VeraCrypt :  
<https://www.nextinpact.com/news/103280-veracrypt-comment-chiffrer-et-cacher-os-complet.htm>

Merci d'avoir lu jusqu'au bout et bon été !

 
