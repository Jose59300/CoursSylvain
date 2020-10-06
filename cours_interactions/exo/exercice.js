// Exercice carré collision
var x = 0;
var y = 0;

document.addEventListener('keydown', function(e){
  if(e.key == 'ArrowRight'){
    x++;
  }
  if(e.key == 'ArrowLeft') {
    x--;
  }
  if(e.key == 'ArrowUp') {
    y--;
  }
  if(e.key == 'ArrowDown'){
    y++;
  }
  if(x+50 >= 200 && y+50 >= 150){
    document.querySelector('#message').textContent = 'Collision';
  }

    document.querySelector('.square').style.left = x + 'px';
    document.querySelector('.square').style.top = y + 'px';
    document.querySelector('#one').textContent = x + 'px';
    document.querySelector('#two').textContent = y + 'px';
  console.log(e.key);
});
