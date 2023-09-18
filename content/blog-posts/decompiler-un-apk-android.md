---
title: "Décompiler un apk, impossible ?"
description: "Vous vous demandez si l'on peut explorer une application Android... Voici comment faire !"
banner: /img/articles/decompiler-un-apk-android/decompiler-un-apk.jpg
type: tutorial
authorId: kernoeb
category: android
labels: ["Android", "Astuce", "Apk"]
timestamp: 1490547048
---

Petit article rapide, mais efficace.

 Présentation
============

 Vous avez toujours voulu voir à l'intérieur d'une application **Android**, un "**.apk**", l'extraire pour voir ce qu'il y a dedans ? ![](https://lh5.ggpht.com/aCdAa44RDJNrNx2ZtN93_CsTV19w-NjBnbXI7B15PuqH0uAizyD-GEkvHqFaigGBqw=w300)

 C'est pas aussi simple qu'un vulgaire **.zip** ... 

 Un .**apk** est en effet compilé. Si on suit la logique, il faudrait donc le... **décompiler** !* *

 *Selon notre ami Wikipédia, un "**décompilateur**" est un outil servant à reconstituer, partiellement ou totalement, le code source d’un logiciel à partir d’un programme exécutable alors dans un format binaire.*

 
>  *Vous me suivez toujours ? ![wink](/img/articles/decompiler-un-apk-android/wink_smile.png "wink")*
 
   En supposant que oui, c'est désormais **possible**, rapidement et facilement.

 Il vous faut... une **application**. Oui. Une application pour décompiler une **application**.

 
>  Note : Il vaut mieux être "**root**" pour utiliser cette application, sans quoi l'application risque de ne pas fonctionner
 
   *- " Bon, ok, si vous le dites, et j'utilise quoi pour faire ça ? "*

 -** ApkTool**** (**Téléchargement ici : [androidfilehost.com](https://www.androidfilehost.com/?w=files&flid=149532) - ArmV7 dans la plupart des cas, vérifiez tout de même**)**

 
>  Note: Vous pouvez normalement utiliser ApkTool sous Windows & Linux, plus de renseignements ici: [Cliquer ici](https://ibotpeaches.github.io/Apktool/install/)

   Aperçu

 **Voici un aperçu bref de l'application. **

 ![](/img/articles/decompiler-un-apk-android/apktool_menu.png) ![](/img/articles/decompiler-un-apk-android/apktool_settings.png) ![](/img/articles/decompiler-un-apk-android/apktool_shortpress_folder.png)

 Bon, l'application n'est pas parfaite. Il peut y a voir des bugs. Mais pour ma part elle fonctionne très bien. Dites-vous que c'est déjà incroyable une application comme ça.

 Au lancement de l'application, je vous conseille d'aller directement dans les **paramètres** de l'app, et régler le mode **root**, sélectionner **l'AAPT*** et la version de l'application **ApkTool** que vous souhaitez utiliser lors de la décompilation.

 ******Il s'agit d'une partie du SDK qui permet d'ouvrir, de créer, modifier des archives .zip compatibles*

 L'utilisation est simple, il vous faut un .**apk** (format de fichier d'une application sous Android, d'un paquet). Ensuite, cliquez dessus, et faites "*Decompile all*", en supposant que vous vouliez tout décompiler. 

 Vous pouvez ensuite modifier ce que vous voulez, ou juste voir ce qu'il y a l'intérieur de l'appli (*je ne vous expliquerai pas les différentes parties d'une application dans cet article*), ensuite, vous pouvez recompiler l'application.

 Rien de bien compliqué, le plus dur étant de savoir parler un minimum **anglais** ![laugh](/img/articles/decompiler-un-apk-android/teeth_smile.png "laugh")

 ![](/img/articles/decompiler-un-apk-android/apktool_compiling.png)

 Pour plus de renseignements, voici deux articles qui m'ont bien aidé à faire... cet article x)

 Téléchargements et sources

 <https://www.xda-developers.com/decompile-and-modify-apks-on-the-go-with-apktool-for-android/>

 <https://ibotpeaches.github.io/Apktool/install/>

 Merci :)

 **Cordialement**, ex-OrNicarZ 
