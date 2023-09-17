---
title: "Les sélecteurs CSS essentiels"
description: "Le CSS marche sur un système de sélection des éléments : voici les principaux sélecteurs qui peuvent vous aider dans des situations difficiles."
banner: https://becauseofprog.fr/assets/courses/css/selectors.PNG
type: tutorial
authorId: theovld
category: web
labels: ["CSS", "D\u00e9veloppement"]
timestamp: 1493748790
---

Si vous faites un peu de CSS, vous devez savoir que pour appliquer un style, il faut sélectionner les éléments qui seront la cible. Il existe énormément de sélecteurs en CSS et nous allons vous présenter les principaux, ceux qui peuvent vous “sauver” lors de cas particuliers.

 Prérequis afin de lire le tutoriel :

  * **Connaître la base du CSS :**  
 - avoir appris à appliquer un style sur des éléments avec des sélecteurs simples
 * **Connaître la base du HTML :**  
 - connaître la notion de balise  
 - connaître les éléments de base (titres, paragraphes, liens)

### p

 Le sélecteur de base. Sélectionne uniquement un élément dans la page.

  
```html
     <h1>Titre</h1>  
 <p>  
 Paragraphe  
 </p>
 ```

### p, h1

 Un autre sélecteur de base. Permet de sélectionner plusieurs balises, en les séparant par des virgules

```html
     <h1>Titre</h1>  
 <p>  
 Paragraphe  
 </p>  
 <h2>Autre titre</h2>
```

### *

 L'étoile permet de tout sélectionner sur la page, mais vraiment tout. Son utilisation est déconseillée en vue de sa flexibilité réduite.  
 Pas de code ici, vous avez très bien compris le principe.

### p h1

 Mettre deux balises côte à côte permet de sélectionner la balise de droite contenue dans la balise de gauche.  
 Exemple : p h1 -> sélectionne les h1 dans les p

```
     <h1>Titre</h1>  
 <p>  
 Paragraphe  
 <h1>Titre dans paragraphe</h1>  
 </p>
 ```

### #id

 Ce sélecteur permet de prendre l’élément qui a cet ID en attribut. Notez qu’on ne peut appliquer qu’un ID par page.

```
     <p>  
 Paragraphe  
 </p>  
 <p id=”id”>  
 Paragraphe avec un ID  
 </p>
 ```

### .classe

 Similaire au précédent, celui-là permet de sélectionner tous les éléments qui ont cette classe en attribut.

```
     <p class=”classe”>  
 Paragraphe avec classe  
 </p>  
 <p>  
 Paragraphe  
 </p>  
 <p class=”classe”>  
 Paragraphe avec classe  
 </p>
 ```

### a:visited

 Lors de la visite d’une page qui était reliée à un lien hypertexte, celle-ci est sauvegardée à votre historique et tous les liens hypertextes qui ramèneront vers cette dernière sera d’un certain style. Pour le modifier, mettez :visited devant un lien.

```
     <a href=”<https://becauseofprog.fr>”> BecauseOfProg </a>  
 <a href=”<http://truc.bidule.machin>”>Truc bidule</a>
```

     ps : oui, on part du principe que vous avez déjà visité le site que vous consultez actuellement

### p[machin]

 Alors qu’un sélecteur standard ne prend pas compte des attributs, celui-là doit absolument trouver l’attribut renseigné entre crochets s'il veut pouvoir le prendre.

```
     <p>  
 Paragraphe  
 </p>  
 <p machin>  
 Paragraphe  
 </p>
 ```

     Cela marche aussi si on met p[machin=”truc”]. Dans ce cas, l'attribut doit être égal à la valeur spécifiée entre guillemets.

```
     <p machin=”bidule”>  
 Paragraphe  
 </p>  
 <p machin=”trucs”>  
 Paragraphe  
 </p>  
 <p machin=”truc”>  
 Paragraphe  
 </p>
 ```

     Si on veut sélectionner une valeur qui est quelque part dans l’attribut, on met une étoile * entre l’attribut et le signe égal. Cela nous donne p[machin*="truc"]

```
     <p machin=”bidule”>  
 Paragraphe  
 </p>  
 <p machin=”trucs”>  
 Paragraphe  
 </p>  
 <p machin=”truc”>  
 Paragraphe  
 </p>
 ```

     Si vous voulez sélectionner uniquement le début ou la fin d’une valeur, mettez respectivement ^ ou $ avant le signe égal comme dans l'exemple précédent. Pas d’exemple pour celui-ci, vous avez compris.

 ### p + h1

 Ce sélecteur ne sélectionnera que le h1 placés juste après un p.

```
     <p>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 <p>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 </p>  
 </p>
```

### p ~ h1

 Ce sélecteur se rapproche du précédent, mais celui-là a une portée générale. En effet, il sélectionnera tous les h1, du moment qu’ils suivent un p.

```
     <p>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 <p>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 </p>  
 </p>
 ```

### p:hover

 Dès lors que vous passerez votre souris pour survoler l’élément, le sélecteur s'enclenchera et le style sera appliqué. Notez ici que l’exemple est réduit.

```
     <p>  
 Paragraphe  
 </p>  
 <h1>Titre</h1>

     **Quand on survole le paragraphe :**  
   
 <p>  
 Paragraphe  
 </p>  
 <h1>Titre</h1>
```

### p:active

 Le fait de mettre :active après un élément ne va cibler celui-ci que si l’utilisateur clique dessus.
```
     <p>  
 Paragraphe  
 </p>  
 <h1>Titre</h1>
```
     **Quand on survole le paragraphe **:  
 ```  
 <p>  
 Paragraphe  
 </p>  
 <h1>Titre</h1>```

     **Quand on clique sur le paragraphe :**  
   ```
 <p>  
 Paragraphe  
 </p>  
 <h1>Titre</h1>```

### input:required et input:invalid

 Respectivement, ces “pseudo-classes” permettent de sélectionner un élément de formulaire s'il est requis ou simplement s'il est invalide, par exemple au lieu de mettre un email on a mis un texte simple.
```
     <input type=”text”>  
 <input type=”text” required>```

### p::before et p::after

 Respectivement, ces pseudo-classes permettent d’appliquer un style avant et après un élément, ce qui permet de mettre du style autour de celui-ci. Notez l’importance du double deux points :: au lieu du simple deux points :

     *avant paragraphe*  
``` <p>  
 Paragraphe  
 </p>  ```
 *après paragraphe*

### p:nth-of-type(2) et p:nth-last-of-type(1)

 Respectivement, ces pseudos classes permettent de sélectionner l’élément numéro n en partant du début ou en partant de la fin.
```
     <p>  
 Paragraphe  
 </p>  
 <p>  
 Paragraphe  
 </p>  
 <p>  
 Paragraphe  
 </p>  
 <p>  
 Paragraphe  
 </p>
```
### p:nth-child(2) et p:nth-last-child(1)

 Contrairement au dernier exemple, ces dernières pseudo-classes permettent de sélectionner l’enfant numéro n de l’élément ciblé.
```
     <p>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 </p>
```
### p:first-child et p:last-child

 Respectivement, ces pseudo-classes permettent de sélectionner le premier enfant ou le dernier de l’élément ciblé.

 ```    <p>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 <h1>Titre</h1>  
 </p>```

     Et voici cette liste des sélecteurs CSS essentiels à votre site terminée ! Évidemment, je n'ai pas mis tous ceux qui existent sinon le tutoriel serait beaucoup trop long et de toute façon les autres sont vraiment bien spécifiques à des utilisations spéciales. C'est donc rare, même très rare que vous ayez un jour besoin d'eux.

 **J'espère que ce tutoriel vous aura aidé. Si vous avez du mal à le comprendre, c'est normal, relisez-le bien et surtout testez-y chez vous ! En attendant je vous dis ENJOIE !**

 