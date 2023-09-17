---
title: "Firefox 54 adopte une meilleure gestion de la RAM"
description: "Firefox 54 adopte un mode multi-processus moins gourmand en RAM."
banner: https://becauseofprog.fr/assets/articles/mozilla-firefox.jpg
type: article
authorId: gildasgh
category: software
labels: ["Software", "Google", "Mozilla", "Rapidit\u00e9", "Navigation"]
timestamp: 1497873378
---

**Mozilla continue ses efforts pour rendre son navigateur Open-Source plus stable et optimisé pour concurrencer le navigateur de Google de plus près. A cette nouvelle gestion de la mémoire s'ajoute la correction de 31 vulnérabilités dont 3 critiques.**

Disponible depuis le 14 juin 2017, ce nouveau navigateur intègre le projet « Electrolysis » de Mozilla. Ce projet veut essentiellement, comme le fait Chrome, répartir les tâches de navigation entre plusieurs processus mémoire. Jusque là, l'interface utilisateur et tout le contenu étaient organisés en processus distincts, regroupant par exemple l'exécution de tous les onglets sous un seul processus.

Désormais, Firefox s'appuie sur quatre processus pour exécuter les onglets du navigateur, en donnant à chacun un certain espace de mémoire CPU.


> En traitant chaque onglet par un processus distinct, nous optimisons l’usage du hardware de l’ordinateur, en conséquence de quoi Firefox est capable de naviguer sur le Web de manière encore plus fluide - Nick Nguyen, chef de produit Firefox. Il affirme que Firefox 54 est « la version la plus aboutie » jamais produite par Mozilla!
> 
> ![Comparaison de la gestion des processus sur Firefox et sur Chrome](https://becauseofprog.fr/assets/articles/mozilla-firefox.jpg)  
Gestion des prossecus de Chrome et de Firefox (Crédit : Mozilla)

Depuis son lancement en 2008, Chrome a adopté le mode multi-processus, et consomme globalement beaucoup plus de mémoire que les autres navigateurs.

**Comparatifs : **

 * Safari utilise un modèle multi-processus similaire, et consomme moins de RAM que Chrome.
 * Edge utilise également plusieurs processus.
 * Selon l'équipe de Firefox, dans un test impliquant 30 onglets, Chrome consomme jusqu'à 2,4 fois plus de RAM que Firefox.
**Tip !**  
Les utilisateurs qui ont une machine de plus de 8Go de RAM peuvent augmenter le nombre de processus Firefox en allant sur la page about:config et changer le paramètre dom.ipc.processCount.

 

Ce navigateur est donc désormais disponible sur Windows, Mac et Linux et est une des meilleures alternatives Open Source et libres à Google Chrome.

