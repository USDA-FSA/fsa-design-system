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

var Helper = require('../utilities/helper');

// What gets clicked?
var spinbox__triggers = document.querySelectorAll('[data-behavior~="spinbox-spin"]');


// Iterate thru trigger elements and set click handler
Helper.forEach(spinbox__triggers, function (index, value) {

  var _el = value;

  _el.addEventListener('click', function(e){

    var _component = Helper.getClosest(e.currentTarget, '.fsa-spinbox');
    var _target = _component.querySelector('.fsa-spinbox__input'); // Which form element in this component will be updated with new value?
    var _targetStepAmount = _target.getAttribute('step'); // By how much will we increment/decrement?

    if (_targetStepAmount == null) {
      // If step attribute doesn't exist, the default value is "1"
      _targetStepAmount = 1;
    }

    // For Demo purposes, we're only demo'ing in browsers that *natively* support stepUp() and stepDown()
    if (Helper.isIE10Down || Helper.isIE11) { // lazily targeting IE 11 and below. For all I know it works above IE 11
      // Just alert() some basic helpfup info
      alert('Step up/down by ' + _targetStepAmount);
    }
    else {
      if (Helper.hasClass(_el, 'fsa-spinbox__btn--decrement')){
        // If you click the "Down" button SUBTRACT the step value from the current value
        _target.stepDown();
        console.log('Spinbox decremented');
      }
      else {
        // If you click the "Up" button ADD the step value from the current value
        _target.stepUp();
        console.log('Spinbox incremented');
      }
    }

  }, false);

});

console.log('Spinbox loaded, its JS is NOT to be used for Production, demo purposes only');
