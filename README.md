framework-fed
=============

**info:** Para montar popups esta disponível o script "abrepopup", no momento estou testando o magnific-popup (http://dimsemenov.com/plugins/magnific-popup/) que possívelmente irei mudar e incluir os scripts no framework.


Framework FED: v4.5 e v5
--------------

**v4.5 - *suporte ao IE8***

- jquery v1
- jquery-migrate
- innershiv (p/ abrepopup)
- modernizr

**v5 - *sem suporte ao IE8***

- jquery v2
- removido os arquivos de suporte ao IE8


Mais informações sobre ele em: www.webstandards.blog.br e www.frontenddevelopment.com.br.

Resumo: SCSS (Compass) + Scripts locais + Responsive.


(?) - opcional

<pre>
css
  fonts(?)
imagens
  imagem-usuario.png
js
  libs
    bxslider
      images
        bx_loader.gif
        controls.png
      bxslider.js
      bxslider.css
    abrepopups.js
    jquery.js
    swfobject.js (?)
      // arquivos v4.5
        jquery-migrate.js
        modernizr-custom.js
        selectivizr.js
        innershiv.js
  main.js
scss
  _elementos.scss
  _fontes.scss(?)
  _form.scss
  _reset.scss
  desktop-templates.scss
  desktop.scss
  geral.scss
  impressao.scss
  mobile-templates.scss
  mobile.scss
  tablet-templates.scss
  tablet.scss
  templates.scss
swf(?)
  expressInstall.swf(?)
config.rb
form.html
galeria.html
index.html
estrutura.txt
humans.txt
</pre>


Ajustes
--------------

1. organização dos media query para tablet
2. variável $degub (mostra o media query)
3. ajuste mixin de image replacement
4. add do mixin grad (contribuição do Yeshua)


**(histórico)**

1. remoção selectivizr (não será necessário para IE8).
2. Substuição de classes para mixin no _elementos.scss

Motivo: As classes não são possíveis estender (@extend) dentro dos media query.


MIXINS
--------------
veja no arquivo: _elementos.scss

<pre>
/* ------- MIXINS ------- */

@mixin th { ...

@mixin rp($image, $rpl:false, $width:false, $height:false, $display:false) {

@mixin wrap { ...

@mixin transition { ...

@mixin cf { ...

@mixin dibc { ...
@mixin dibi { ...

@mixin grad($color1,$color2) {
</pre>