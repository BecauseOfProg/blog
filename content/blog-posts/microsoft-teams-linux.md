---
title: "Installer Microsoft Teams 2.0 (New) sur Linux et macOS"
description: "Découvrez comment installer la nouvelle version de Microsoft Teams"
banner: /img/articles/microsoft-teams-linux/teams.webp
type: tutorial
authorId: kernoeb
category: linux
labels: ["linux", "astuce"]
timestamp: 1707079124
---

La version officielle de **Microsoft Teams** sur Linux est un véritable cauchemar. Elle est lente, buguée, et ne propose pas toutes les fonctionnalités de la version Windows.

Heureusement, il est désormais possible d'installer la version 2.0 de Microsoft Teams sur Linux. Cette version est basée sur la version web de Teams, et est donc beaucoup plus rapide et stable.

## Installation

Installez d'abord [Teams For Linux](https://github.com/IsmaelMartinez/teams-for-linux) :

Sur Linux :

```bash
sudo mkdir -p /etc/apt/keyrings
sudo wget -qO /etc/apt/keyrings/teams-for-linux.asc https://repo.teamsforlinux.de/teams-for-linux.asc
echo "deb [signed-by=/etc/apt/keyrings/teams-for-linux.asc arch=$(dpkg --print-architecture)] https://repo.teamsforlinux.de/debian/ stable main" | sudo tee /etc/apt/sources.list.d/teams-for-linux-packages.list
sudo apt update
sudo apt install teams-for-linux
```

Ou téléchargez le paquet DEB, Zip ou AppImage depuis les [releases](https://github.com/IsmaelMartinez/teams-for-linux/releases/).

> Pour macOS, téléchargez le paquet DMG ou Zip approprié

## Passage à la version 2.0

Cliquez sur l'icône Teams dans votre barre de tâches, puis cliquez sur "Debug".

![debug](/img/articles/microsoft-teams-linux/debug.webp)

Cliquez sur l'onglet "Console".

> Si vous ne pouvez rien copier, écrivez "allow pasting" dans la console.

Collez le code suivant dans la console :

```javascript
window.localStorage.setItem("tmp.isOptedIntoT2Web", true)
document.location.href = 'https://teams.microsoft.com/v2/'
```

Appuyez sur Entrée, puis fermez la fenêtre de débogage.

Si votre organisation le permet, vous serez redirigé vers la nouvelle version de Microsoft Teams.

N'oubliez pas de remercier [IsmaelMartinez](https://github.com/IsmaelMartinez/) en lui donnant une étoile sur GitHub !
