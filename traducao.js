let idiomaAtual = 'it'; // idioma atual (italiano ou português)
let traducoesCache = null; // cache das traduções

async function carregarTraducoes() {
	if (traducoesCache) return traducoesCache; // usa cache se já carregou antes
	const resposta = await fetch('translations.json'); // busca o arquivo de traduções
	traducoesCache = await resposta.json();
	return traducoesCache;
}

function aplicarTraducoes(traducoes) {
	document.querySelector('header h1').textContent = traducoes['header.title'];
	const navLinks = document.querySelectorAll('nav a');
	navLinks[0].textContent = traducoes['nav.storia'];
	navLinks[1].textContent = traducoes['nav.vini'];
	navLinks[2].textContent = traducoes['nav.visite'];
	navLinks[3].textContent = traducoes['nav.contatto'];
	document.querySelector('#hero h2').textContent = traducoes['hero.h2'];
	document.querySelector('#hero p').textContent = traducoes['hero.p'];
	document.querySelector('#historia h2').textContent = traducoes['historia.h2'];
	document.querySelectorAll('#historia p')[0].textContent = traducoes['historia.p1'];
	document.querySelector('#vinhos h2').textContent = traducoes['vinhos.h2'];
	document.querySelectorAll('.vinho-content h3')[0].textContent = traducoes['vinho1.title'];
	document.querySelectorAll('.vinho-content p')[0].textContent = traducoes['vinho1.p'];
	document.querySelector('#visitas h2').textContent = traducoes['visitas.h2'];
	document.querySelector('#visitas p').textContent = traducoes['visitas.p'];
	document.querySelector('footer p').textContent = traducoes['footer.addr'];
	document.querySelector('footer small').textContent = traducoes['footer.copy'];
}

async function alternarIdioma() {
	const dados = await carregarTraducoes(); // carrega traduções do arquivo
	idiomaAtual = idiomaAtual === 'it' ? 'pt' : 'it'; // troca o idioma
	aplicarTraducoes(dados[idiomaAtual]); // aplica as traduções na página
}

// adiciona o evento de clique ao botão de tradução
document.querySelector('.botao-traducao').addEventListener('click', alternarIdioma);
