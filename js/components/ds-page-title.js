// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var Helper = require('../utilities/helper');

// ds-page-title

var pageTitle__elements = document.querySelectorAll('.ds-page-title');

function pageTitle__setStyle() {

  // iterate thru each .ds-page-title on page
  Helper.forEach(pageTitle__elements, function(index, value) {

    var _el = value;

    var _viewportOffset = _el.getBoundingClientRect();
    var _pageTitlePosition = _viewportOffset.top;

    if (_pageTitlePosition == 0) {

      if(!_el.classList.contains('ds-page-title--stuck')){
        _el.classList.add('ds-page-title--stuck');
      }

    } else {

      if(_el.classList.contains('ds-page-title--stuck')){
        _el.classList.remove('ds-page-title--stuck');
      }
    }

  });
}

// check if SC component exists on page
if(pageTitle__elements.length){

  window.addEventListener('scroll', function() {
    pageTitle__setStyle();
  });

  var steppedControl__modals = document.querySelectorAll('.fsa-modal');
  Helper.forEach(steppedControl__modals, function(index, value) {
    var _el = value;
    _el.addEventListener("scroll", function(){
      pageTitle__setStyle();
    });
  });

  document.addEventListener("DOMContentLoaded", function(){
    pageTitle__setStyle();
  });

  window.addEventListener('resize', function() {
    pageTitle__setStyle();
  });

}

console.log('ds-page-title loaded, its JS is NOT to be used for Production, demo purposes only');
