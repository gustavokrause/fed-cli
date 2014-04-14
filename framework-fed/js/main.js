/*
	--------------
	FUNCOES EXTERNAS
	--------------
*/


// abrePopup('#sua-popup');
function abrePopup(elemento) {
	$.magnificPopup.open({
			items: {
				src: elemento
			},
			tClose: 'Fechar Popup',
			closeMarkup: '<button title="%title%" class="mfp-close">fechar</button>',
			midClick: true,
			type: 'inline'
	});
}

	// abre popups a partir do rel=subsection e href
	$('[rel="subsection"]').on('click', function () {
		abrePopup($(this).attr('href'));
		return false;
	});


$(document).ready(function(){


/*
	--------------
	DEFINICOES GERAIS
	--------------
*/



});


$(window).load(function(){

	// monta galeria apos carregar a pagina
	$('ul.galeria').bxSlider();

});