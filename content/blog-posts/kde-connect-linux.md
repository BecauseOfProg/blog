---
title: "KDE Connect - Connecter son PC Linux à son smartphone Android"
description: "Synchronisez votre appareil Android avec votre PC Linux ! "
banner: /img/articles/kde-connect-linux/kdeconnect-wallpaller.webp
type: article
authorId: kernoeb
category: linux
labels: ["Linux", "KDE", "Logiciel"]
timestamp: 1507474978
---

Synchroniser son smartphone Android et son PC Linux, c'est possible avec le logiciel KDE-Connect.  
 KDE-Connect est gratuit, open source, simple, rapide et efficace.

 Vous pourrez ainsi :

  * Utiliser votre smartphone comme **souris** ou **clavier**,
 * Recevoir vos **notifications** sur votre PC,
 * Copier-coller du texte dans les deux sens (**presse-papier**),
 * Envoyer des **fichiers** entre les deux appareils,
 * Envoyer des **SMS** depuis le PC,
 * Contrôler les **actions multimédias** (*musique/vidéo*).
  L'installation et la configuration sont très simples.

 Dans le cas où vous utilisez l'environnement graphique **Linux KDE**, l'installation se passe en une commande:

 
>   sudo apt-get install kdeconnect-kde qt5-default qdbus-qt5  

Dans le cas **contraire**, saisissez une à une ces 3 commandes:

> sudo add-apt-repository ppa:webupd8team/indicator-kdeconnect
> sudo apt-get update sudo apt-get install kdeconnect indicator-kdeconnect  

*Note: Dans ce tutoriel, vous devez utiliser une distribution basée sur** Debian/Ubuntu**, et qui utilise **APT** comme gestionnaire de paquets.  
 
 Vous pouvez installer KDE-Connect sur d'autres distribution, ou même le compiler vous-même si besoin.*

 
>  Fedora/openSUSE: <https://software.opensuse.org//download.html?project=home%3ABajoja&package=indicator-kdeconnect>  
>  Arch: <https://aur.archlinux.org/packages/indicator-kdeconnect-git>  
>  Autre: À compiler soi-même (voir <https://github.com/Bajoja/indicator-kdeconnect> pour plus d'informations).
> 
>    

 Sur votre **smartphone**, l'installation est encore plus simple :

 Google Play Store : [https://play.google.com/store/apps/details?id=org.kde.kdeconnect\_tp](https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp)  
 F-Droid : [https://f-droid.org/packages/org.kde.kdeconnect\_tp/](https://f-droid.org/packages/org.kde.kdeconnect_tp/) ou <https://fossdroid.com/a/kde-connect.html>

 *Note: Si vous ne savez pas ce qu'est **F-Droid**, vous pouvez consulter mon article qui en parle, ici: <https://becauseofprog.fr/blog/f-droid-open-source-23> ;)*

  

 Votre smartphone et votre PC doivent être connectés à la **même box Internet** (Ethernet/Wi-Fi).

 ![](/img/articles/kde-connect-linux/kdeconnect-2.webp) ![](/img/articles/kde-connect-linux/kdeconnect-3.webp)

 Cliquez sur "**Rafraîchir**" si votre smartphone n'est pas trouvé, puis cliquez sur "**Demander un appairement**".  
 Vous devriez recevoir une notification sur votre smartphone, cliquez sur "**Accepter**". (*sans blague...*)

 *Note: l'inverse fonctionne aussi*

 Depuis l'application, vous pouvez **envoyer des fichiers**, contrôler les **actions multimédia**, et contrôler la **souris** et le **clavier** du PC.

 ![](/img/articles/kde-connect-linux/kdeconnect-4.webp) ![](/img/articles/kde-connect-linux/kdeconnect-5.webp)

 Inversement, vous pouvez envoyer des fichiers depuis votre ordinateur vers le smartphone, directement depuis le gestionnaire de fichiers:

 ![](/img/articles/kde-connect-linux/kdeconnect-6.webp)

 ou depuis l'icône présent dans votre barre des tâches, qui vous permet aussi d'**envoyer des SMS**, et consulter le niveau actuel de la **batterie** du smartphone.

 *Note: Le système d'envoi SMS est assez nouveau... pour l'instant ce n'est pas très pratique.*

 Dernière chose, vous pouvez "**Trouver votre téléphone**" en le faisant sonner, mais c'est une chose qui demande encore de l'optimisation... 

  

 Pour ma part, je m'en sers pour l'option presse-papier et l'envoi très rapide de fichiers, deux options qui vous font gagner du temps ! :)  
 *Note: même si je parle de "smartphone" ici, l'application fonctionne bien évidemment sur tous les appareils Android.*

  

 Merci d'avoir lu l'article,  
 Cordialement, ornicarz :)

 
