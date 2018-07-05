// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var Helper = require('../utilities/helper');

var whiteout__show = document.querySelectorAll('[data-behavior~="whiteout-show"]');
var whiteout__dismiss = document.querySelectorAll('[data-behavior~="whiteout-dismiss"]');

// iterate thru trigger elements and set click handler
Helper.forEach(whiteout__show, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'false');
    _whiteout.setAttribute('aria-expanded', 'false');
  }, false);
});

Helper.forEach(whiteout__dismiss, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'true');
    _whiteout.setAttribute('aria-expanded', 'true');
  }, false);
});

console.log('WhiteoutComponent loaded, its JS is NOT to be used for Production, demo purposes only');
