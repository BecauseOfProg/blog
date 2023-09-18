---
title: "Le Material Design sur vos sites web"
description: "Le Material Design, créé par Google, est célèbre grâce à son interface moderne et épurée. Voici un tutoriel pour que vous puissiez y intégrer sur vos sites webs."
banner: /img/articles/material-design-web/md-example.jpg
type: tutorial
authorId: theovld
category: web
labels: ["HTML", "CSS", "Développement"]
timestamp: 1494162497
---

Le Material Design est un type de design créé par Google et qui a la particularité d'être très moderne et épuré. On le voit de plus en plus dans les applications Android et sur les sites web. Aujourd'hui, nous allons voir comment faire notre propre site avec des frameworks basés sur le Material Design.

 ![](/img/articles/material-design-web/freebie___weather_app_ui_design_by_graphberry-d8m33wj.png)![ups](/img/articles/material-design-web/md-example.jpg)

 *Exemples d'applications en Material Design et principe général*

### Material Design Lite

 Le premier framework nous parvient directement de Google puisque c'est celui de base, c'est un peu la référence dans le Material Design. Il comporte beaucoup d'éléments personnalisables ainsi que des animations faites en JavaScript. Il repose sur un système de grille et de layout qui facilite la conception du site.

 ![](/img/articles/material-design-web/1foCgfXyJv5FjACTnEXpc0A.png)![](https://becauseofprog.fr/assets/articles/mdl2.PNG)

 *Exemples de sites construits avec Material Design Lite*

 Pour commencer, rendez-vous sur <https://getmdl.io/customize/index.html> et choisissez la palette de couleurs que vous préférez. Ensuite, soit vous téléchargez le fichier avec le bouton au centre, soit vous copiez directement le code dans le <head> de votre site. Ensuite rendez-vous sur <https://getmdl.io/started/index.html> et choisissez de télécharger le pack en remplaçant material.min.css par le fichier téléchargé précédemment, pour ensuite copier le code que l'on vous donne, ou alors copiez le code fourni dans le <head> de votre site en remplaçant la ligne d'importation de la feuille de style par celle que vous avez eue précédemment. Normalement vos dossiers devraient ressembler à cela :

  > Site/ |--mdl/ | |--bower.json | |--material.css | |--material.min.css | |--material.min.css.map | |--material.js | |--material.min.js | |--material.min.js.map | |--package.json | |--LICENSE (pas important, supprimez-le) | |--index.html 
  
  Après cela, allez sur <https://getmdl.io/components/index.html> et commencez à créer votre site ! Choisissez les éléments que vous voulez placer et ajoutez-les à votre guise. Je vous conseille de commencer par "layout" qui va vous permettre de structurer votre en-tête, votre pied de page ainsi que le contenu principal de votre site.

 ![](https://becauseofprog.fr/assets/articles/mdl-doc1.PNG)![](https://becauseofprog.fr/assets/articles/mdl-doc2.PNG)

 *Documentation de Material Design Lite*

 Si vous voulez avoir un exemple concret d'un site en Material Design Lite, visitez <https://exybore.becauseofprog.fr> (mon sous-domaine personnel)

### Materialize

 Materialize est aussi un framework CSS mais il est moins compliqué à pratiquer que Material Design Lite. Il se base aussi sur un système de grille mais n'a pas de "layout". Cela permet un peu plus de flexibilité. Il faudra par contre intégrer manuellement le JavaScript pour certaines fonctions.

 ![](https://becauseofprog.fr/assets/articles/materialize1.PNG)![](https://becauseofprog.fr/assets/articles/materialize2.PNG)

 *Exemples de sites web construits avec Materialize*

 Pour démarrer, rendez-vous sur <http://materializecss.com/getting-started.html> et téléchargez le pack Materialize. Décompressez-le dans le dossier de votre site. La structure devrait être celle-ci :

  Site/ |--css/ | |--materialize.css | |--fonts/ | |--roboto/ | |--js/ | |--materialize.js | |--index.html Ensuite, recopiez le code de base dans la page de votre site :

  <!DOCTYPE html> <html> <head> <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection"/> <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script> <script type="text/javascript" src="js/materialize.min.js"></script> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> </head> <body> <!-- Contenu de la page --> </body> </html> Après cela, vous pouvez commencer à explorer le framework ainsi que ses composants ! Le principal avantage que vous avez, c'est que la documentation est en grande partie en français.  
 Je vous conseille d'abord de commencer par "Color" afin de comprendre le système des couleurs de Materialize, puis ensuite par "Grid" pour comprendre le système de grille.

 ![](https://becauseofprog.fr/assets/articles/materialize-doc1.PNG)![](https://becauseofprog.fr/assets/articles/materialize-doc2.PNG)

 *Captures d'écran de la documentation Materialize*

 Pour vous dire, même le site de la BecauseOfProg se base sur Materialize ! Vous avez donc un exemple concret de design.

### Material Design Icons

 Vous avez maintenant votre framework CSS. Ajoutez donc des icônes pour rendre cela plus joyeux ! La stylesheet des icônes est déjà intégrée de base avec le code source que vous avez copié. Rendez-vous donc sur <https://www.materialpalette.com/icons>, choisissez l'icône qui vous plaît et copiez le code donné avec. Vous pouvez également ajouter les classes *right* et *left* pour l'alignement, et *tiny*, *small*, *medium* ou *large* pour les tailles.

 ![](https://becauseofprog.fr/assets/articles/mdi.PNG)![](https://becauseofprog.fr/assets/articles/mdi2.PNG)

 *Interface de Material Design Icons*

 ![](https://becauseofprog.fr/assets/articles/mdi-usage.PNG)

 *Utilisation des icônes sur le menu de la BecauseOfProg*

### Conclusion

 Le Material Design est nouveau et ne cesse de s'épandre. Il faut donc petit à petit passer par ce moyen de designer les sites, donc de la façon la plus moderne. Choisissez le framework qui vous correspond et créez votre site avec cela.

 **Vous avez donc toutes les clés pour commencer votre site en Material Design ! C'est donc le moment de vous dire salut mais surtout ENJOIE !**

 
