framework-fed
=============

Framework FED: v4.2

Mais informações sobre ele em: www.webstandards.blog.br e www.frontenddevelopment.com.br.

Resumo: SCSS (Compass) + Scripts locais + Responsive.

Suporte até o IE8.

(?) - opcional

<pre>
css
  fonts(?)
imagens
js
  libs
    jquery-migrate.js
    jquery.js
    modernizr-custom.js
    selectivizr.js
    swfobject.js(?)
  main.js
sass
  _elementos.scss
  _fontes.scss
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
estrutura.txt
form.html
humans.txt
index.html
</pre>


* Ajustes

1. Substuição de classes para mixin no _elementos.scss

Motivo: As classes não são possíveis estender (@extend) dentro dos media query.


/* ------- MIXINS ------- */

@mixin txthide { ...

@mixin rp($width, $height, $image, $display: null, $rpl: null) { ...

@mixin wrap { ...

@mixin transition { ...

@mixin cf { ...

@mixin dibc { ...
@mixin dibi { ...
