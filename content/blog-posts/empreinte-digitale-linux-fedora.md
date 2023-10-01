---
title: "Configuration du lecteur d'empreinte digitale sur Fedora"
description: "Voici comment ajouter des drivers pour empreinte digitale sur Fedora Linux"
banner: /img/articles/empreinte-digitale-linux-fedora/empreinte-digitale-linux-fedora.webp
type: tutorial
authorId: gildasgh
category: linux
labels: ["linux", "astuce", "goodix"]
timestamp: 1696168818
---

De plus en plus d'ordinateurs portables sont équipés de lecteurs d'empreintes digitale pour permettre l'identification. Cela apporte rapidité, sécurité et confidentialité : personne ne pourra voir votre mot de passe quand vous le tapez. Il faudrait voler votre doigt !

Pour cela, Fedora utilise [fprint](https://fprint.freedesktop.org/). Ce projet rassemble des drivers pour de nombreux modèles de lecteurs et facilite l'intégration dans le système avec une interface unifée. Il est intégré dans GNOME et Fedora, son utilisation est très facile : Il suffit d'aller dans les paramètres, onglet **Utilisateurs** et il vous sera proposé d'ajouter une empreinte digitale si le lecteur est supporté par fprint.

### Si le lecteur n'est pas reconnu

Il est possible que fprint ne supporte pas votre lecteur d'empreinte nativement. Pour commencer, trouvez votre modèle de lecteur avec la commande **lsusb** : 

```
[gildas@fedora ~]$ lsusb
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 005: ID 1bcf:2b99 Sunplus Innovation Technology Inc. Integrated_Webcam_HD
Bus 001 Device 004: ID 27c6:538c Shenzhen Goodix Technology Co.,Ltd. Fingerprint Reader
Bus 001 Device 006: ID 8087:0aaa Intel Corp. Bluetooth 9460/9560 Jefferson Peak (JfP)
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Mon ordinateur est équipé du lecteur **27c6:538c** de **Shenzhen Goodix Technology**. Ce dernier n'est pas dans la [liste des lecteurs supportés](https://fprint.freedesktop.org/supported-devices.html).

En effet, Goodix ne publie que très rarement ses drivers propriétaires pour Linux, et se contente de les faire fonctionner pour Windows uniquement. Heureusement, lorsque le lecteur est utilisé dans un Dell, il y a souvent un driver disponible. En effet, Dell veut rendre chacune de ses machines entièrement compatible avec Ubuntu. D'ailleurs, il existe de nombreuses similitudes parmi les modèles de ce fabricant, ce qui facilite l'écriture de drivers.

Vous trouverez sur le site d'Ubuntu le paquet [libfprint-2-tod1-goodix](http://dell.archive.canonical.com/updates/pool/public/libf/libfprint-2-tod1-goodix/), dans un dépôt spécifique pour Dell.

Ce paquet a été adapté pour Fedora dans un dépôt [COPR](https://copr.fedorainfracloud.org/coprs/dhodyn/personal/). Activez-le et remplacez le driver par défaut de Fedora par celui de Dell. Merci à **N. Dhody**, les sources sont disponibles sur [GitHub](https://github.com/dhodyn/copr/).

``` 
dnf copr enable dhodyn/personal 
dnf install libfprint-2-tod1-goodix
```

Voilà, vous pouvez aller dans l'application Paramètres puis dans Utilisateurs et ajouter votre empreinte.

![](/img/articles/empreinte-digitale-linux-fedora/empreinte-digitale-linux-fedora.webp)

### Conseil pour utiliser l'empreinte digitale

Au démarrage de l'ordinateur, entrez votre mot de passe pour que Fedora puisse itinialiser votre session (notamment en déchiffrant du contenu avec le mot de passe). C'est lorsque l'ordinateur se verrouille que l'empreinte digitale est véritablement utile.

### Pour aller plus loin

- Je vous recommande ce billet de **Th0mas** (en anglais) qui explique comment faire du reverse engineering sur les lecteurs d'empreintes digitales Goodix : https://blog.th0m.as/misc/fingerprint-reversing/
- Ce serveur **Discord** (en anglais) permet de suivre l'avancement des drivers pour les lecteurs de Goodix : https://discord.com/invite/6xZ6k34Vqg