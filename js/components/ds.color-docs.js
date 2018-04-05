var $ = require('jquery');

;$(function() {

  function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
  }

  var $swatchItem = $('.docs__attr-list__swatch')

  $swatchItem.each(function(index) {

    var $self = $(this)
    var swatchValue = $self.css('backgroundColor');
    var $component = $self.closest('.docs__attr-list__item');
    var $componentAttrList = $component.find('.docs__attr-list__attr');

    var newHTML = '<li class="docs__attr-list__attr-item"><code>' + hexc(swatchValue)  + '</code></li>'

    $componentAttrList.append(newHTML);

  });


});

console.log('ColorDocs loaded, its JS is NOT to be used for Production, demo purposes only');
