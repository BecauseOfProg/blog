---
title: "Pwned Passwords: une liste de 501 millions de mots de passes leakés"
description: "Troy Hunt met en ligne la version 2 de 'Pwned Passwords', une liste des mots de passes publiés lors de différents hacks"
banner: https://becauseofprog.fr/assets/articles/Searching-for-a-Pwned-Password.jpg
type: flash
authorId: gildasgh
category: security
labels: ["pwned passwords", " haveibeenpawned", " troyhunt"]
timestamp: 1519325328
---

Après avoir créé le site "Have I Been Pwned", sur lequel on peut vérifier si une adresse électronique a été pirates, Troy Hunt lance la version deux de "Pwned Passwords".

 Cette seconde base de données contient les mots de passes divulgués lors de piratages, en tout, il y a 501 636 842 mots de passes uniques, mais certains sont apparus plusieurs fois, il y en avait 3 033 858 815!

 Vous pouvez tester si un mot de passe est inclus dans la liste sur la page dédiée: [haveibeenpwned.com/Passwords ](https://haveibeenpwned.com/Passwords)(à faire, évidemment, depuis un appareil de confiance et pas sur une tablette à la Fnac)

 La liste de mots de passes est aussi disponible au téléchargement. Chaque mot de passe est mis à côté de son nombre d'occurences, et ils sont tous chiffrés avec l'algorithme de hachage SHA-1. Comme l'explique Troy Hunt sur son blog, le chiffrement SHA-1 est vulnérable et les mots de passes peuvent être déchiffrés aisément. L'atout est de "ne pas voir directement le mot de passe en clair".

 Cette liste peut être utilisée pour interdire aux utilisateurs d'utiliser un mot de passe vulnérable, comme le fait remarquer notre développeur Whaxion, en complément de détecter les mots du dictionnaire ou les suites logiques ou répétitives (aaaa, abc123).

  

 Sources:

  * Pwned Passwords (site officiel) - <https://haveibeenpwned.com/Passwords>
 * Post de Troy Hunt sur son blog : "I've Just Launched "Pwned Passwords" V2 With Half a Billion Passwords for Download" - <https://www.troyhunt.com/ive-just-launched-pwned-passwords-version-2/>
  
