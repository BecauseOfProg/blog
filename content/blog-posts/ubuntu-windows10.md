---
title: "Ubuntu sous Windows 10 ?"
description: "Installer Bash sur un environnement Windows, c'est impossible ? C'est ce que nous allons voir dans cet article."
banner: /img/articles/ubuntu-windows10/ubuntu-on-windows.jpg
type: article
authorId: kernoeb
category: windows
labels: ["Windows", "Windows 10", "Linux", "Ubuntu", "Bash", "Command Line"]
timestamp: 1492000436
---

Non, vous ne rêvez pas, il est **possible** d'intégrer **Bash** *(terminal, interpréteur en ligne de commandes d'Unix)* sur **Windows 10**.

En effet, **Microsoft** et **Canonical** *(société qui s'occupe d'Ubuntu, grande distribution Linux)* ont fait un partenariat durant l'année 2016.

Dans cet article, je vais vous montrer :

**COMMENT INSTALLER BASH SOUS WINDOWS 10**

Bon, ça ne se fait pas en 1 étape. D'ailleurs, il est possible que vous n'en avez même pas entendu parler, puisque Microsoft ne l'a pas "**crié**" comme il l'a fait pour la mise à jour vers Windows 10 (normal en même temps)...

Mais si vous suivez ce (petit) tutoriel, vous y arriverez facilement :)

Tout d'abord, vérifiez que vous disposez d'une version de Windows 10 qui supportera **Bash**.  
Pour cela, accédez aux paramètres de votre ordinateur (depuis le menu Démarrer par exemple).  
Cliquez ensuite sur "**Système**", puis **"Informations système"** (en bas à gauche).  
Dans la partie de droite, vous devez avoir une version supérieure (ou égale) à **14393**.  
Pour ma part, je suis à *14393.593*. Vous devez disposer d'un ordinateur **64bit** !

![](/img/articles/ubuntu-windows10/373431821.webp)

Ensuite, retournez dans les Paramètres, puis accédez à **"Mise à jour et sécurité"**.  
Cliquez ensuite sur **"Pour les développeurs"** (à gauche), ensuite cochez **"Mode développeur"**.

![](/img/articles/ubuntu-windows10/7QzKNdN.webp)  
Voilà, ça, c'est fait. Ne vous inquiétez pas, c'est bientôt terminé ;)  
Ouvrez le menu Démarrer et cherchez **"Activer ou désactiver des fonctionnalités Windows"**.

Cliquez dessus :  
![](/img/articles/ubuntu-windows10/SaNC5YQ.webp)

Une fenêtre comme celle-ci apparaît :

![](/img/articles/ubuntu-windows10/N2cvrOK.webp)

Descendez un peu et cochez "**Sous-système Windows pour Linux"**, puis "**OK"**.

Si votre ordinateur ne le fait pas automatiquement, **redémarrez** votre ordinateur (l'étape la plus ennuyante, je l'avoue).  
Voilà. Maintenant, ouvrez le menu Démarrer et cherchez **"Bash"**.  
![](/img/articles/ubuntu-windows10/TZaqBLN.webp)

![](/img/articles/ubuntu-windows10/jALsHrC.webp)

Puis faites ce qui est demandé, soit Tapez « **o** » dans la console (tapez pas trop fort, elle est fragile).

Patientez... (cela peut durer plusieurs minutes, ne vous inquiétez pas).

Lorsque l'installation est terminée, (re)cherchez **Bash** sur le menu démarrer, et, incroyable, vous devriez apercevoir cela:

![](/img/articles/ubuntu-windows10/gKhrlVs.webp)

Et voilà ! 


> Vous pouvez utiliser **Xming** (<https://sourceforge.net/projects/xming/>) pour disposer d'une interface graphique.
> 
>  

Voilà, c'est tout pour moi !  
*kernoeb*  
 
