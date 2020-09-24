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
autre_div.appendChild(document.createTextNode('Boilerplate'));


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

let autre_li = document.createElement('li');
liste.appendChild(autre_li);

let autre_lien = document.createElement('a');
autre_lien.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md';
autre_lien.setAttribute('data-ga-category', 'Outbound Links');
autre_lien.setAttribute('date-ga-action', 'Nav click');
autre_lien.setAttribute('data-ga-label', 'Docs');
autre_lien.innerHTML = 'Docs';
autre_li.appendChild(autre_lien);

let un_autre_li = document.createElement('li');
liste.appendChild(un_autre_li);

let un_autre_lien = document.createElement('a');
un_autre_lien.href = 'https://h5bp.org';
un_autre_lien.setAttribute('data-ga-category', 'Outbound Links');
un_autre_lien.setAttribute('date-ga-action', 'Nav click');
un_autre_lien.setAttribute('data-ga-label', 'Other projects');
un_autre_lien.innerHTML = 'Other projects';
un_autre_li.appendChild(un_autre_lien);


let div_quatre = document.createElement('div');
div_quatre.classList.add('site-promo');
div.appendChild(div_quatre);

let titre = document.createElement('h1');
titre.innerHTML = 'The web’s most popular front-end template';
div_quatre.appendChild(titre);

let paragraphe = document.createElement('p');
paragraphe.classList.add('Description');
paragraphe.innerHTML = 'HTML5 Boilerplate helps you build';
let strong = document.createElement('strong');
strong.innerHTML = 'fast';
paragraphe.appendChild(strong);
paragraphe.appendChild(document.createTextNode(','));
let new_strong = document.createElement('strong');
new_strong.innerHTML = 'robust';
paragraphe.appendChild(new_strong);
paragraphe.appendChild(document.createTextNode(', and'));
let un_strong = document.createElement('strong');
un_strong.innerHTML = 'adaptable';
paragraphe.appendChild(un_strong);
paragraphe.appendChild(document.createTextNode('web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.'));
div_quatre.appendChild(paragraphe);

let div_cinq = document.createElement('div');
div_cinq.classList.add('cta-option');
div_quatre.appendChild(div_cinq);

let un_lien = document.createElement('a');
un_lien.classList.add('btn');
un_lien.classList.add('btn-dowload');
un_lien.href = 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip';
un_lien.setAttribute('data-ga-category', 'dowload');
un_lien.setAttribute('date-ga-action', 'dowload');
un_autre_lien.setAttribute('data-ga-label', 'v8.0.0');
let autre_strong = document.createElement('strong');
autre_strong.innerHTML = 'Dowload';
div_cinq.appendChild(un_lien);
un_lien.appendChild(autre_strong);





document.body.appendChild(div);
