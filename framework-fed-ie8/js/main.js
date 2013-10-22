/*
  --------------
  FUNCOES EXTERNAS
  --------------
*/

  // Executando SWFObject
  // swfobject.embedSWF("swf/meu_flash.swf", "conteudo_flash", "300", "120", "9.0.0", "swf/expressInstall.swf", {}, {wmode:"transparent"});


$(document).ready(function(){


/*
  --------------
  DEFINICOES GERAIS
  --------------
*/


  // galeria
  if($(this).has('ul.galeria').length > 0) {
    $('ul.galeria').bxSlider();
  }

});


// $(window).load(function(){
// });