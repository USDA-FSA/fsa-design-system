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

var ClipboardJS = require('../vendor/clipboard.js');

if (ClipboardJS.isSupported()) {

  $(document).ready(function(){
    $('#ds-doc-code-toggle').prop('checked', false);
  });

  $('pre.highlight')
    .append('<div class="ds-clipboard"><button class="fsa-btn fsa-btn--flat fsa-btn--small ds-clipboard__btn fsa-link--underline-none" title="Copy code to clipboard" data-behavior="copy-code"><svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg> Copy</button></div>')
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

    e.trigger.insertAdjacentHTML('afterend', '<span class="ds-clipboard__success" role="alert">Copied to Clipboard</span>');

    setTimeout(function() {
      var clipboardMsg = e.trigger.nextElementSibling;
      clipboardMsg.parentNode.removeChild(clipboardMsg);
    }, 2500);

  });
} else {
  $('#ds-doc-code-toggle').remove();
}

console.log('Clipboard Loaded, its JS is NOT to be used for Production, demo purposes only');
