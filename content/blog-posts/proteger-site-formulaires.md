---
title: "Protéger son site des attaques par formulaires"
description: "Protéger son site des attaques de base : failles de sécurité dans ses formulaires HTML qui redirigent vers du traitement PHP."
banner: https://becauseofprog.fr/assets/syst-icons/https.png
type: tutorial
authorId: theovld
category: programming
labels: ["PHP", "Programmation"]
timestamp: 1493654184
---

Vous avez peut-être conçu un site web qui accueille des utilisateurs ? Ces utilisateurs peuvent souvent être amenés à renseigner des informations telles que leur nom, leur email et une description. D'autres fois, c'est par l'URL. Aujourd'hui, je vais vous apprendre a vous protéger des éventuelles attaques que cela peut causer.

### Prérequis afin de lire le tutoriel

 * Connaitre les **bases de PHP** :
 * - Connaître la notion de variable
 *  - Avoir manipulé des conditions et des boucles
  Connaitre le **transfert de données** : * - Avoir construit des formulaires avec les méthodes POST et GET
 * - Connaître la notion de variable superglobale
  Avoir des **notions avancées en HTML** : * - Savoir construire un formulaire
  ### Les paramètres $\_GET et l'URL

Lorsqu'un formulaire avec la méthode GET est envoyé, il se retrouve alors dans l'URL sur le modèle :

     monsite.com/?*paramètre1*=*valeur1*&paramètre2=valeur2 

   Vous pouvez donc récupérer les informations dans les variables $\_GET['paramètre1'] et $\_GET['paramètre2'].

Premier point : si vous êtes sur une page où le paramètre doit **absolument** exister, qui peut retirer ces paramètres ? Tout le monde, car les informations sont transitées par l'URL et visibles par tous.  
Pour tester si une variable existe, nous allons nous servir de la fonction *isset* :

```php
<?php  
   
 // Vérification de l'existence du paramètre   
 if (isset($\_GET['paramètre1'])) {  
   
 echo 'Bonjour !';  
 }  
 else {  
   
 echo 'Merci de renseigner le paramètre.';  
 }  
 ?>
```

   Déjà avec ça, nous sommes sauvés de bugs entrainés par la suppression du paramètre requis. Croyez-moi, cela vous évitera beaucoup d'ennuis, même si cela paraît minimaliste.

Second point : après avoir mis en place cette sécurité, il faut vous assurer qu'on ne vous envoie pas n'importe quoi, car l'URL est modifiable aussi par les valeurs des paramètres.  
Par exemple, si vous attendez un nombre entier et qu'on vous envoie une chaîne de caractères, il y a problème. Il faut alors convertir le paramètre dans le bon format.

```php
     <?php  
   
 if (isset($\_GET['paramètre1'])) {  
   
 // Trasformation en nombre entier  
 $paramètre1 = (int) $\_GET['paramètre1'];  
   
 echo 'Vous avez choisi le numéro '.$paramètre1;   
 }  
 else {  
   
 echo 'Merci de renseigner le paramètre.';  
 }  
   
 ?>
```

   Ici, (int) transforme la variable $\_GET['paramètre1'] en nombre entier et insère la valeur finale dans $paramètre2. Cela marche avec tous les types de variables.

Dernier point : maintenant qu'on a toutes ces sécurités, il faut contrôler la valeur finale, pour voir si on vous a donné quelque chose qui convient à l'utilisation du site.  
Premier exemple, si vous voulez faire une boucle qui tourne le nombre de fois qu'on a donné en paramètre, il ne faut pas qu'elle dépasse un certain nombre de tours, sinon PHP arrêtera de générer la page et affichera une erreur, ce qui est dommage pour l'utilisateur.

```php
     <?php  
   
 if (isset($\_GET['paramètre1'])) {  
   
 $paramètre1 = (int) $\_GET['paramètre1'];  
   
 // Vérification du nombre donné  
 if ($\_GET['paramètre1'] >= 40) {  
   
 for ($i = 0 ; $i < $\_GET['paramètre1'] ; $i++) {   
   
 echo 'Coucou '.$i.' fois !';  
 }  
 }  
 else {  
   
 echo 'Le nombre spécifié est au dessus de 40';  
 }  
 }  
 else {  
   
 echo 'Merci de renseigner le paramètre.';  
 }  
   
 ?>
```

   Ici, la boucle ne s'exécutera pas plus de 40 fois, ce qui évitera le crash de la page.

Deuxième exemple, si vous avez un code qui s'affiche selon des données précises du paramètre, tel que des options, vous devrez alors des tests avec la condition *switch (non, pas la console de Nintendo)*.

```php
     <?php  
   
 if (isset($\_GET['paramètre1'])) {  
   
 // Transformation en chaîne de caractères  
 $paramètre1 = (string) $\_GET['paramètre1'];  
   
 switch ($paramètre1) {  
   
 // Test sur des valeurs possibles  
 case "opt1":  
 echo "Vous avez choisi l'option numéro 1 !";   
 break;  
   
 case "opt2":  
 echo "... l'option 2 !";  
 break;  
   
 // Si rien ne correspond  
 default:  
 echo "Option non reconnue !";  
 break;  
 }  
 }  
 else {  
   
 echo 'Merci de renseigner le paramètre.';  
 }  
   
 ?>
```

J'ai bien pensé ici à transformer le paramètre en chaîne de caractères afin d'éviter les problèmes.

### Les paramètres $\_POST

Le type de formulaire avec la méthode POST passe ses paramètres "derrière" la page : l'envoi est totalement invisible. Néanmoins, cela ne nous protège pas davantage.  
Même si c'est caché, le formulaire en lui-même, en HTML, est visible par tous simplement par le biais de l'inspecteur de votre navigateur. Si quelqu'un de mal intentionné modifie un champ initialement prévu pour les nombres, et qu'il met un champ de texte normal, il faut à nouveau convertir le paramètre. Et bien sûr, on garde la fonction *isset* pour vérifier qu'on nous envoie quelque chose.

```php
     <?php  
   
 if (isset($\_POST['nombre'])) {  
   
 $nombre = (int) $\_POST['nombre'];   
   
 echo 'Vous avez choisi le nombre '.$nombre;   
 }  
   
 ?>
```

   Voici l'exemple très basique. Retenez surtout que les informations envoyées peuvent être modifiées et que vous pouvez tomber sur des données que vous ne vouliez pas.

### $\_POST et $\_GET

Lorsque votre visiteur va envoyer des informations telles que son pseudo, la plupart du temps, il va les écrire en texte plein, sans rien avec. Mais quelqu'un qui s'y connaît un minimum en HTML peut très bien insérer du code dedans. Prenons l'exemple où l'utilisateur aurait mis son pseudo en gras.

```php
<?php  
   
 if (isset($\_GET['pseudo'])) {  
   
 echo 'Salut '.$\_GET['pseudo'].' !';   
 }  
 ?>
```

Sortie

> Salut **Gérard** !

   Vous me direz que ce n'est pas très grave, qu'un utilisateur a bien le droit de mettre son pseudo en gras. Maintenant, imaginez que l'utilisateur ai inséré d'autres balises, comme du JavaScript, et qu'il affiche son pseudo pendant que derrière vos cookies sont récupérés. Voyez l'impact que cela peut prendre. On l'appelle l'ovni la faille XSS. Il faut absolument empêcher cela. À partir de là, vous avez 2 solutions :

 * Afficher le code HTML inséré
 * Le supprimer entièremment 
Voici le code dans les 2 cas :

```php
     <?php  
   
 if (isset($\_GET['pseudo'])) {  
   
 // Fonction htmlspecialchars qui affiche le code   
 echo 'Salut '.htmlspecialchars($\_GET['pseudo']).' !';   
 }  
   
 ?>
 ```

Sortie

> Salut <strong>Gérard</strong> !

    
```php
    <?php  
   
 if (isset($\_GET['pseudo'])) {  
   
 // Fonction strip\_tags qui retire le code   
 echo 'Salut '.strip\_tags($\_GET['pseudo']).' !';   
 }  
   
 ?> 
```

      Résultat

  Salut Gérard !

   Voyez dans quelles situations utiliser l'une ou l'autre fonction. Personnellement, je mets strip\_tags lors de l'insertion dans une base de données et le reste en htmlspecialchars. Au moins, sûrs d'être tranquille !

### Conclusion

La sécurité de votre site est importante. Elle passe aussi par les formulaires et les informations que les utilisateurs remplissent. Si vous utilisez à bien toutes les méthodes listées au-dessus, vous êtes tranquille.  
Cela n'évitera pas le hack de votre site, mais limitera les moyens pour y accéder. N'hésitez pas à relire ce tutoriel dans le futur pour bien vous rappeler des règles à respecter pour la sécurité de son site.

**J'espère que ce premier tutoriel vous a été utile, en attendant je vous dis ENJOIE ! **

