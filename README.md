framework-fed
=============

### requirement

Compass - http://compass-style.org/install/


### libs

Empty.

Files
--------------

<pre>
/css
	/fonts
/images
	user.png
/js
	/libs
	main.js
/scss
	_elements.scss
	_fonts.scss
	_form.scss
	_reset.scss
	_tablet-landscape.scss
	_tablet-portrait.scss
	desktop-pages.scss
	desktop.scss
	main.scss
	print.scss
	mobile-pages.scss
	mobile.scss
	tablet-pages.scss
	tablet.scss
	pages.scss
config.rb
DOM-structure.txt
form.html
index.html
</pre>

SCSS overview
--------------

<table>
  <caption>
    SCSS files organization to CSS output.
  </caption>
  <tr>
    <td colspan="4">SCSS</td>
  </tr>
  <tr>
    <th>main.scss</th>
    <th rowspan="2">desktop.scss</th>
    <th rowspan="2">tablet.scss</th>
    <th rowspan="2">mobile.scss</th>
  </tr>
  <tr>
    <td>_fonts.scss</td>
  </tr>
  <tr>
    <td colspan="4">_elements.scss</td>
  </tr>

  <tr>
    <td>_reset.scss</td>
    <td rowspan="3">desktop-pages.scss</td>
    <td>tablet-pages.scss</td>
    <td rowspan="3">mobile-pages.scss</td>
  </tr>
  <tr>
    <td>_form.scss</td>
    <td>_tablet-portrait.scss</td>
  </tr>
  <tr>
    <td>pages.scss</td>
    <td>_tablet-landscape.scss</td>
  </tr>

  <tr>
    <td colspan="4">CSS OUTPUT</td>
  </tr>
  <tr>
    <th>main.css</th>
    <th>desktop.css</th>
    <th>tablet.css</th>
    <th>mobile.css</th>
  </tr>
  <tr>
    <td>pages.css</td>
    <td>desktop-pages.css</td>
    <td>tablet-pages.css</td>
    <td>mobile-pages.css</td>
  </tr>
</table>
