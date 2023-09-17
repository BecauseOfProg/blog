---
title: "Extraire le contenu d'un CD Audio sous Linux!"
description: "Qui se sert de CD en 2018 ? ;)"
banner: https://becauseofprog.fr/assets/articles/cdaudio/cdaudio.png
type: article
authorId: kernoeb
category: linux
labels: ["CD", "Linux"]
timestamp: 1518437848
---

Petit article très court pour vous montrer comment extraire (ripper) le contenu d'un CD audio sous Linux!

 
>  Un CD ? Qu'est-ce que c'est que ça encore ?
> 
>   Le paquet que j'utilise est **Asunder**, une application pour enregistrer les pistes d'un CD audio aux formats WAV, MP3, OGG, FLAC, Opus, Wavpack, Musepack, Monkey's Audio et AAC.

 **Installation** (*Ubuntu & dérivés*):

 
>  sudo apt-get install lame musepack-tools flac asunder
> 
>   Lame: conversion .MP3  
 MusePack: Format libre MusePack  
 Flac: conversion .Flac

  

 Après avoir installé ces paquets, **ouvrez** Asunder (*merci Captain Obvious*).  
 Mettez le **CD audio** de votre choix dans votre ordinateur (c'est mieux..)

 Ici je teste un **CD** de Jean-Michel Jarre (*si si, vous connaissez forcément "Oxygène (Part IV)"*)

 ![](https://becauseofprog.fr/assets/articles/cdaudio/asunder1.png)

 Dans **"Préférences"**, **"Encodeur"** cochez le **format** que vous souhaitez (*je vous conseille le .flac, un codec libre de compression audio sans perte de qualité*).

 Dans la partie "Général", choisissez l'emplacement où les musiques s'exporteront.

 Enfin, il ne vous reste plus qu'à cliquer sur **"Extraire"** (en bas à droite).

 Et voilà!  
 

 Merci d'avoir lu cet article;  
 Salutations!

 
