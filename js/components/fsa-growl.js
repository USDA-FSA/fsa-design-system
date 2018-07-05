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
var WhiteoutComponent = require('./fsa-whiteout');

var growl__firstTabStop;
var growl__lastTabStop;

var growl__triggers = document.querySelectorAll('[data-behavior~="growl-show"]');
var growl__closeButtons = document.querySelectorAll('[data-behavior~="growl-dismiss"]');
var growl__closeButtonsDelay = document.querySelectorAll('[data-behavior~="growl-dismiss-delay"]');

// iterate thru trigger elements and set click handler
Helper.forEach(growl__triggers, function(index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    // set private variables
    var _trigger = e.target;
    var _id = _trigger.getAttribute('aria-controls');

    // assign classes and aria
    _trigger.setAttribute('aria-expanded', 'true');
    _trigger.setAttribute('data-growl-origin','');

    // pass associated growl to method
    growl__show( document.getElementById(_id) );
  }, false);
});

// iterate thru close buttons and set click handler
Helper.forEach(growl__closeButtons, function(index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    // pass associated growl to method
    var _g = Helper.getClosest(e.currentTarget, '.fsa-growl');
    growl__dismiss( _g );
  }, false);
});

function growl__show(g){
  var _growl = g;
  _growl.setAttribute('aria-hidden', 'false');

  // for Center Modal style only
  if( Helper.hasClass(_growl, 'fsa-growl--centered') ){
    // trap tabs inside of modal
    _growl.addEventListener('keydown', growl__trapTab);
    // Find all focusable children
    var _focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    var _focusableElements = _growl.querySelectorAll(_focusableElementsString);

    // Convert NodeList to Array
    _focusableElements = Array.prototype.slice.call(_focusableElements);

    growl__firstTabStop = _focusableElements[0];
    growl__lastTabStop = _focusableElements[_focusableElements.length - 1];
    growl__firstTabStop.focus();
    _growl.focus();
  }else{
    _growl.addEventListener( Helper.getAnimationString(_growl), growl__showDelay);
  }
}

function growl__showDelay(e){
  var _growl = e.target;

  // clean up
  _growl.removeEventListener( Helper.getAnimationString(_growl), growl__showDelay);
}

function growl__dismiss(g){
  var _growl = g;
  _growl.className = _growl.className + ' fsa-growl--dismissing';
  _growl.addEventListener( Helper.getAnimationString(_growl), growl__dismissDelay);
  if( Helper.hasClass(_growl, 'fsa-growl--centered') ){
    _growl.focus();
  }
}

function growl__dismissDelay(e){
  var _growl = e.target;

  _growl.className = _growl.className.replace(' fsa-growl--dismissing','');
  _growl.setAttribute('aria-hidden', 'true');

  var _origin = document.querySelector('[data-growl-origin]');
  _origin.removeAttribute('data-growl-origin');
  _origin.setAttribute('aria-expanded', 'false');
  // set focus back to the originating element
  _origin.focus();
  // clean up
  _growl.removeEventListener( Helper.getAnimationString(_growl), growl__dismissDelay);
}

//utility method to trap keys
function growl__trapTab(e){
  // Check for TAB key press
  if (e.keyCode === 9) {
    // SHIFT + TAB
    if (e.shiftKey) {
      if (document.activeElement === growl__firstTabStop) {
        e.preventDefault();
        growl__lastTabStop.focus();
      }
    // TAB
    } else {
      if (document.activeElement === growl__lastTabStop) {
        e.preventDefault();
        growl__firstTabStop.focus();
      }
    }
  }
  // ESCAPE
  if (e.keyCode === 27) {
    growl__dismiss();
  }
}

console.log('GrowlComponent loaded, its JS is NOT to be used for Production, demo purposes only');
