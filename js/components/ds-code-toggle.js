global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$('body').on('change', '[data-behavior~="toggle-code-display"]', function(event) {
  $('body').toggleClass('ds-show-da-code');
})

