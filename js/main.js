/*
  --------------
  FUNCOES EXTERNAS
  --------------
*/

  // Executando SWFObject
  // swfobject.embedSWF("swf/meu_flash.swf", "conteudo_flash", "300", "120", "9.0.0", "swf/expressInstall.swf", {}, {wmode:"transparent"});
  
  // Aviso Chrome Frame
  if ( $.browser.msie ) {
    if($.browser.version<8){window.attachEvent('onload',function(){CFInstall.check({preventPrompt:true,onmissing:abreChromeFrame})});function abreChromeFrame(){var aviso="";aviso+='<div class="chrome_frame">';aviso+='  <div class="limites">';aviso+='    <h3>Torne seu navegador mais potente, instale o Google Chrome Frame</h3>';aviso+='    <p>O Google Chrome Frame é um plug-in gratuito para o Internet Explorer. Alguns aplicativos avançados da web utilizam o Google Chrome Frame para oferecer recursos adicionais e melhorar o desempenho.</p>';aviso+='    <a href="http://www.google.com/chromeframe?hl=pt-BR&quickenable=true" title="Visitar o site do Google Chrome Frame para saber mais informações" rel="external">Mais informações</a>';aviso+='    <div class="instalar">';aviso+='      <a class="botao_instalar" href="http://www.google.com/chromeframe/eula.html?quickenable=true" title="Instalar o Chrome Frame em seu navegador" rel="external">Instalar</a>';aviso+='      <p>Internet Explorer 6, 7, 8 e 9 no Windows 7/Vista/XP SP2 ou superior</p>';aviso+='    </div>';aviso+='    <a class="fechar" href="#" title="Fechar este aviso">Fechar</a>';aviso+='  </div>';aviso+='</div>';$('body').prepend(aviso);$('.chrome_frame').delay(1500).slideDown();$('.chrome_frame a.fechar').click(function(){$('.chrome_frame').slideUp()});$('.chrome_frame').find('a[rel="external"]').attr('target','_blank')}}
  }

$(document).ready(function(){


/*
  --------------
  DEFINICOES GERAIS
  --------------
*/




});