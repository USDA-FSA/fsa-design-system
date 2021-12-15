// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

import { Helpers } from '../utilities/helpers';
//import { Whiteout } from './whiteout';

export let Modal = {

  firstTabStop: '',
  lastTabStop: '',

  install: (app) => {
    const version = Number(app.version.split('.')[0])
    console.warn('Modal Installed - Vue Version: ',version);

    app.config.globalProperties.$modal = Modal
    app.provide('fsaModal', Modal)
  },

  initHelpers: () => {
    console.log('initHelpers')

    let triggers = document.querySelectorAll('[data-behavior~="open-modal"]');
    let closeButtons = document.querySelectorAll('[data-behavior~="close-modal"]');

    // iterate thru trigger elements and set click handler
    triggers.forEach( (el, index) => {
      el.addEventListener('click', (e) => {
        // set private variables
        let _trigger = e.target;
        let _id = _trigger.getAttribute('aria-controls');
        // assign classes and aria
        _trigger.setAttribute('aria-expanded', 'true');
        _trigger.setAttribute('data-modal-origin','');
        // pass associated modal to method
        Modal.showModal( document.getElementById(_id) );
      }, false);
    });

    // iterate thru trigger elements and set click handler
    closeButtons.forEach( (el, index) => {
      el.addEventListener('click', (e) => {
        // pass associated modal to method
        let _m = Helpers.getClosest(e.currentTarget, '.fsa-modal');
        Modal.closeModal( _m );
      }, false);
    });

  },

  showModal: (m) => {

    let _modal = m;
    // show the modal by toggling aria attribute
    _modal.setAttribute('aria-hidden', 'false');

    // trap tabs inside of modal
    _modal.addEventListener('keydown', Modal.trapTab);
    // Find all focusable children

    let _focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let _focusableElements = _modal.querySelectorAll(_focusableElementsString);

    // Convert NodeList to Array
    _focusableElements = Array.prototype.slice.call(_focusableElements);

    Modal.firstTabStop = _focusableElements[0];
    Modal.lastTabStop = _focusableElements[_focusableElements.length - 1];
    Modal.firstTabStop.focus();

    // Fix double scrollbar issue
    let _body = document.getElementsByTagName('body')[0];
    _body.className = _body.className + ' fsa-modal-scroll-fix';

    // gain focus --- needs rewrite
    setTimeout( () => {
      _modal.focus();
    },200);

  },

  closeModal: (m) => {

    let _modal = m;

    // hide the modal by toggling aria attribute
    _modal.setAttribute('aria-hidden', 'true');

    // Fix double scrollbar issue
    let _body = document.getElementsByTagName('body')[0];
    _body.className = _body.className.replace(' fsa-modal-scroll-fix','');

    // set focus back to the originating element
    let _origin = document.querySelector('[data-modal-origin]');
    _origin.removeAttribute('data-modal-origin');
    _origin.setAttribute('aria-expanded', 'false');
    _origin.focus();

  },

  // Utility method to trap keys
  trapTab: (e) => {
    // Check for TAB key press
    if (e.keyCode === 9) {
      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === Modal.firstTabStop) {
          e.preventDefault();
          Modal.lastTabStop.focus();
        }
      // TAB
      } else {
        if (document.activeElement === Modal.lastTabStop) {
          e.preventDefault();
          Modal.firstTabStop.focus();
        }
      }
    }
    // ESCAPE
    if (e.keyCode === 27) {
      Modal.close();
    }
  },

  init: () => {
    console.log('ModalComponent loaded, its JS is NOT to be used for Production, demo purposes only');
    Modal.initHelpers();
  }

};