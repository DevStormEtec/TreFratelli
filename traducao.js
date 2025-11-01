let idiomaAtual = 'it';

// prende il file delle traduzioni
async function carregarTraducoes() {
	const res = await fetch('tradutor.json');
	return res.json();
}

// applica le traduzioni sugli elementi della pagina
async function aplicarTraducoes() {
	const dados = await carregarTraducoes();
	const t = dados[idiomaAtual] || {};

	// titolo del sito
	const h1 = document.querySelector('header h1');
	if (h1) h1.textContent = t['header.title'];

	// link del menu
	const nav = document.querySelectorAll('nav a');
	if (nav.length >= 4) {
		nav[0].textContent = t['nav.storia'];
		nav[1].textContent = t['nav.vini'];
		nav[2].textContent = t['nav.visite'];
		nav[3].textContent = t['nav.contatto'];
	}

	// hero
	const heroH2 = document.querySelector('#hero h2');
	const heroP = document.querySelector('#hero p');
	if (heroH2) heroH2.textContent = t['hero.h2'];
	if (heroP) heroP.textContent = t['hero.p'];

	// storia (h2 + paragrafi)
	const histH2 = document.querySelector('#historia h2');
	if (histH2) histH2.textContent = t['historia.h2'];

	const histParas = document.querySelectorAll('#historia p');
	if (histParas[0]) histParas[0].textContent = t['historia.p1'];
	if (histParas[1]) histParas[1].textContent = t['historia.p2'];
	if (histParas[2]) histParas[2].innerHTML = t['historia.p3']; // innerhtml per mantenere <strong>
	if (histParas[3]) histParas[3].innerHTML = t['historia.p4']; 
	if (histParas[4]) histParas[4].innerHTML = t['historia.p5'];
	if (histParas[5]) histParas[5].innerHTML = t['historia.p6'];
	if (histParas[6]) histParas[6].textContent = t['historia.p7'];

	// h3 della storia
	const histH3 = document.querySelectorAll('#historia h3');
	if (histH3[0]) histH3[0].textContent = t['historia.h3_1'];
	if (histH3[1]) histH3[1].textContent = t['historia.h3_2'];

	// vini (3 elementi)
	const vinhoTitles = document.querySelectorAll('.vinho-content h3');
	const vinhoParas = document.querySelectorAll('.vinho-content p');
	if (vinhoTitles[0]) vinhoTitles[0].textContent = t['vinho1.title'];
	if (vinhoParas[0]) vinhoParas[0].textContent = t['vinho1.p'];
	if (vinhoTitles[1]) vinhoTitles[1].textContent = t['vinho2.title'];
	if (vinhoParas[1]) vinhoParas[1].textContent = t['vinho2.p'];
	if (vinhoTitles[2]) vinhoTitles[2].textContent = t['vinho3.title'];
	if (vinhoParas[2]) vinhoParas[2].textContent = t['vinho3.p'];

	// visite
	const visitasH2 = document.querySelector('#visitas h2');
	const visitasP = document.querySelector('#visitas p');
	if (visitasH2) visitasH2.textContent = t['visitas.h2'];
	if (visitasP) visitasP.textContent = t['visitas.p'];

	// footer
	const footerP = document.querySelectorAll('footer p');
	if (footerP[0]) footerP[0].textContent = t['footer.addr'];
	if (footerP[1]) footerP[1].textContent = t['footer.desc'];
	const footerSmall = document.querySelector('footer small');
	if (footerSmall) footerSmall.textContent = t['footer.copy'];

	// bottone di traduzione: title + alt immagine + etichetta visibile
	const botao = document.querySelector('.botao-traducao');
	if (botao && t['button.title']) botao.title = t['button.title'];
	const botImg = document.querySelector('.botao-traducao img');
	if (botImg && t['button.imgAlt']) botImg.alt = t['button.imgAlt'];
	const botLabel = document.querySelector('.botao-traducao .lang-label');
	if (botLabel && t['button.label']) botLabel.textContent = t['button.label'];
}

// alterna la lingua tra italiano e inglese
function alternarIdioma() {
	idiomaAtual = idiomaAtual === 'it' ? 'en' : 'it';
	aplicarTraducoes();
}

// inizializza il bottone
document.addEventListener('DOMContentLoaded', () => {
	aplicarTraducoes();
	const btn = document.querySelector('.botao-traducao');
	if (btn) btn.addEventListener('click', alternarIdioma);
});
