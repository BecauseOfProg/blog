---
title: "Firefox 57 : Les extensions sont toutes cassées!"
description: "La Fondation Mozilla, qui édite Firefox, a annoncé le changement complet du fonctionnement des addons sur la version 57 de son navigateur. Explications."
banner: https://becauseofprog.fr/assets/articles/firefox-nightly-addons-change-1.png
type: article
authorId: gildasgh
category: software
labels: ["mozilla", "firefox", "nightly", "addon", "api"]
timestamp: 1503169756
---

Pour la mise à jour Firefox 57 en Novembre 2017, un grand changement va être opéré : Les extensions qui n'ont pas été converties vers la nouvelle API WebExtensions seront désactivées par défaut, ce qui oblige les développeurs à ré-écrire leur extensions. Cette nouveauté est déjà disponible dans le canal bêta de Firefox, Nightly.

 L'API WebExtenstions de Mozilla est un système pour développer des extensions compatibles avec plusieurs navigateurs. Elle est basée sur les technologies actuelles du web (HTML, JavaScript, CSS). Cette API est compatible avec celle de Google Chrome et d'Opera, ce qui permet aux développeur de créer des addons compatibles pour les trois navigateurs à la fois. D’après Mozilla, les extensions développées avec sa nouvelle API pourront également fonctionner sur Microsoft Edge avec quelques changements.

 Dans un billet, Mozilla explique que dans le passé, les add-ons ont souvent cessé de fonctionner chaque fois qu'une nouvelle version de Firefox a été publiée, car les développeurs devaient les mettre à jour toutes les six semaines afin de les rendre compatibles. Étant donné que les add-ons pourraient également modifier le code interne de Firefox directement, il était possible pour les acteurs malveillants d'inclure un code malveillant dans un complément d'apparence innocente.

 À des fins indicatives, l’étiquette "Compatible with Firefox 57+" sera placée sur les extensions qui s’appuient sur cette technologie et qui sont disponibles sur la vitrine de téléchargement d’extension de Mozilla (addons.mozilla.org). Les extensions qui s’appuient sur l’ancienne technologie auront pour leur part l’étiquette "Legacy" qui sera visible dans l'onglet about: addons.

  

 
> « Nous savons que certains add-ons ne vont pas effectuer la transition vers la nouvelle norme, nous continuerons d'aider les développeurs dans toute la mesure du possible. À mesure que nous nous rapprochons de novembre, nous proposons des remplacements appropriés d'extensions complémentaires qui ne font pas la transition »  

 En effet, certains développeurs ont annoncé qu'ils n'effectueront pas la transition et recommandent un autre add-on équivalent, alors que certains add-ons ont déjà été intégralement portés. La communauté de Mozilla a créé une feuille de calcul sur Google Docs qui recense tous les addons, leur status ou équivalents : [Voir la fiche (lien externe)](https://docs.google.com/spreadsheets/d/1TFcEXMcKrwoIAECIVyBU0GPoSmRqZ7A0VBvqeKYVSww/edit#gid=0)

 
