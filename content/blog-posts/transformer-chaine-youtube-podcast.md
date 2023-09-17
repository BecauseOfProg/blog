---
title: "Transformez une chaine YouTube en podcast"
description: "Je vous présente comment transformer simplement une chaine YouTube en podcast audio ou vidéo dans ce nouveau billet."
banner: https://becauseofprog.fr/assets/articles/rssfg-youtube-350-1.png
type: article
authorId: gildasgh
category: software
labels: ["YouTube", "Podcast", "RSS"]
timestamp: 1541951481
---

Bonjour à tous! Après deux mois d'absence, je souhaite vous présenter un outil pour transformer une chaine ou une playlist YouTube en podcast (audio ou vidéo)! Je me suis basé sur EPI, développé par amtopel mais abandonné depuis un an, je l'ai forké et mis à jour.

 Ce logiciel peut-être installé sur votre propre serveur à partir des instructions du fichier readme, ou il peut-être utilisé sur mon serveur.

 Pour créer un podcast, il vous suffit de prendre l'adresse et de changer le nom de domaine par epiyoutube.com (serveur d'amtopel) ou podcast.becauseofprog.fr (mon serveur), ou le vôtre  
 <https://www.youtube.com/channel/UC2bloZZpnRal5tMVuHk0EFQ> deviendra <https://podcast.becauseofprog.fr/channel/UC2bloZZpnRal5tMVuHk0EFQ>. La méthode est la même pour les playlists.

 Par défaut, c'est le format vidéo (mp4) qui est séléctionné. Pour obtenir le format audio (mp3), il faut ajouter **&a** à la fin de l'URL d'une chaine youtube et **?a** à la fin d'une playlist.  
 Le podcast audio de la playlist de Guillaume Meurice sur France Inter sera donc <https://podcast.becauseofprog.fr/playlist?list=PL43OynbWaTMLEbdAWr-DnAfveOonmhlT1&a>
