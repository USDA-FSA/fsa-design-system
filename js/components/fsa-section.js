var $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="toggle-fullscreen-components"]', function(event) {

  $('.fsa-section')    .toggleClass('fsa-section--fullscreen');
  $('.fsa-tophat')     .toggleClass('fsa-tophat--fullscreen');
  $('.fsa-header-app') .toggleClass('fsa-header-app--fullscreen');
  $('.fsa-nav-global') .toggleClass('fsa-nav-global--fullscreen');
  $('.fsa-topper')     .toggleClass('fsa-topper--fullscreen');
  $('.fsa-footer')     .toggleClass('fsa-footer--fullscreen');
  $('.fsa-screen-id')  .toggleClass('fsa-screen-id--fullscreen');

})

console.log('Section loaded, its JS is NOT to be used for Production, demo purposes only');
