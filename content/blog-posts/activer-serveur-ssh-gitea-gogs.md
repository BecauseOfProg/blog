---
title: "Comment activer le serveur SSH de Gitea ou de Gogs?"
description: "Voici comment configurer le serveur SSH intégré dans Gogs et Gitea, pour pouvoir gérer et mettre à jour vos dépôts en toute simplicité, comme sur GitHub."
banner: https://becauseofprog.fr/assets/articles/gitea-gogs-ssh.png
type: tutorial
authorId: gildasgh
category: programming
labels: ["git", "gitea", "gogs", "ssh", "d\u00e9veloppement", "configuration", "tutoriel"]
timestamp: 1561220364
---

Gitea et Gogs sont deux serveur Git open-source, à installer sur votre propre serveur. [Gitea](https://gitea.io/en-us/) est un fork de [Gogs](https://gogs.io/), mais les deux logiciels sont toujours très proches. Le serveur SSH est malheureusement très peu documenté, mais pourtant il est facile à configurer.

### Pour commencer

Dans ce tutoriel nous allons utiliser le port 22 (le port par défaut pour SSH). Il faut donc configurer sshd (le serveur SSH par défaut de nombreuses distributions, dont Debian) pour que celui-ci écoute sur un autre port (le 2222 par exemple).

Pour ce faire, ouvrez le fichier ``/etc/ssh/sshd_config`` (sous Debian) et changez la ligne qui contient `Port` (l'une des premières) : remplacez 22 par 2222.

Cela donne  :
```Port 2222```

Redémarrez ensuite le serveur SSH:
```service sshd restart```

**Tips:**

- Ne vous déconnectez pas du serveur et ouvrez un nouveau shell, ou vous ouvrirez une nouvelle connection SSH sur votre serveur **sur le port 2222**. Si vous parvenez à vous conencter tout va bien, et si nous n'y arrivez pas, vous pouvez toujours modifier la configuration SSH dans votre première fenêtre 

- Sous Linux, connectez vous à un port spécifique avec l'argument ``-p <port>``

### Etape 1 : Donner les permissions à Gitea/Gogs d'ouvrir un port

Sur Linux, les ports spéciaux (de 0 à 1024) sont protégés et ne peuvent habituellement être ouverts que par des programmes ayant les permissions root. Il faut donc autoriser manuellement à Gitea/Gogs d'accéder au port 22 :

```sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/gitea```
(dans mon cas l'exécutable Gitea était dans /etc/gitea)

### Etape 2 : Configurer Gitea/Gogs

Je n'ai testé cette partie que sur Gitea, dans une configuration modifiée par un ami. Jusqu'à nouvel avis cela devrait marcher aussi avec Gogs. La seule documentation se trouve [ici pour Gitea](https://github.com/go-gitea/gitea/blob/master/custom/conf/app.ini.sample) et [ici pour Gogs](https://github.com/gogs/gogs/blob/master/conf/app.ini).

Voici la configuration proposée (traduite par mes soins)

```ini
[server]
DOMAIN = localhost
; Désactiver la fonction SSH
DISABLE_SSH = false
; Utiliser le serveur SSH intégré dans Gitea (false par défaut, mais activée car c'est ce que nous voulons faire)
START_SSH_SERVER = true
; L'utilisateur qu'utilise le serveur SSH. Si la ligne reste blanche, la valeur de RUN_USER sera utilisée. (vous pouvez laisser vide)
BUILTIN_SSH_SERVER_USER =
; Nom de domaine proposé pour cloner un dépôt, affiché sur le site. Par défaut on proposait d'y mettre la valeur de DOMAIN (localhost), mais il faut que les utilisateurs puissent cloner à distance, non pas sur localhost). Mettez-y donc votre nom de domaine (git.exemple.fr)
SSH_DOMAIN =
; L'interface réseau sur laquelle Gitea/Gogs devrait écouter. Par défaut 0.0.0.0 : l'internet entier. Vous pouvez laisser vide
SSH_LISTEN_HOST = 0.0.0.0
; Le port affiché dans l'adresse de clonage d'un dépôt
SSH_PORT = 22
; Le port sur lequel écoutera Gitea/Gogs : le même que SSH_PORTS
SSH_LISTEN_PORT = %(SSH_PORT)s
; Dossier utilisé par l'utilisateur Gitea/Gogs pour y stocker les clés SSH. Remplacez <user> par l'utilisateur linux de Gitea/Gogs (voir RUN_USER)
SSH_ROOT_PATH = /home/<user>/.ssh
; Gitea will create a authorized_keys file by default when it is not using the internal ssh server
; Si on veut utiliser AuthorizedKeysCommand, il faut le désactiver. Ce n'est pas notre cas
SSH_CREATE_AUTHORIZED_KEYS_FILE = true
; Les ciphers utilisés par notre serveur SSH (n'y touchez pas)
; N'a aucun effet sur le système (et donc sur sshd)
SSH_SERVER_CIPHERS = aes128-ctr, aes192-ctr, aes256-ctr, aes128-gcm@openssh.com, arcfour256, arcfour128
; Les algorithmes d'échange de clés (n'y touchez pas) 
; N'a aucun effet sur le système (et donc sur sshd)
SSH_SERVER_KEY_EXCHANGES = diffie-hellman-group1-sha1, diffie-hellman-group14-sha1, ecdh-sha2-nistp256, ecdh-sha2-nistp384, ecdh-sha2-nistp521, curve25519-sha256@libssh.org
; Les MACs pour supporter la connextion SSH (n'y touchez pas) 
; N'a aucun effet sur le système (et donc sur sshd)
SSH_SERVER_MACS = hmac-sha2-256-etm@openssh.com, hmac-sha2-256, hmac-sha1, hmac-sha1-96
; Il y avait d'autres lignes de configuration SSH après mais elles ne sont pas importantes.
```

Voici donc la configuration proposée. Assurez vous de ne rien avoir oublié et redémarrez Gitea/Gogs :
``service gitea restart`` ou ``service gogs restart``
Pour vérifier si Gitea est bien démarré
``service gitea status``
Vous pouvez ensuite aller vérifier si le serveur SSH fonctionne bien!

N'hésitez pas à commenter ou à partager!