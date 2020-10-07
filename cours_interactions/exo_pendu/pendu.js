//identifier quand l'utilisateur tape sur le  clavier
//Savoir quel touche il a tapé
//regarder si les lettres entrés sont dans le mot
//si lettre trouver, afficher, sinon retirer un essai

// Tableau contenant les mots qu'il est possible de faire deviner
let mots = ['aleatoire','methode','javascript','football','sport'];
// Tableau contenant l'alphabet pour faire le clavier virtuel
let tab = 'abcdefghijklmnopqrstuvwxyz';
//la fonction math.floor(Math.random()) génére quelque chose aléatoirement
let mot = mots[Math.floor(Math.random() * mots.length)];
// Variable qui recevra le nombre de bonne réponse de l'utilisateur
let nbBonneReponse = 0;
// Nombres de chances
let chance = 5;
// ----- Clavier virtuel -----
// Pour toutes les lettres de l'alphabet
for (let j = 0; j < tab.length; j++){
  // On crée un bouton
  let touche = document.createElement('button');
  // On lui assigne sa lettre
  touche.innerHTML = tab[j];
  // On lui ajoute un écouteur d'événement (ici 'click')
  touche.addEventListener('click', verification);
  // On ajoute le bouton au body
  document.body.appendChild(touche);
}
// On crée un paragraphe
let afficheChances = document.createElement('p');
// On y affiche le nombre de chance
afficheChances.innerHTML = 'Chance :' + chance;
// On ajoute le paragraphe au body
document.body.appendChild(afficheChances);
// On crée le container du mot à deviner
let div = document.createElement('div');
// On lui donne un id
div.id = 'mot';
div.style.marginTop = '50px';
// On l'ajoute au body
document.body.appendChild(div);
// Pour chaques lettres du mots à deviner
for (let i = 0; i < mot.length; i++){
  // On crée un span
  let elem = document.createElement('span');
  // On lui met une bordure et une marge intérieure
  elem.style.padding = '10px';
  elem.style.border = '2px solid black';
  // On l'ajoute au body
  div.appendChild(elem);
}
// Fonction de verification de la lettre proposée par l'utilisateur
function verification(){
  // On récupère la lettre
  let lettre = this.innerHTML;
  // On récupère les spans d'affichage du mot
  let spans = document.querySelectorAll('#mot span');
  // Si la lettre et dans le mot
  if(mot.includes(lettre)){
    // Pour chaque lettres du mot
    for (let i = 0; i < mot.length; i++){
      // On vérifie si la lettre du mot et égale à la proposition
      if(mot[i] === lettre){
        // Si oui on augmente le nombre de bonne réponse
        nbBonneReponse++;
        // On affiche les lettres correspondantes dans les spans
        spans[i].textContent = mot[i];
      }
    }
    // Si le nombre de bonnes réponses et égale au nombre de lettres du mot
    if(nbBonneReponse === mot.length) {
      // On crée le paragraphe
      let message = document.createElement('p');
      // On affiche le message de victoire
      message.textContent = 'Vous avez gagné !'
      // On ajoute le message au body
      document.body.appendChild(message);
    }
  // Sinon si la lettre n'est pas dans le mot
  } else {
    // On diminue le nombre de chance
    chance--;
    // On change l'affichage
    afficheChances.innerHTML = 'Chance :' + chance;
    // Si le nombre de chance et à zéro
    if(chance == 0){
      // On crée le paragraphe
      let message = document.createElement('p');
      // On ajoute le message de défaite
      message.textContent = 'Vous avez perdu !';
      // On ajoute au body
      document.body.appendChild(message);
    }
  }
}






















/*let mots = 'aleatoire';
let chance = 5;
let array = ['_','_','_','_','_','_','_','_','_'];

document.addEventListener('keydown', function(e){

  if(chance === 0){
    console.log('vous avez perdu');
  }
  else{
    if(array.join('') === mots){// le .join('') change un tableau en chaine de caractéres
      console.log('Vous avez gagné')
    }
    else {
      for(let i = 0; i < mots.length; i++){
        if(e.key === mots[i]){
          array[i] = mots[i];
        }
      }
      console.log(array)
      if(!(mots.includes(e.key))){
        chance--;
      }
    }
  }

  console.log(e.key);
})*/
