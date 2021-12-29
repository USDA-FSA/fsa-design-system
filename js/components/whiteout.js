
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

import { Helpers } from '../utilities/helpers';

export let Whiteout = {

  wo_show_btn: document.querySelectorAll('[data-behavior~="whiteout-show"]'),
  wo_dismiss_btn: document.querySelectorAll('[data-behavior~="whiteout-dismiss"]'),

  initHelpers: () => {
    // iterate thru trigger elements and set click handler
    Helpers.forEach(Whiteout.wo_show_btn, (index, value) => {
      let _el = value;
      _el.addEventListener('click', (e) => {
        let _whiteout = document.getElementById('fsa-whiteout');
        _whiteout.setAttribute('aria-hidden', 'false');
        _whiteout.setAttribute('aria-expanded', 'false');
      }, false);
    }),

    Helpers.forEach(Whiteout.wo_dismiss_btn, (index, value) => {
      let _el = value;
      _el.addEventListener('click', (e) => {
        let _whiteout = document.getElementById('fsa-whiteout');
        _whiteout.setAttribute('aria-hidden', 'true');
        _whiteout.setAttribute('aria-expanded', 'true');
      }, false);
    })
  },

  init: () => {
    console.log('WhiteoutComponent loaded, its JS is NOT to be used for Production, demo purposes only');
    Whiteout.initHelpers();
  }

};

Whiteout.init();