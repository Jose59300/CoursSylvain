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
un_lien.setAttribute('data-ga-label', 'v8.0.0');
let autre_strong = document.createElement('strong');
autre_strong.innerHTML = 'Dowload';
div_cinq.appendChild(un_lien);
un_lien.appendChild(autre_strong);

let deux_lien = document.createElement('a');
deux_lien.classList.add('last-update');
deux_lien.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md';
deux_lien.setAttribute('data-ga-category', 'Outbound links');
deux_lien.setAttribute('date-ga-action', 'See the changelog');
deux_lien.setAttribute('data-ga-label', 'v8.0.0');
deux_lien.innerHTML = 'See the changelog';
div_cinq.appendChild(deux_lien);

let div_six = document.createElement('div');
div_six.classList.add('site-section');

let div_sept = document.createElement('div');
div_sept.classList.add('container');
div_six.appendChild(div_sept);

let title = document.createElement('h2');
title.innerHTML = 'Save time. Create with confidence.';
div_sept.appendChild(title);

let div_huit = document.createElement('div');
div_huit.classList.add('grid');
div_sept.appendChild(div_huit);

let div_neuf = document.createElement('div');
div_neuf.classList.add('grid-cell');
div_huit.appendChild(div_neuf);

let title_un = document.createElement('h3');
let span_un = document.createElement('span');
div_neuf.appendChild(title_un);
span_un.classList.add('star');
span_un.innerHTML = '*';
title_un.appendChild(span_un);
title_un.innerHTML = 'Analytics, icons, and more';

let paragraphe_un = document.createElement('p');
paragraphe_un.innerHTML = 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.';
div_neuf.appendChild(paragraphe_un);

let div_dix = document.createElement('div');
div_dix.classList.add('grid-cell');
div_huit.appendChild(div_dix);

let title_deux = document.createElement('h3');
let span_deux = document.createElement('span');
div_dix.appendChild(title_deux);
span_deux.classList.add('star');
span_deux.innerHTML = '*';
title_deux.appendChild(span_deux);
title_deux.innerHTML = 'Normalize.css and helpers';

let paragraphe_deux = document.createElement('p');
paragraphe_deux.innerHTML = 'Includes';
div_dix.appendChild(paragraphe_deux);

let a_deux = document.createElement('a')
a_deux.href = 'https://necolas.github.io/normalize.css/';
a_deux.innerHTML = 'Normalize.css';
paragraphe_deux.appendChild(a_deux);

//paragraphe_deux.innerHTML = '— a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.';

let div_onze = document.createElement('div');
div_onze.classList.add('grid-cell');
div_huit.appendChild(div_onze);

let title_trois = document.createElement('h3');
let span_trois = document.createElement('span');
div_onze.appendChild(title_trois);
span_trois.classList.add('star');
span_trois.innerHTML = '*';
title_trois.appendChild(span_trois);
title_trois.innerHTML = 'modernizr';

let paragraphe_trois = document.createElement('p');
paragraphe_trois.innerHTML = 'Get the latest minified versions of Modernizr:';
div_onze.appendChild(paragraphe_trois);

let a_trois = document.createElement('a')
a_trois.href = 'https://modernizr.com/';
a_trois.innerHTML = 'modernizr';
paragraphe_trois.appendChild(a_trois);

//paragraphe_trois.innerHTML = 'feature detection library, complete with a custom build configuration';

let div_douze = document.createElement('div');
div_douze.classList.add('grid-cell');
div_huit.appendChild(div_douze);

let title_quatre = document.createElement('h3');
let span_quatre = document.createElement('span');
div_douze.appendChild(title_quatre);
span_quatre.classList.add('star');
span_quatre.innerHTML = '*';
title_quatre.appendChild(span_trois);
title_quatre.innerHTML = 'High performance';

let paragraphe_quatre = document.createElement('p');
paragraphe_quatre.innerHTML = 'Apache settings to help you deliver excellent site performance. We independently maintain';
div_douze.appendChild(paragraphe_quatre);

let a_quatre = document.createElement('a')
a_quatre.href = 'https://github.com/h5bp/server-configs';
a_quatre.innerHTML = 'server configs';
paragraphe_quatre.appendChild(a_quatre);

//paragraphe_trois.innerHTML = 'for multiple platforms.';

let div_treize = document.createElement('div');
div_treize.classList.add('site_section');
div_treize.classList.add('site-section-video');

let title_cinq = document.createElement('h2');
title_cinq.innerHTML = 'Introduction to V8';
div_treize.appendChild(title_cinq);

let div_quatorze = document.createElement('div');
div_quatorze.classList.add('content');
div_treize.appendChild(div_quatorze);

let paragraphe_cinq = document.createElement('p');
paragraphe_cinq.classList.add('new');
paragraphe_cinq.innerHTML = "What's new?";
div_quatorze.appendChild(paragraphe_cinq);

let liste_title = document.createElement('ul');
liste_title.classList.add('new');
div_quatorze.appendChild(liste_title);

let liste_un = document.createElement('li');
liste_un.innerHTML = 'Added a sample package.json with basic Parcel commands to jump start your app development';
liste_title.appendChild(liste_un);

let liste_deux = document.createElement('li');
liste_deux.innerHTML = 'Added sample Open Graph metadata';
liste_title.appendChild(liste_deux);

let liste_trois = document.createElement('li');
liste_trois.innerHTML = 'Updated Modernizr and main.css';
liste_title.appendChild(liste_trois);

let liste_quatre = document.createElement('li');
liste_quatre.innerHTML = 'Removed jQuery';
liste_title.appendChild(liste_quatre);

let liste_cinq = document.createElement('li');
liste_cinq.innerHTML = 'Set anonymizeIp to true in Google Analytics snippet';
liste_title.appendChild(liste_cinq);

let liste_six = document.createElement('li');
liste_six.innerHTML = 'Removed Browser Upgrade Prompt';
liste_title.appendChild(liste_six);

let liste_sept = document.createElement('li');
liste_sept.innerHTML = "That's just the start of all the goodness.";
liste_title.appendChild(liste_sept);

let a_cinq = document.createElement('a');
a_cinq.href = 'https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md';
a_cinq.innerHTML = 'Check out the Changelog for all the details.';
liste_sept.appendChild(a_cinq);

let div_quinze = document.createElement('div');
div_quinze.classList.add('site-section');

let title_six = document.createElement('h2');
title_six.innerHTML = 'Who uses HTML5 Boilerplate?';
div_quinze.appendChild(title_six);

let paragraphe_six = document.createElement('p');
paragraphe_six.classList.add('in-the-wild');
div_quinze.appendChild(paragraphe_six);

let a_six = document.createElement('a');
a_six.href = 'https://www.microsoft.com/surface/';
a_six.innerHTML = 'Microsoft';
paragraphe_six.appendChild(a_six);

let a_sept = document.createElement('a');
a_sept.href = 'https://data.nasa.gov/';
a_sept.innerHTML = 'Nasa';
paragraphe_six.appendChild(a_sept);

let a_huit = document.createElement('a');
a_huit.href = 'http://www.nikeskateboarding.com/';
a_huit.innerHTML = 'Nike';
paragraphe_six.appendChild(a_huit);

let a_neuf = document.createElement('a');
a_neuf.href = 'https://www.barackobama.com/';
a_neuf.innerHTML = 'Barack Obama';
paragraphe_six.appendChild(a_neuf);

let a_dix = document.createElement('a');
a_dix.href = 'https://www.itv.com/news/';
a_dix.innerHTML = 'ITV News';
paragraphe_six.appendChild(a_dix);

let a_onze = document.createElement('a');
a_onze.href = 'https://creativecommons.org/';
a_onze.innerHTML = 'Creative Commons';
paragraphe_six.appendChild(a_onze);

let a_douze = document.createElement('a');
a_douze.href = 'https://auspost.com.au/';
a_douze.innerHTML = 'Australia Post';
paragraphe_six.appendChild(a_douze);

//paragraphe_six.innerHTML = ', and';

let a_treize = document.createElement('a');
a_treize.href = 'https://github.com/h5bp/html5-boilerplate/wiki/sites';
a_treize.innerHTML = 'Many more';
paragraphe_six.appendChild(a_treize);

let div_seize = document.createElement('div');
div_seize.classList.add('cta-option');
div_quinze.appendChild(div_seize);


let a_quatorze = document.createElement('a');
a_quatorze.classList.add('btn');
a_quatorze.classList.add('btn-dowload');
a_quatorze.href = 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip';
a_quatorze.setAttribute('data-ga-category', 'dowload');
a_quatorze.setAttribute('date-ga-action', 'dowload');
a_quatorze.setAttribute('data-ga-label', 'v8.0.0');
let deux_strong = document.createElement('strong');
deux_strong.innerHTML = 'Dowload';
div_seize.appendChild(a_quatorze);
a_quatorze.appendChild(deux_strong);

let div_one = document.createElement('div')
div_one.classList.add('aside');

let div_two = document.createElement('div');
div_two.classList.add('container');
div_one.appendChild(div_two);

let liste_title_un = document.createElement('ul');
liste_title_un.classList.add('inline-block-list');
div_two.appendChild(liste_title_un);

let liste_huit = document.createElement('li');
liste_huit.innerHTML = 'Report issues';

let a_quinze = document.createElement('a')
a_quinze.href = 'https://github.com/h5bp/html5-boilerplate/issues';
a_quinze.setAttribute('data-ga-category', 'Outbound links');
a_quinze.setAttribute('date-ga-action', 'footer links');
a_quinze.setAttribute('data-ga-label', 'Report issues');
let span_cinq = document.createElement('span');
span_cinq.classList.add('Icon');
span_cinq.classList.add('Icon--github');
liste_huit.appendChild(a_quinze);
a_quinze.appendChild(span_cinq);
liste_title_un.appendChild(liste_huit);

let liste_neuf = document.createElement('li');
liste_neuf.innerHTML = 'Help on Stack Overflow';

let a_seize = document.createElement('a')
a_seize.href = 'https://stackoverflow.com/questions/tagged/html5boilerplate';
a_seize.setAttribute('data-ga-category', 'Outbound links');
a_seize.setAttribute('date-ga-action', 'footer links');
a_seize.setAttribute('data-ga-label', 'Help on Stack Overflow');
let span_six = document.createElement('span');
span_six.classList.add('Icon');
span_six.classList.add('Icon--Stackoverflow');
liste_neuf.appendChild(a_seize);
a_seize.appendChild(span_six);
liste_title_un.appendChild(liste_neuf);

let liste_dix = document.createElement('li');
liste_dix.innerHTML = 'View the showcase';

let a_one = document.createElement('a')
a_one.href = 'https://h5bp.net';
a_one.setAttribute('data-ga-category', 'Outbound links');
a_one.setAttribute('date-ga-action', 'footer links');
a_one.setAttribute('data-ga-label', 'View the showcase');
let span_sept = document.createElement('span');
span_sept.classList.add('Icon');
span_sept.classList.add('Icon--html5');
liste_dix.appendChild(a_one);
a_one.appendChild(span_sept);
liste_title_un.appendChild(liste_dix);

let footer = document.createElement('footer');
footer.classList.add('site-footer');

let iframe = document.createElement('iframe');
iframe.classList.add('twitter-share-button');
iframe.classList.add('twitter-share-button-rendered');
iframe.classList.add('twitter-tweet-button');
iframe.setAttribute('scrolling', 'no');
iframe.setAttribute('allowtransparecy', 'true');
iframe.setAttribute('allowFullscreen', 'true');
iframe.setAttribute('style', 'position: static', 'visibility','widht: 76px', 'height: 28px',);
iframe.setAttribute('title', 'twitter tweet button');
iframe.setAttribute('src', 'https://platform.twitter.com/widgets/tweet_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-1&lang=en&original_referer=https%3A%2F%2Fhtml5boilerplate.com%2F&size=l&text=HTML5%20Boilerplate%3A%20The%20rock-solid%20professional%20front-end%20template&time=1601825571598&type=share&url=https%3A%2F%2Fhtml5boilerplate.com%2F&via=h5bp');
iframe.setAttribute('url', 'https://html5boilerplate.com/');
footer.appendChild(iframe);

let iframe_un = document.createElement('iframe');
iframe_un.classList.add('twitter-follow-button');
iframe_un.classList.add('twitter-follow-button-rendered');
iframe_un.setAttribute('scrolling', 'no');
iframe_un.setAttribute('allowtransparecy', 'true');
iframe_un.setAttribute('allowFullscreen', 'true');
iframe_un.setAttribute('style', 'position: static', 'visibility','widht: 125px', 'height: 28px',);
iframe_un.setAttribute('title', 'twitter follow button');
iframe_un.setAttribute('src', 'https://platform.twitter.com/widgets/follow_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=h5bp&show_count=false&show_screen_name=true&size=l&time=1601825571586');
iframe_un.setAttribute('screen_name', 'h5bp');
iframe_un.setAttribute('frameborder', '0');
footer.appendChild(iframe_un);

let paragraphe_sept = document.createElement('p');
paragraphe_sept.innerHTML = 'A project form';
let a_two = document.createElement('a');
a_two.href = 'https://github.com/h5bp';
a_two.innerHTML = 'h5bp';
footer.appendChild(paragraphe_sept);
paragraphe_sept.appendChild(a_two);


document.body.appendChild(div);
document.body.appendChild(div_six);
document.body.appendChild(div_treize);
document.body.appendChild(div_quinze);
document.body.appendChild(div_one);
document.body.appendChild(footer);
