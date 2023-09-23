---
title: "Décompiler un apk, impossible ?"
description: "Vous vous demandez si l'on peut explorer une application Android... Voici comment faire !"
banner: /img/articles/decompiler-un-apk-android/decompiler-un-apk.webp
type: tutorial
authorId: kernoeb
category: android
labels: ["Android", "Astuce", "Apk"]
timestamp: 1490547048
---

*Article mis à jour le 23/09/2023*

### JADX

> Téléchargement ici : [github.com/skylot/jadx](https://github.com/skylot/jadx)

Jadx est un outil en ligne de commande ou graphique qui permet de récupérer le code source d'une application Android.

Pour l'utiliser, il suffit de lancer la commande suivante :

```bash
jadx monApk.apk
```

Vous pouvez aussi utiliser l'interface graphique en lançant la commande suivante :

```bash
jadx-gui
```

### ApkTool

> Téléchargement ici : [apktool.org](https://apktool.org/)

À la différence de JADX, ApkTool permet surtout de récupérer les ressources de l'application (images, fichiers de configuration, etc.).

L'avantage est que l'on peut modifier ces ressources et recompiler l'application pour obtenir un apk modifié.

Le code obtenu ne sera pas en Java, mais en Smali, un langage de bas niveau proche de l'assembleur.

Après avoir installé ApkTool, il suffit de lancer la commande suivante :

```bash
apktool d monApk.apk
```

### Decompiler.com

> Site web : [decompiler.com](https://www.decompiler.com/)

Si vous ne voulez pas installer de logiciel, vous pouvez utiliser le site Decompiler.com.

Il vous suffit d'uploader votre apk et de le télécharger une fois décompilé.

### Annexes, pour aller plus loin

- https://book.hacktricks.xyz/mobile-pentesting/android-app-pentesting/apk-decompilers
- https://apktool.org/docs/the-basics/building
- https://book.hacktricks.xyz/mobile-pentesting/android-app-pentesting/frida-tutorial
- https://github.com/frida/frida
