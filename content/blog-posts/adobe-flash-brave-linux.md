---
title: "Installer Adobe Flash Player sur Brave Browser (Linux)"
description: "Installer Adobe Flash Player sur Brave (Linux) peut s'avérer difficile ! Voici un article donnant une méthode facile et rapide pour le faire !"
banner: https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/articles/flashplayer-install.png
type: tutorial
authorId: kernoeb
category: linux
labels: ["linux", "brave", "navigateur"]
timestamp: 1586780945
---

# Installer Adobe Flash Player sur Brave Browser (Linux)

**Adobe Flash Player** n'est par défaut pas fonctionnel sur le merveilleux navigateur [Brave](https://brave.com/bec202). 

Comme moi, vous avez peut-être essayé d'installer Flash de différentes manières, en vain. Mais j'ai trouvé la solution ! :tada:
(et oui, ça fait longtemps qu'il n'y a pas eu d'article posté ici!) 

## Installer et configurer Flash

1. **Fermez** Brave.

2. Ouvrez un **Terminal**, puis saisissez ces commandes (:warning: nécessite les droits administrateurs) :

```bash
sudo apt-get install pepperflashplugin-nonfree
sudo update-pepperflashplugin-nonfree --install
```

&nbsp;
### Si vous ouvrez Brave depuis un raccourci

```bash
sudo sed -i -e '/Exec=\/usr\/bin\/brave-browser/s/$/ --ppapi-flash-path=\/usr\/lib\/pepperflashplugin-nonfree\/libpepflashplayer.so --ppapi-flash-version=32.0.0.344 /' /usr/share/applications/brave-browser.desktop 
```

&nbsp;
> Note : l'emplacement du fichier ".desktop" (raccourci d'application) peut être modifié
>
> Vérifier qu'il existe :
> `ls /usr/share/applications/brave-browser.desktop`
>
> S'il n'existe pas : 
> `sudo find / -name "brave-browser.desktop" 2>/dev/null`

&nbsp;
### Si vous ouvrez Brave depuis le terminal ou depuis une "commande"

Utilisez cette commande pour ouvrir Brave `/usr/bin/brave-browser-stable --ppapi-flash-path=/usr/lib/pepperflashplugin-nonfree/libpepflashplayer.so --ppapi-flash-version=32.0.0.344`
(ou alias)

## Lancer Flash

3. **Ouvrez** votre navigateur

4. **Accédez** à [brave://settings/content](brave://settings/content)
   
5. **Autorisez** Flash

6. **Tester** son bon fonctionnement ici : https://get.adobe.com/fr/flashplayer/about/

7. **Cliquez** sur la petite fenêtre Flash

![image-20200318192531227](https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/articles/adobe-flash-1.png)

8. **Autorisez**

![image-20200318192548978](https://becauseofprog.fr/assets/v2/sites/becauseofprog.fr/articles/adobe-flash-2.png)

Et voilà, au prochain démarrage de Brave, Flash Player fonctionnera.

À bientôt ! :)