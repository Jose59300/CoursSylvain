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


// document.addEventListener('keydown',function(e){
//   for(let i = 0; i < mots.length; i++){
//     if(mot.includes(e.key)){
//       array[i] = mots[i];
//       console.log()
//
//     }
//

//  }
//console.log(e.key);
//})





















/*let mots = 'aleatoire';
let chance = 5;
let array = ['_','_','_','_','_','_','_','_','_'];
let tab = ['a','l','e','a','t','o','i','r','e'];

document.addEventListener('keydown', function(e){
for(let j = 0; j < tab.length; j++){
if(e.key == tab[j]){
array.push(e.key);
console.log(array);
}
}
for(let i = 0; i < mots.length; i++){
if(e.key === mots[i]){
array[i] = tab[i];
}
} console.log(e.key);
})






/*if(mots.includes(e.key)) {//la fonction includes verifie si la variable est inclue dans mots, donc la touche rentrée
console.log('vous avez trouvez une lettre');
array = [e.key];
array[i] = tab[i];
console.log(array);
} else {
console.log('vous n\'avez pas trouvez la bonne lettre');
chance--;
console.log(chance);
}
console.log(e.key);*/
