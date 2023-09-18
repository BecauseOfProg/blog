---
title: "Windows : 5 astuces pour vous faciliter la vie !"
description: "Simplifiez-vous la vie avec ces 5 astuces disponibles sur Windows!"
banner: /img/articles/5-astuces-windows/5-astuces.png
type: tutorial
authorId: davall
category: windows
labels: ["Windows", "Astuce"]
timestamp: 1494078191
---

Vous voulez vous faciliter la vie sur l’utilisation de votre ordinateur Windows ? Alors voici 5 astuces rien que pour vous !

1/ Extinction de l’ordinateur, programmée ou immédiate.
-------------------------------------------------------

Vous pouvez tout simplement en exécutant une ligne de commande dans l’invite de commande classique ou même créer un raccourci pour éteindre votre ordinateur de façon programmée ou immédiate.

Voici la ligne de commande :

```
shutdown -s -t 00
```

Analysons ensemble cette commande :

`shutdown` est le programme que vous allez appeler, où que vous soyez, il est **toujours** disponible dans l’invite de commande.

`-s` indique à l’ordinateur qu’on souhaite l’éteindre (-r permet de redémarrer l’ordinateur et -g permet de redémarrer les applications enregistrées au redémarrage)

`-t 00` indique le délai avant l’extinction. Le délai doit s’exprimer en secondes !

Vous avez lancé une extinction programmée, mais vous voulez l’annuler ? Entrez simplement `shutdown -a` pour l’annuler !

Voilà, maintenant, vous savez comment éteindre ou redémarrer votre ordinateur de façon programmée ou immédiate ! De plus, cette technique fonctionne aussi avec les raccourcis, je vous conseille donc de créer un raccourci pour éteindre votre ordinateur plus rapidement !

 

2/ Cacher l'icône de Cortana dans la barre des tâches
-----------------------------------------------------

Marre de voir la barre de recherche Cortana dans votre barre des tâches ? Vous pouvez l’enlever !

Faites tout simplement clic droit sur votre barre des tâches et pointez l’option « Cortana » et cliquez sur « Masqué » ! Vous pouvez tout de même choisir de n’afficher que l’icône ;). Vous pouvez d’ailleurs aussi masquer le bouton « Applications actives » qui sert de multitâche et de gérer vos bureaux.

3/ Mode nuit sur Windows 10 Creator Update
------------------------------------------

Vous connaissez sûrement déjà `f.lux` qui a fait un carton sur Windows, mais vous pouvez le ranger si vous avez mis à jour votre Windows 10 vers la mise à jour « Creator Update » qui ajoute une fonction « Mode nuit » !

J’ai moi-même pris du temps à la trouver, il faut dire qu’elle est bien cachée ! Seul inconvénient de cette méthode Made In Microsoft, c’est qu’on doit indiquer sa géolocalisation presque non-stop pour qu’il trouve quand l’activer. Après, vous pouvez le configurer pour qu’il se mette en route à une heure bien précise, à vous de voir !

Pour activer cette option, allez dans les « Paramètres »,
ensuite dans « Système », et dans « Affichage »,

Cliquez ensuite sur « Paramètres d’éclairage nocturne » et configurez-le à votre guise ! ^^
 

4/ Accéder à un serveur FTP via Windows
---------------------------------------

On rentre un peu plus dans les conseils intéressants. Vous connaissez tous les serveurs FTP qui sont des serveurs permettant de transférer des fichiers de votre machine à une autre. Si vous utilisez ces serveurs FTP, vous connaissez très probablement le client nommé « FileZilla », client FTP très populaire. Mais, étiez-vous au courant qu’aucun logiciel n’est nécessaire ? Oui, Windows vous permet d’ajouter un emplacement réseau comme un FTP ou un dossier partagé sur votre réseau.

Pour ce faire, rendez-vous sur la page « Ordinateur » (sous Win7) ou sur « Ce PC » (sous Win8+Win10).

Ensuite, cliquez sur « Ajouter un emplacement réseau »,

ensuite sur « Suivant » et ensuite sélectionnez « Choisissez un emplacement personnalisé »,

puis suivez les instructions indiquées ! ^^


5/ Organiser ses dossiers facilement et efficacement
----------------------------------------------------

Vos dossiers ne sont jamais organisés ? Pleins de raccourcis de jeux sont dans un seul et même dossier, mais ils ne sont pas triés ?

Cette astuce est très simple à réaliser, mais faites tout de même très attention :

La technique que je vais vous montrer ne supporte pas tout le temps les raccourcis Steam, uPlay, Origin, etc. Du moins tous les raccourcis **web**. Il vous faudra donc créer un raccourci vers **l’exécutable** de votre jeu.

Voici comment nous allons procéder :

 * Créez tout d’abord un dossier, placez-y ensuite vos raccourcis à l’intérieur.
![](/img/articles/5-astuces-windows/172709jeux1.png)

 * Faites ensuite un clic droit sur le fond du dossier (pas sur un raccourci attention !)
 * Sélectionnez « Regroupez par » et cliquez sur « Autres… »
 ![](/img/articles/5-astuces-windows/pGUT0m1.png)

 * Dans la liste, cherchez « Commentaires » et cochez-le.
 * Sélectionnez encore une fois « Regroupez par » et cliquez cette fois-ci sur « Commentaires »
 * Normalement, vos raccourcis devraient tous être triés au même endroit, dans un groupe « Non spécifié ».
 * Désormais, faites clic droit sur le raccourci que vous souhaitez modifier, cliquez sur « Propriétés » et dans l’onglet « Raccourci » modifiez le « Commentaire » de votre raccourci (je vous conseille de mettre #steam pour tous vos jeux Steam et #uplay pour tous vos jeux uPlay, comme ça ils sont tous triés par plateforme ! ^^)
 * ![](/img/articles/5-astuces-windows/496132jeux3.png)
Voilà ! Vous avez désormais un dossier propre et bien rangé ! Cela fonctionne avec tous les autres fichiers en temps normal ! Faites jouer votre esprit créatif ! ^^
