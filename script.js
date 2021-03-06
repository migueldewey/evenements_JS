// Fonctionnalité 1: Footer
// lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), afficher le mot "clique" en console.
let footer = document.getElementsByTagName('footer');
i = 1;
footer[0].addEventListener("click", function(){
	console.log("clic numéro " + i);
	i ++;})

// Fonctionnalité 2 : Menu Hamburger
/*Tu vas faire que si quelqu'un clique sur ce bouton, 
l'élément HTML portant l'Id navbarHeader perde sa classe collapse.
Une fois que ça, ça marche, fait que si on clique à nouveau dessus,
la classe collapse soit rajoutée à nouveau à l'élément portant 
l'Id navbarHeader */
let headerEl = document.getElementById('navbarHeader');
let hamburger = document.getElementsByClassName('navbar-toggler')[0];
hamburger.addEventListener("click", function () {
	headerEl.classList.toggle("collapse");
});

// Fonctionnalité 3 : Le texte en rouge
/* si on clique sur le bouton "Edit" de la première card, 
le texte de la card va se mettre en rouge de façon irréversible 
(sauf si on recharge la page).*/
let editButton1 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[0];
editButton1.addEventListener("click",function () {
	let text1 = document.getElementsByClassName('card-text')[0];
	text1.style.color = "red";
});

// Fonctionnalité 4 : 
/* si on clique sur le bouton "Edit" de la deuxième card, 
le texte de la card va se mettre en vert. Si on re-clique dessus, 
il redevient comme avant !*/
let editButton2 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1];
editButton2.addEventListener("click",function () {
	let text2 = document.getElementsByClassName('card-text')[1];
	if (text2.style.color === "green") { text2.style = "";}
	else { text2.style.color = "green";}
});

// Fonctionnalité 5 : Nucleaire 
/* si un utilisateur double clique sur la navbar en haut, 
tout Bootstrap disparaît et la page s'affiche comme si on 
avait oublié de mettre le CDN qui la relie au fichier CSS. 
Si possible, rends cette fonctionnalité réversible 
(un nouveau double-clic fait tout revenir à la normale).*/
let linkEl = document.getElementsByTagName('link')[0];
let header = document.getElementsByTagName('header')[0];
header.addEventListener("dblclick",function () {
	if (linkEl.disabled) { linkEl.disabled = false;} 
	else {linkEl.disabled = true;}
})

// Fonctionnalité 6 : Carte miniature
/* si un utilisateur passe sa souris sur le bouton "View" 
d'une card (n'importe laquelle), celle-ci va se réduire. 
Cela veut dire que le texte disparaît, l'image n'apparaîtra 
qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" 
restent visibles. Cette fonction sera réversible : 
s'il repasse sa souris, la card redevient normale !*/
let cardsEL = document.getElementsByClassName('card');
for (let card of cardsEL) {
	card.addEventListener("mouseover",function () {
	if (card.childNodes[3].childNodes[1].style.display !== "none") {
		card.childNodes[1].style = "width: 20%;"; //Image
		card.childNodes[3].childNodes[1].style.display = "none"; //Texte
	} 
	else {
		card.childNodes[1].style = "width: 100%;"; //Image
		card.childNodes[3].childNodes[1].style.display = "";
	}
	})
}

//Fonctionnalité 7 : Déplacer les cartes
/*si un utilisateur clique sur le bouton gris ==>, 
la dernière card (en bas à droite) va passer en premier 
(en haut à gauche). On va pouvoir faire tourner les cards !*/
let rowEl = document.getElementsByClassName('row')[1];
let buttonRigth = document.getElementsByClassName('btn btn-secondary my-2')[0];
function deplace(event) {
	event.preventDefault();
	rowEl.insertBefore(rowEl.lastElementChild, rowEl.firstElementChild);
}
buttonRigth.addEventListener("click",deplace);

// Fonctionnalité 8 : Déplacer dans l'autre sens
/*on va faire tourner les card dans l'autre sens aussi. 
Donc si un utilisateur clique sur le bouton bleu <==, la 
première card devra passer en dernier.*/
let buttonLeft = document.getElementsByClassName('btn btn-primary my-2')[0];
function deplaceReverse(event) {
 	event.preventDefault();
 	rowEl.insertBefore(rowEl.firstElementChild, rowEl.lastElementChild.nextSibling);
 } 
 buttonLeft.addEventListener("click",deplaceReverse);

 // Fonctionnalité 9 : Columnes avec keypress
/* 	•	La fonctionnalité se déclenchera si le logo de la page (JS & Events) 
	est sélectionné et qu'on appuie sur une touche spécifique du clavier.
	•	Si l'utilisateur presse la touche "a", l'ensemble de la page 
	va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
	•	Si l'utilisateur presse la touche "y", l'ensemble de la page 
	va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
	•	Si l'utilisateur presse la touche "p", l'ensemble de la page 
	va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
	•	Si l'utilisateur presse la touche "b", tout redevient normal. */
let logoTextEl = document.getElementsByTagName('strong')[0];
function columns() {
	document.addEventListener("keypress",key);
}
function key(event) {
	let body = document.body;
	body.className = "";
	if (event.key === 'a') {body.classList.add("col-4");} 
	else if (event.key === 'y') {body.classList.add("offset-md-4","col-4");}
	else if (event.key === 'p') {body.classList.add("offset-md-8","col-4");}
	else if (event.key === 'b'){}
}

logoTextEl.addEventListener("click", columns);