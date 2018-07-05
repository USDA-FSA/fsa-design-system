// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var Helper = require('../utilities/helper');

var steppedControl__elements = document.querySelectorAll('.fsa-stepped-control--sticky');

function steppedControl__setStyle() {

  // iterate thru each stepped control on page
  Helper.forEach(steppedControl__elements, function(index, value) {
    var _el = value;

    var _viewportOffset = _el.getBoundingClientRect();
    var _scHeight = _el.offsetHeight;
    var _scBottomPosition = window.innerHeight - (_viewportOffset.top + _scHeight);

    if (_scBottomPosition > 12) {

      if(!_el.classList.contains('fsa-stepped-control--unstuck')){
        _el.classList.add('fsa-stepped-control--unstuck');
      }
    } else {

      if(_el.classList.contains('fsa-stepped-control--unstuck')){
        _el.classList.remove('fsa-stepped-control--unstuck');
      }
    }
  });
}

// check if SC component exists on page
if(steppedControl__elements.length){

  window.addEventListener('scroll', function() {
    steppedControl__setStyle();
  });

  var steppedControl__modals = document.querySelectorAll('.fsa-modal');
  Helper.forEach(steppedControl__modals, function(index, value) {
    var _el = value;
    _el.addEventListener("scroll", function(){
      steppedControl__setStyle();
    });
  });

  document.addEventListener("DOMContentLoaded", function(){
    steppedControl__setStyle();
  });

  window.addEventListener('resize', function() {
    steppedControl__setStyle();
  });

}

console.log('SteppedControl loaded, its JS is NOT to be used for Production, demo purposes only');
