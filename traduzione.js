let linguaAttuale = 'it';

// prende il file delle traduzioni
async function caricaTraduzioni() {
    const res = await fetch('traduzioni.json');
    return res.json();
}

// applica le traduzioni sugli elementi della pagina
async function applicaTraduzioni() {
    const dati = await caricaTraduzioni();
    const t = dati[linguaAttuale] || {};

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

    // vini (3 elementi) - selettori e chiavi rinominati in italiano
    const vinoTitles = document.querySelectorAll('.vino-contenuto h3');
    const vinoParas = document.querySelectorAll('.vino-contenuto p');
    if (vinoTitles[0]) vinoTitles[0].textContent = t['vino1.titolo'];
    if (vinoParas[0]) vinoParas[0].textContent = t['vino1.p'];
    if (vinoTitles[1]) vinoTitles[1].textContent = t['vino2.titolo'];
    if (vinoParas[1]) vinoParas[1].textContent = t['vino2.p'];
    if (vinoTitles[2]) vinoTitles[2].textContent = t['vino3.titolo'];
    if (vinoParas[2]) vinoParas[2].textContent = t['vino3.p'];

    // h2 della sezione vini (chiave italiana)
    const viniH2 = document.querySelector('#vini h2');
    if (viniH2) viniH2.textContent = t['vini.h2'];

    // visite (id e chiavi italiane)
    const visiteH2 = document.querySelector('#visite h2');
    const visiteP = document.querySelector('#visite p');
    if (visiteH2) visiteH2.textContent = t['visite.h2'];
    if (visiteP) visiteP.textContent = t['visite.p'];

    // bottone prenota
    const prenotaBtn = document.querySelector('#visite a');
    if (prenotaBtn) prenotaBtn.textContent = t['visite.bottone'];

    // sezione contatto
    const contattoH2 = document.querySelector('#contatto h2');
    const contattoP = document.querySelector('#contatto p');
    if (contattoH2) contattoH2.textContent = t['contatto.h2'];
    if (contattoP) {
        const emailLink = contattoP.querySelector('a');
        contattoP.innerHTML = t['contatto.p'] + 
            `<a href="mailto:${t['contatto.email']}">${t['contatto.email']}</a> ` +
            t['contatto.telefono'];
    }

    // footer
    const footerP = document.querySelectorAll('footer p');
    if (footerP[0]) footerP[0].textContent = t['footer.addr'];
    if (footerP[1]) footerP[1].textContent = t['footer.desc'];
    const footerSmall = document.querySelector('footer small');
    if (footerSmall) footerSmall.textContent = t['footer.copy'];

    // bottone di traduzione: title + alt immagine + etichetta visibile
    const bottone = document.querySelector('.bottone-traduzione');
    if (bottone && t['button.title']) bottone.title = t['button.title'];
    const botImg = document.querySelector('.bottone-traduzione img');
    if (botImg && t['button.imgAlt']) botImg.alt = t['button.imgAlt'];
    const botLabel = document.querySelector('.bottone-traduzione .etichetta-lingua');
    if (botLabel && t['button.label']) botLabel.textContent = t['button.label'];
}

// alterna la lingua tra italiano e inglese
function cambiaLingua() {
    linguaAttuale = linguaAttuale === 'it' ? 'en' : 'it';
    applicaTraduzioni();
}

// inizializza il bottone
document.addEventListener('DOMContentLoaded', () => {
    applicaTraduzioni();
    const btn = document.querySelector('.bottone-traduzione');
    if (btn) btn.addEventListener('click', cambiaLingua);
});