---
title: "Installer Linux sur son appareil Android avec Linux Deploy ! [ROOT]"
description: "Tutoriel simple pour installer Linux sur Android avec une connexion VNC."
banner: /img/articles/linux-sur-android/linuxsurandroid-min.webp
type: article
authorId: kernoeb
category: android
labels: ["Android", "Linux", "VNC"]
timestamp: 1510153420
---

Avant toute chose, sachez que votre appareil Android doit être **rooté** (*posséder toutes les permissions sur le système*).  
   
 Installer** Linux sur Android**, cela peut faire peur, mais la manipulation est en fait **très simple **! ;)

#### 1) Installer Linux Deploy

 Pour cela, rien de plus simple, rendez-vous sur le **Google Play Store**:  
 <https://play.google.com/store/apps/details?id=ru.meefik.linuxdeploy&hl=fr>

 *ou sur **F-Droid**, grâce au dépôt IzzyOnDroid.*  
 <https://apt.izzysoft.de/fdroid/index/apk/ru.meefik.linuxdeploy>

 et **installez** l'application* (bon, ça me paraît logique, enfin j'espère)*.

#### 2) Configuration

 ![](/img/articles/linux-sur-android/linuxandroid-deploy1.webp)

 Comme indiqué ci-dessus, vérifiez que votre appareil est rooté, que vous êtes connecté à Internet.  
 Ensuite, cliquez sur le bouton **Paramètres** (*en bas à droite*).

 ![](/img/articles/linux-sur-android/linuxandroid-deploy2.webp)

 Choisissez les options que vous souhaitez (*pour ma part, j'ai choisi **Ubuntu** au lieu de Debian*).  
 Choisissez le "**Chemin d'installation**".

 Modifiez le **nom d'utilisateur** et le **mot de passe** si vous le souhaitez.

 Descendez ensuite en bas, jusqu'à trouver "**SSH**" et "**GUI**".

 ![](/img/articles/linux-sur-android/linuxandroid-deploy3.webp)

 Activez la connexion SSH si vous le souhaitez.  
 Activez ensuite le **GUI** (*interface graphique*).

 Choisissez l'environnement de Bureau que vous souhaitez (***Mate** pour ma part*)  
 Et modifiez les** Paramètres GUI** (*le plus important à modifier étant la résolution*)  
 Pour le sous-système graphique, laissez "**VNC**" (*c'est le plus simple*).

 Revenez ensuite sur la page d'accueil de l'application, cliquez sur les "**3 petits points**" en haut à droite, puis "**Installer**".

 Attendez le temps qu'Ubuntu/autre s'installe.

 Quand "**>>> deploy**" sera affiché, vous pouvez cliquer sur "**Démarrer**".  
 Au bout de quelques instants, "**>>> start**" apparaîtra.

 L'application devrait vous demander une vérification ROOT, mais cela dépend de quel système de root vous utilisez. 

 ![](/img/articles/linux-sur-android/magisk-min.webp)

 *PS: Si vous avez une erreur, recliquez sur les 3 points en haut à droite, puis "Configurer". Sinon, réessayez depuis le début..*

#### 3) Connexion au VNC

 Dernière étape.  
 Installez un** client VNC** (VNC Viewer *(non open-source, peut être payant)*, **bVNC: Secure VNC Viewer ***(open-source)* ou autre. Vous pouvez aussi installer un client VNC sur un autre appareil, ce que je vous conseille *(Android/iOS/Windows/autre)*).

 Utilisez l'IP affichée en haut de l'application Linux Deploy (**IP locale**) pour vous connecter (*si votre client VNC est installé sur le même appareil que Linux Deploy, saisissez seulement **"localhost"***).

 Nom d'utilisateur/Mot de passe que vous avez mis dans la configuration de Linux Deploy.

 Et voilà, vous devriez apercevoir quelque chose comme ceci:

 ![](/img/articles/linux-sur-android/linuxandroid-deploy4.webp)

 Vous pouvez modifier l'utilisation du curseur dans les paramètres de l'application VNC (*sur bVNC, cliquez sur les 3 points affichés sur votre droite, puis "Input Mode"*).

 Voilà, vous avez installé **Linux** sur votre appareil **Android** !

  

 *Si vous avez des questions, n'hésitez pas à me contacter sur le Discord BOP, je serais heureux de vous aider :)*

 Cordialement, ornicarz ;)
