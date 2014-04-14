framework-fed
=============

Framework FED: v5.2
--------------

<pre>
css
	fonts
imagens
	imagem-usuario.png
js
	libs
		bxslider
			...
		magnific-popup
			...
		jquery.js
	main.js
scss
	_elementos.scss
	_fontes.scss
	_form.scss
	_reset.scss
	_tablet-landscape.scss
	_tablet-portrait.scss
	desktop-templates.scss
	desktop.scss
	geral.scss
	impressao.scss
	mobile-templates.scss
	mobile.scss
	tablet-templates.scss
	tablet.scss
	templates.scss
config.rb
estrutura.txt
form.html
galeria.html
index.html
</pre>

<table>
	<caption>
		Organização Framework
	</caption>
	<tr>
		<td colspan="4">SCSS</td>
	</tr>
	<tr>
		<th>geral.scss</th>
		<th rowspan="2">desktop.scss</th>
		<th rowspan="2">tablet.scss</th>
		<th rowspan="2">mobile.scss</th>
	</tr>
	<tr>
		<td>_fontes.scss</td>
	</tr>
	<tr>
		<td colspan="4">_elementos.scss</td>
	</tr>
	<tr>
		<td>bxslider.scss</td>
		<td rowspan="5">desktop-templates.scss</td>
		<td>tablet-templates.scss</td>
		<td rowspan="5">mobile-templates.scss</td>
	</tr>
	<tr>
		<td>magnific-popup.scss</td>
		<td>_tablet-portrait.scss</td>
	</tr>
	<tr>
		<td>_reset.scss</td>
		<td rowspan="3">_tablet-landscape.scss</td>
	</tr>
	<tr>
		<td>_form.scss</td>
	</tr>
	<tr>
		<td>templates.scss</td>
	</tr>
	<tr>
		<td colspan="4">OUTPUT CSS</td>
	</tr>
	<tr>
		<th>geral.css</th>
		<th>desktop.css</th>
		<th>tablet.css</th>
		<th>mobile.css</th>
	</tr>
	<tr>
		<td>templates.css</td>
		<td>desktop-templates.scss</td>
		<td>tablet-templates.scss</td>
		<td>mobile-templates.scss</td>
	</tr>
</table>
