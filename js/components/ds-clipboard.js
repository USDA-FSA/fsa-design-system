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

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$(document).ready(function(){
  $('#ds-doc-code-toggle').prop('checked', false);
});

var ClipboardJS = require('../vendor/clipboard.js');

$('pre.highlight')
  .append('<div class="ds-clipboard"><button class="fsa-btn fsa-btn--secondary fsa-btn--small ds-clipboard__btn" title="Copy code to clipboard" data-behavior="copy-code">Copy</button></div>')
;

var clipboardardee = new ClipboardJS('[data-behavior~="copy-code"]', {
  target: function(trigger) {
    return trigger.parentElement.previousElementSibling;
  }
});


clipboardardee.on('success', function(e) {

  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);

  e.clearSelection();
  e.trigger.blur();

});


console.log('Clipboard Loaded, its JS is NOT to be used for Production, demo purposes only');
