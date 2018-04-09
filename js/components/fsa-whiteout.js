// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var whiteoutShow = document.querySelectorAll('[data-behavior~="whiteout-show"]');
var whiteoutDismiss = document.querySelectorAll('[data-behavior~="whiteout-dismiss"]');


// Utility method to loop thru NodeList correctly
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// iterate thru trigger elements and set click handler
forEach(whiteoutShow, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'false');
    _whiteout.setAttribute('aria-expanded', 'false');
  }, false);
});

forEach(whiteoutDismiss, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    var _whiteout = document.getElementById('fsa-whiteout');
    _whiteout.setAttribute('aria-hidden', 'true');
    _whiteout.setAttribute('aria-expanded', 'true');
  }, false);
});
