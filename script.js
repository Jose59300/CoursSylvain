//alert('Hello World');

//var age = 17;
//alert(age); affiche sur le naviagteur en popUp
//console.log(age); // pour afficher dans la console du navigateur et non sur le naviagteur

//var b = 3;

//var est_vrai = true; //C'est un boolean
//var est_vrai_chaine = "true"; // Ce n'est pas un boolean

//console.log(age + b); //IL va ajouter les agês, les concatainer (33+3 = 36)

//console.log(parseInt(age) + b); // ParseInt transforme ce qui n'est pas en entier en entier
//console.log(Type of "nom de la fonction"); Cela permet de trouver le type de variable écrites

// operateurs de comparaisons : ==(Comparer deux valeurs) ; != (différent de) ; ===(compare type et valeurs);
// !== (different contenu et type) ; > (superieur a); >=(superieur ou egal) ; <(inferieur a) ; <= (superieur ou egale);
// Exemple : console.log(3 == '2'); Compare juste la valeur !
// && (signifie 'et'); | |(signifie 'ou');

//var age = 15;
//console.log(age >=18) && (age <=30);

//if(age >=18) {
//  console.log('ok');
//} else {
//  console.log('ko');
//}

//var age = 18;
//if (age > 18) {
//console.log('ok');
//} else if (age == 18) {
//console.log('egale à 18');
//} else {
//console.log('k.o');
//}

/*var age = 30;
switch (age) {
  case 20:
  console.log('20 ans');

  break;
  case 12:
  console.log('12 ans');
  default:
  console.log('default');
  break;
}

// operateur ternaire
var est_majeur = null;
if (age > 18) {
  est_majeur = true;
} else {
  est_majeur = false;
}
console.log(est_majeur);
// var est_majeur = (age > 18) ? true ; false; Version simplifié du if , else

/*var condition_de_test = 0;
if(condition_de_test) {
console.log('vrai');
} else {
console.log('false');
} 0 = faux, 1 = vrai, il retourne faux dans cette variable car la variable = 0*/

/*var age = 18;
age++;
console.log(age);
age--;
console.log(age);*/

/*console.log(age++);// va faire l'incrémentation aprés le console.console.log;
console.log(++age);// va faire l'incrémentation avant l'affichage;
// majeur ou mineur
var annee_actuel = 2020;
var annee_saisie= parseInt(prompt(' En quel année êtes-vous née?'));
if (annee_actuel - annee_saisie >=18) {
  console.log('Vous êtes majeur');
} else {
  console.log('Vous êtes mineur');
}
// année bisextile
var annee = parseInt(prompt('Est-ce une année bisextile?'));
if (((annee % 4) == 0) && !((annee % 100) == 0) || (annee % 400 == 0)) {
  console.log("C'est une année bisextile");
} else {
  console.log("Ce n'est pas une année bisextile");
}
/*L'utilisateur X demande une subvention pour son entreprise :
Il est éligible à une réduction de 10% du CA Si :
Son revenu de l'année en cours est compris entre 30000 et 60000 annuel
Il est éligible à une réduction de 20% du CA Si :
Son revenu de l'année en cours est compris entre 20000 et 20999 annuel MAIS que le revenu de l'année précédente n'excède pas 50000
Il a 5% supplémentaire si l'année en cours est bissextile :)

En 2019 il a déclaré 44000 et en 2020 il a déclaré 50000
A combien peut-il prétendre en pourcentage ?
Quel est le montant de la réduction finale  ?*/

var revenu_precedent = 44000;
var revenu_en_cours = 50000;
var reduction = 0;
var annee_en_cours = 2020;

if ( (revenu_en_cours >= 30000 && (revenu_en_cours <= 60000))) {
  reduction = 0.1;
} else if ( (revenu_en_cours >= 20000 && (revenu_en_cours <=20999 && (revenu_precedent <= 50000)))) {
  reduction = 0.2;
}
if (((annee_en_cours % 4) == 0) && !((annee_en_cours % 100) == 0) || (annee_en_cours % 400 == 0)) {
  reduction += 0.05;
}
console.log("" + (reduction * 100) +"% " + (revenu_en_cours * reduction) );


// Problème 1, confusion dans les blocs {} :
/*var x = 1;
if (true) {
  var x = 2; // même variable, car sa portée n'est pas celle du bloc !
  console.log(x); // 2
}
console.log(x); // 2 */


// Problème 2, la portée n'est pas restreinte aux blocs {} :
//var a = 1;
//var b = 2;
//if (a === 1) {
//var a = 3; // la portée est globale
//let b = 4; // la portée est celle du bloc
//console.log(a); // 3
//console.log(b); // 4

//console.log(a); // 3
//console.log(b); // 2

// Problème 3, pas d'erreur levée en cas de déclarations multiples :
// Vous aurez simplement un warning dans les navigateurs récents.
/*var i = 1;
var i = 2;
var ajouter = function(a, b) {
  return a + b;
};
var ajouter = function(a, b) {
  return a + b;
};

// Problème 4 : problème des boucles avec de l'asynchrone :
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
// Seul avec les objets on peut toucher une constante !
const personne = {
  prenom: 'Sylvain'
}
personne.nom = 'Dupont';
console.log(personne);
// le premier console log affiche true et le deuxième false !
let test = false;
if (true) {
  let test = true;
  console.log(test);
}
console.log(test);

//En JavaScript vous entendrez probablement parler du hoisting ou remontée des déclarations ou hissage en français.
//Il s'agit d'une spécificité du langage qui fait que lorsque l'interpréteur parse (parcourt et analyse)
// votre code, il va automatiquement remonter toutes les déclarations en haut de votre code.
//Cela permet d'écrire cela et de ne pas avoir d'erreur :

//a = 2;
//let a;
//console.log(a); // 2


const a = 1;
let b = a;
console.log(a, b);

b = 2;
console.log(a, b);


const obj = {a: 1};
const obj2 = obj;

obj2.a = 2;
console.log(obj);


/*const age = 18;
switch (age) {
  case 21:
    console.log('Tu peux commencer à boire de l’alcool aux Etats-Unis.');
    break;
  case 18:
    console.log('Tu peux commencer à boire de l’alcool en France.');
    break;
  case 16:
console.log('Tu peux commencer à boire de l’alcool à Cuba.');
    break;
  case 14:
    console.log('Tu peux commencer à boire de la bière en Allemagne.');
    break;
  default:
    console.log('Rien pour toi cette année.');
}*/


const age = 18;
	switch (age) {
	  case 21:
	    console.log('Tu peux boire de l’alcool aux Etats-Unis.');
	  case 18:
	    console.log('Tu peux boire de l’alcool en France.');
	  case 16:
	    console.log('Tu peux boire de l’alcool à Cuba.');
	  case 14:
	    console.log('Tu peux boire de la bière en Allemagne.');
	    break;
	  default:
	    console.log('Rien pour toi cette année.');
	}


const pays = 'France';
	switch (pays) {
	    case 'France':
	    case 'Allemagne':
	    case 'Italie':
	    case 'Espagne':
	        console.log('Tu es européen !');
	        break;
	    case 'Corée':
	    default:
	        console.log("Tu n’es pas européen.");
	}

// les boucles :
// boucle 'for' est celle la plus utilisée
//for (initialisation des compteurs; conditions; incrémentations) {
  //  instructions à exécuter;
  //}

  for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    for (let i = 1; i < 11; i++) {
    console.log(i);
  }
// boucle pour faire afficher les chiffres pairs jusqu'a 100
  for (let i = 2; i < 100; i+= 2) {
  console.log(i);
  }
// plusieurs initialisation boucle for
  for (let i = 0, j = 1; i < 4 && j < 3; i++, j++) {
    console.log(i, j);
  }
// conditions d'arrêt boucle for
  for (let i = 0; i < 100; i++) {
    if (i === 10) {
      break;
    }
  console.log(i)
  }
// ça permet de sauter une instruction et d'aller a la suivante
  let texte = "";
  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      continue;
    }
    texte += i;
  }
  console.log(texte);

  //Boucle 'While' c'est de faire quelque chose tant que la condition n'est pas vérifié (c'est le même principe que for)

  /*let i = 0;
	while (i < 3) {
	  i++;
	  console.log(i); // 1, 2, 3
	}*/

  // Boucle do/while : Peut importe la condition d'arrêt il fera un tour de boucles

  /*let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);*/


//objets

let Voiture = {
  couleur: 'Bleu',
  puissance: 6,
  type: 'Berline'
};
console.log(Voiture);

let maPhrase = 'Salut toi !';
console.log(maPhrase.length);// la propriété length permet de definir la longueur de ma variable
console.log(maPhrase.includes('toi'));// le includes permet de savoir si oui ou non
console.log(maPhrase.startsWith('toi')); //le startsWith permet de savoir si la variable commence par tel mot ou pas
console.log(maPhrase.toUpperCase()); // permet de mettre le texte en majuscule
console.log('Bonjour'.charAt(2));// permet de savoir le caractére (ici la lettre n)

// METTRE LA PHRASE a l'envers
/*let phrase = 'hello you';
let my_phrase='';
for (let i = phrase.length-1; i >= 0; i--)
my_phrase += phrase.charAt(i);
console.log(my_phrase);*/

// autre façon de mettre la phrase a l'envers !
/*let ma_phrase = 'salut toi';
let i = ma_phrase.length -1;
while(i>=0) {
  console.log(ma_phrase.charAt(i));
  i--;
}*/
// A l'aide d'une boucle vous devez afficher les chiffres paires de facon croissante (jusuqu'a 100)
// et les chiffres impaires de façon decroissante
for (let i = 0, j = 99; i < 100 && j > 0; i+=2,  j-=2) {
  console.log(i, j);
}

// LES FONCTIONS

function inverse(ma_phrase){
  let i = ma_phrase.length -1;
  while(i>=0) {
    console.log(ma_phrase.charAt(i));
    i--;
  }
}
inverse('salut');
inverse('Bonjour');

function somme(a, b) {
  return a + b;
}
console.log(somme(5,3));// la console va retourner la somme(8) avec le return

/*L'utilisateur X demande une subvention pour son entreprise :
Il est éligible à une réduction de 10% du CA Si :
Son revenu de l'année en cours est compris entre 30000 et 60000 annuel
Il est éligible à une réduction de 20% du CA Si :
Son revenu de l'année en cours est compris entre 20000 et 20999 annuel MAIS que le revenu de l'année précédente n'excède pas 50000
Il a 5% supplémentaire si l'année en cours est bissextile :)

En 2019 il a déclaré 44000 et en 2020 il a déclaré 50000
A combien peut-il prétendre en pourcentage ?
Quel est le montant de la réduction finale  ?*/
function resultat(revenu_precedent, revenu_en_cours, annee_en_cours){
  let reduction = 0;
  if ( (revenu_en_cours >= 30000 && (revenu_en_cours <= 60000))) {
    reduction = 0.1;
  } else if ( (revenu_en_cours >= 20000 && (revenu_en_cours <=20999 && (revenu_precedent <= 50000)))) {
    reduction = 0.2;
  }
  if (((annee_en_cours % 4) == 0) && !((annee_en_cours % 100) == 0) || (annee_en_cours % 400 == 0)) {
    reduction += 0.05;
  }
  return reduction;
}
console.log(resultat(44000, 50000, 2020));//si console.log en dehors de la fonction, faut appeler le resultat avec un return dans la fonction !

/*function estBissextile (annee) {
    return ((annee%4 ==0) && !(annee %100 == 0) || (annee %400==0));
}
function estTranche1(ca){
  return (ca >= 30000) && (ca <= 60000);
}
function estTranche2(caEnCours, caPrecedent){
  return ((caEnCours >= 20000) && (caEnCours <= 20999)) && (caPrecedent <= 50000);
}
function calculReduction(ca2020, ca2019, anneeEnCours){
  let reduc = 0;
  if (estTranche1(ca2020)) {
      reduc = 10;
  }
  if (estTranche2(ca2020,ca2019)) {
      reduc = 20;
  }
  if (estBissextile(anneeEnCours)) {
      reduc += 5;
  }
  return reduc;
}
let reduc = calculReduction(50000, 20222, 2018);
console.log(reduc +'% ce qui correspond à '+((50000*reduc)/100)+ ' €');*/

//Fonction année bissextile
function bissextile(annee_en_cours){
  if (((annee_en_cours % 4) == 0) && !((annee_en_cours % 100) == 0) || (annee_en_cours % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(bissextile(2020));

// fonction qui défini si le mot est un palindrome

function palindrome(mot){
  mot = mot.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  let resultat = true;
  for (let i = 0, j = mot.length-1; i < mot.length && j >= 0; i++,  j--) {// mot.length signifie qu'il renvoie le nombre de caractére, et le -1 signifie l'emplacement de la derniére lettre
    if (mot.charAt(i) != mot.charAt(j)){
      resultat = false;
    }
  }
  return resultat;
}
console.log(palindrome('Engage le jeu, que je le gagne.'));

// Les tableaux
// un tableau est un type objet, pour acceder aux élements de mon tableau je vais utiliser des indices
// On va voir des méthodes pour ajouter/supprimer le premier élément du tableau etc etc
let mon_tableau = ["bleu",true,4];
console.log(mon_tableau[0]);
console.log(mon_tableau[1]);
console.log(mon_tableau[2]);
console.log(mon_tableau[3]);

//afficher la longueur de mon tableaux
console.log(mon_tableau.lenght);

// afficher le dernier élément pour un tableau de longueur inconnu
console.log(mon_tableau[mon_tableau.length -1]);

//transformer le tableau en chaine de caractére
console.log(mon_tableau.join(' '));

//transformer une chaine de caractére en tableau
let ma_chaine = 'helle world !'
console.log(ma_chaine.split(' '));

// ajout d'un élément au début
mon_tableau.unshift('element au début');
console.log(mon_tableau);

// ajout d'un élément a la fin
mon_tableau.push('element a la fin');
console.log(mon_tableau);

// supprimer le dernier élement
mon_tableau.pop();
console.log(mon_tableau);

//Supprimer le premier élement
mon_tableau.shift();
console.log(mon_tableau);

// Comment parcourir un tableau
let couleurs = ["bleu","jaune","vert","violet","orange","violet","gris"];
for(let i = 0; i < couleurs.length; i++){
  console.log(couleurs[i]);
}

couleurs.forEach(function(couleur){
  console.log(couleur);
})

for(let couleur of couleurs){
  console.log(couleur);
}

for(let i in couleurs){
  console.log(couleurs[i]);
}

//jeu de dame 0=> blanc 1=>noir
let jeu_de_dame = [
  [0,1,0,1],
  [1,0,1,0],
  [0,1,0,1],
  [1,0,1,0]
];

jeu_de_dame.forEach(function(ligne){
  ligne.forEach(function(cellule){
    console.log(cellule);
  });
});
//supprimer le premier élément d'un tableau
jeu_de_dame[1].shift();

// créer une fonction retournant ce tableau épuré de chiffres impaires
let mon_tab =[1,5,1,0,8,5,3,9,4,6,2];
function entree(mon_tab){// je crée une fonction en injectant ma variable
  let array = []// je crée un tableau vide pour pouvoir y glisser le résultat
  for(let i = 0; i < mon_tab.length; i++) {// ma boucle par de 0, elle doit être inférieur a la longueur du tableau, et je l'incrémente de 1
    if(mon_tab[i] % 2 == 0){// je fais ma condition pour savoir si le chiffre est divisile par 2 entier
      array.push(mon_tab[i]);// j'injecte mon résulat dans le tableau vide
    }
  } return array;// je retourne le résultat
}
console.log(entree(mon_tab));//j'affiche le résultat dans ma console


//autre méthode
function epureTableauImpaire(tableau){
  let newTableau = [];
  monTableau.forEach(function(e){
    if(e%2 == 0){
      newTableau.push(e);
    }
  });
  return newTableau;
}

//ou
function epureTableauImpaireFilter(tableau){
  return tableau.filter(elem => elem%2 === 0);
}
