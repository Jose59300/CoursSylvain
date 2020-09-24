//Méthodes pour cibler un élément html
// via un ID
let maSection = document.getElementById('ma_section');
console.log(maSection);

// via une balise
let paragraphes = document.getElementsByTagName('p');
console.log(paragraphes);

// Via une classe
let red = document.getElementsByClassName('red');
console.log(red);


let query = document.querySelector('#ma_section');
let queryAll = document.querySelectorAll('.red');
console.log(query, queryAll);

//recuperer le premier span
let mon_span = document.querySelector('span');
console.log(mon_span);

//recuperer le dernier
//let span = document.querySelectorAll('span');
//console.log(span[span.length-1]);

//recuperer le 1er paragraphe de la 2eme maSection
let my_section = document.querySelector('#maSection2 p');
console.log(my_section.ParentNode)// ça permet de remonter de 1 a partir de la selection effectué(ici le p de la 2eme section)

//ou
let section = document.querySelectorAll('#maSection2 > div p:first-child');// recuperer les noeuds enfants

//recuperer noeud enfant
// .last-child : le dernier noeud enfant
//.first/lastELementCHild : il va retenir que les noeud de type html
//.nodeType : Il peut renvoyer que 3 valeurs (1 type élément, 3 de type textuel) la valeur 2 on s'en fou
//.nodeName : le nom de la balise en majuscule

//recuperer tout les noeuds enfant directement : .childNodes
// aller sur le noeud suivant : console.log(monParagraphe.nextElementSibling); pour aller en arriére = .previousElementSibling
//Récupère le premier noeud de type élément
//console.log(monParagraphe.firstElementChild);
//Récupère le dernier noeud de type élément
//console.log(monParagraphe.lastElementChild);
//Récupère les noeuds enfants
//console.log(monParagraphe.childNodes)
//Aller sur le noeud suivant
//console.log(monParagraphe.nextElementSibling);

//let monDernierLien = document.querySelector('#divparent p a:last-child');
//console.log(monDernierLien);

//let monDernierLien = document.querySelector('#divParent p a:last-child');
//console.log(monDernierLien.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild);  // a : lien 2

//Créer un lien
//let nouveau_lien = document.createElement('a');
//nouveau_lien.href = 'https://google.fr';
//nouveau_lien.innerHTML = 'lien 1.4';
// on accroche le nouveau noeud comme enfant du noeud #divparent p:first-child;
//document.querySelector('#divparent p:first-child').appendChild(nouveau_lien);

//insertBefore(nouveauNoeud, noeudDeReference)
//document.querySelector('#divparent p:first-child').insertBefore(nouveau_lien, document.querySelector('#divparent p:first-child'));

document.querySelector('#divparent p:first-child').removeChild(document.querySelector('#divparent p a:last-child'));

// pour lundi 5 octobre Générer l'ensemble des balises de cette page https://html5boilerplate.com/ (uniquement celles du body) en Javascript uniquement !
