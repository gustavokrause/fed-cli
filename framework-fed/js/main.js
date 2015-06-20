/*
	--------------
	BEHAVIOURS
	--------------
*/


// openPopup('#your-popup');
function openPopup(element) {
	$.magnificPopup.open({
			items: {
				src: element
			},
			tClose: 'Close Popup',
			closeMarkup: '<button title="%title%" class="mfp-close">close</button>',
			midClick: true,
			type: 'inline'
	});
}

	// open popups from rel=subsection and href
	$('[rel="subsection"]').on('click', function () {
		openPopup($(this).attr('href'));
		return false;
	});


$(document).ready(function(){


/*
	--------------
	MAIN
	--------------
*/

	$('ul.gallery').bxSlider();

});
