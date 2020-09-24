let div = document.createElement('div');
div.classList.add('container');

let une_div = document.createElement('div');
une_div.classList.add('site-header');
une_div.classList.add('clearfix');
div.appendChild(une_div);

let autre_div = document.createElement('div');
autre_div.classList.add('site-logo');
autre_div.innerHTML = 'HTML5';
let span = document.createElement('span')
span.classList.add('star')
span.innerHTML = '*';
autre_div.appendChild(span);
une_div.appendChild(autre_div);


let liste = document.createElement('ul')
liste.classList.add('site-nav');
liste.classList.add('inline-bloch-list');
une_div.appendChild(liste);

let un_li = document.createElement('li');
liste.appendChild(un_li);

let lien = document.createElement('a');
lien.href = 'https://github.com/h5bp/html5-boilerplate';
lien.setAttribute('data-ga-category', 'Outbound Links');
lien.setAttribute('date-ga-action', 'Nav click');
lien.setAttribute('data-ga-label', 'Source code');
lien.innerHTML = 'Source code';
un_li.appendChild(lien);

document.body.appendChild(div);
