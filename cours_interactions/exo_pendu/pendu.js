//identifier quand l'utilisateur tape sur le  clavier
//Savoir quel touche il a tapé
//regarder si les lettres entrés sont dans le mot
//si lettre trouver, afficher, sinon retirer un essai

let mots = 'aleatoire';
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
