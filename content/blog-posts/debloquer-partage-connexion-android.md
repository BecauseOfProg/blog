---
title: "Débloquer le partage de connexion sur Android"
description: "Depuis Android 4.4, votre opérateur peut détecter si vous utilisez un partage de connexion, et le bloquer. Nous allons voir comment revenir aux réglages d'avant."
banner: https://becauseofprog.fr/assets/articles/rawpixel-660359-unsplash.jpg
type: tutorial
authorId: gildasgh
category: android
labels: ["Android", "téléphone", "opérateur", "smartphone"]
timestamp: 1529935532
---

En voulant partager votre connexion à un ami depuis votre téléphone mobile, vous avez sans doute remarqué que votre opérateur bloque l’accès à Internet sur l'appareil utilisé par votre ami en vous demandant de payer.

 Je me suis longtemps demandé comment l'opérateur parvient à différencier le trafic issu de votre téléphone de celui issu d’un partage de connexion (tethering en anglais), et j’ai fini par trouver :

 Google a introduit un changement dans Android 4.4 – que tout le monde a pris pour un bug, mais c’était bien une fonctionnalité – qui envoie les deux types de trafics dans deux routes différentes, ce qui aboutit à utiliser deux adresses IP différentes selon si la requête provient du téléphone ou du partage. Ces deux IP sont détectables par l’opérateur. Explications techniques sur le [blog de Daniel Pocock](https://danielpocock.com/android-betrays-tethering-data).

 C’est bien dommage que, sous la pression des opérateurs, Google fasse ce genre de changements. Qui est réellement propriétaire du téléphone que l’utilisateur acheté et peut choisir de partager ou non des informations à son opérateur ?

 Malgré tout, on peut revenir aux paramètres antérieurs à Android 4.4 en quelques étapes, et sans débloquer les droits administrateur du téléphone (sans root). Voici la procédure :

 1. Dans votre téléphone, activez le « mode développeur » en allant dans les paramètres, puis dans A propos du téléphone et en cliquant plusieurs fois sur le numéro de build
 2. Activez le débogage USB dans Paramètres > Options pour les développeurs
 3. Installez Android Debug Bridge sur votre ordinateur. Voir [ce tutoriel de FrAndroid.](http://www.frandroid.com/android/rom-custom-2/403222_comment-telecharger-les-outils-adb-et-fastboot-sur-windows-macos-et-linux)
 4. Connectez votre téléphone à votre ordinateur via un câble USB, puis dans une ligne de commande de votre PC, démarrez un shell avec « `adb shell` ». Ceci ouvre une connexion entre votre PC et votre téléphone et vous permet d’effectuer des actions sur votre téléphone depuis votre ordinateur.
 5. Dans le shell ouvert, tapez la commande « `settings put global tether\_dun\_required 0` ». Ceci change un paramètre caché de votre téléphone, et qui désactive la distinction entre les différents types de trafics.
 6. Entrez la commande « `exit` » qui ferme la connexion entre le PC et le téléphone, puis débranchez le téléphone. N’oubliez pas de désactiver le débogage dans les options pour développeur.
  
 C’est légal ?
-------------

 Si c’est votre téléphone, vous pouvez le modifier et le personnaliser comme vous pouvez installer des applications ou désactiver le bluetooth. Vous n’avez pas besoin de permission de votre opérateur pour faire cela.

 L’ARCEP (l’autorité de régulation des télécoms en France) souhaite d’ailleurs interdire aux opérateurs de limiter l’utilisation du partage de connexion.  
 « les clauses limitant l’utilisation du mode modem et interdisant l’utilisation des cartes SIM dans tout terminal mobile » seront supprimées des contrats d’ici l’automne 2018 (page 66 du [Rapport sur l’état d’internet en France, édition 2018](https://www.arcep.fr/uploads/tx_gspublication/rapport-etat-internet-2018_conf050618.pdf))  
 

 Vous pouvez maintenant partager votre connexion à loisir, mais attention au hors-forfait !  
 Photo par [rawpixel](https://unsplash.com/photos/N1siKQse3GQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) sur [Unsplash](https://unsplash.com/search/photos/smartphone-wireless?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
