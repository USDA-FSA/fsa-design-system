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

var modal__firstTabStop;
var modal__lastTabStop;

var modal__triggers = document.querySelectorAll('[data-behavior~="open-modal"]');
var modal__closeButtons = document.querySelectorAll('[data-behavior~="close-modal"]');

// iterate thru trigger elements and set click handler
Helper.forEach(modal__triggers, function(index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    // set private variables
    var _trigger = e.target;
    var _id = _trigger.getAttribute('aria-controls');
    // assign classes and aria
    _trigger.setAttribute('aria-expanded', 'true');
    _trigger.setAttribute('data-modal-origin','');
    // pass associated modal to method
    modal__show( document.getElementById(_id) );
  }, false);
});


// iterate thru trigger elements and set click handler
Helper.forEach(modal__closeButtons, function (index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){
    // pass associated modal to method
    var _m = Helper.getClosest(e.currentTarget, '.fsa-modal');
    modal__close( _m );
  }, false);
});

function modal__show(m){

  var _modal = m;
  // show the modal by toggling aria attribute
  _modal.setAttribute('aria-hidden', 'false');

  // trap tabs inside of modal
  _modal.addEventListener('keydown', modal__trapTab);
  // Find all focusable children

  var _focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  var _focusableElements = _modal.querySelectorAll(_focusableElementsString);

  // Convert NodeList to Array
  _focusableElements = Array.prototype.slice.call(_focusableElements);

  modal__firstTabStop = _focusableElements[0];
  modal__lastTabStop = _focusableElements[_focusableElements.length - 1];
  modal__firstTabStop.focus();

  // Fix double scrollbar issue
  var _body = document.getElementsByTagName('body')[0];
  _body.className = _body.className + ' fsa-modal-scroll-fix';

  // gain focus --- needs rewrite
  setTimeout(function() {
    _modal.focus();
  },200);

}

function modal__close(m){

  var _modal = m;

  // hide the modal by toggling aria attribute
  _modal.setAttribute('aria-hidden', 'true');

  // Fix double scrollbar issue
  var _body = document.getElementsByTagName('body')[0];
  _body.className = _body.className.replace(' fsa-modal-scroll-fix','');

  // set focus back to the originating element
  var _origin = document.querySelector('[data-modal-origin]');
  _origin.removeAttribute('data-modal-origin');
  _origin.setAttribute('aria-expanded', 'false');
  _origin.focus();

}

// Utility method to trap keys
function modal__trapTab(e){
  // Check for TAB key press
  if (e.keyCode === 9) {
    // SHIFT + TAB
    if (e.shiftKey) {
      if (document.activeElement === modal__firstTabStop) {
        e.preventDefault();
        modal__lastTabStop.focus();
      }
    // TAB
    } else {
      if (document.activeElement === modal__lastTabStop) {
        e.preventDefault();
        modal__firstTabStop.focus();
      }
    }
  }
  // ESCAPE
  if (e.keyCode === 27) {
    modal__close();
  }
}

console.log('ModalComponent loaded, its JS is NOT to be used for Production, demo purposes only');
