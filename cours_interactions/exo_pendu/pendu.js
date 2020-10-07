//identifier quand l'utilisateur tape sur le  clavier
//Savoir quel touche il a tapé
//regarder si les lettres entrés sont dans le mot
//si lettre trouver, afficher, sinon retirer un essai

let mots = ['aleatoire','methode','javascript','football','sport'];

let tab = 'abcdefghijklmnopqrstuvwxyz';
let mot = mots[Math.floor(Math.random() * mots.length)];//la fonction math.floor(Math.random()) génére quelque chose aléatoirement
let nbBonneReponse = 0;
console.log(mot);
let chance = 5;

// Clavier
for (let j = 0; j < tab.length; j++){
let touche = document.createElement('button');
touche.innerHTML = tab[j];
touche.addEventListener('click', verification);
document.body.appendChild(touche);
};

let chances = document.createElement('p');
chances.innerHTML = 'Chance :' + chance;
document.body.appendChild(chances);

// container du mot
let div = document.createElement('div');
div.id = 'mot';
div.style.marginTop = '50px';
document.body.appendChild(div);

// cases pour les lettres du mot
for (let i = 0; i < mot.length; i++){
let elem = document.createElement('span');
elem.style.padding = '10px';
elem.style.border = '2px solid black';
div.appendChild(elem);
}


function verification(){

let lettre = this.innerHTML;
let spans = document.querySelectorAll('#mot span');
if(mot.includes(lettre)){
for (let i = 0; i < mot.length; i++){
if(mot[i] === lettre){
nbBonneReponse++;
console.log(nbBonneReponse);
spans[i].textContent = mot[i];
}
}
if(nbBonneReponse === mot.length) {
let message = document.createElement('p');
message.textContent = 'Vous avez gagné !'
document.body.appendChild(message);

}
}
else{
chance--;
chances.innerHTML = 'Chance :' + chance;
if(chance == 0){
let message = document.createElement('p');
message.textContent = 'Vous avez perdu !'
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
