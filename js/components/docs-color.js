// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var $ = window.jQuery = require('jquery');

function rgba2hex( color_value ) {
	if ( ! color_value ) return false;
	var parts = color_value.toLowerCase().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),
	    length = color_value.indexOf('rgba') ? 3 : 2; // Fix for alpha values
	delete(parts[0]);
	for ( var i = 1; i <= length; i++ ) {
		parts[i] = parseInt( parts[i] ).toString(16);
		if ( parts[i].length == 1 ) parts[i] = '0' + parts[i];
	}
	return '#' + parts.join('').toUpperCase(); // #F7F7F7
}

var $swatchItem = $('.docs__attr-list__swatch:not(.size-swatch), .docs__swatch-list__item');

if ($swatchItem.length) { // only run if at least one instance
  $swatchItem.each(function(index) {

    var $self = $(this)
    var swatchValue = $self.css('backgroundColor');

    if ($self.is('.docs__attr-list__swatch')) {

      var $component = $self.closest('.docs__attr-list__item');
      var $target = $component.find('.docs__attr-list__attr');

      $target.append('<li class="docs__attr-list__attr-item"><code>' + rgba2hex(swatchValue)  + '</code></li>');

    }
    else if ($self.is('.docs__swatch-list__item')) {

      var $component = $self;
      var $target = $component.find('code');

      $target.append('<span class="docs__swatch-list__value">' + rgba2hex(swatchValue)  + '</span>');

    }

  });
}

console.log('DocsColor loaded, its JS is NOT to be used for Production, demo purposes only');
