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
	card.childNodes[1].style.w = "none";
	})
}
console.log(cardsEL)
