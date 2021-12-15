

export let Helpers = {

  defaults: {},

  //PRIVATE METHODS

  // Utility method to loop thru NodeList correctly
  _forEach: (array, callback, scope) => {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  },

  // Utilitity method
  _getClosest: (elem, selector) => {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        let matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
      };
    }

    // Get the closest matching element
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
      if ( elem.matches( selector ) ) return elem;
    }

    return null;
  },

  _getAnimationString: (el) => {
    let str = "";
    let t;
    let animations = {
      'animation':'animationend',
      'OAnimation':'oAnimationEnd',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
    };
    for (let t in animations) {
      if ( typeof el.style[t] !== 'undefined' ) str = animations[t];
    }
    return str;
  },

  _hasClass: (elem, classname) => {
    return (' ' + elem.className + ' ').indexOf(' ' + classname + ' ') > -1;
  },


  // PUBLIC METHODS
  forEach: ( array, callback, scope ) => {
    return Helper._forEach( array, callback, scope );
  },

  getClosest: (elem, selector) => {
    return Helper._getClosest( elem, selector );
  },

  getAnimationString: (elem) => {
    return Helper._getAnimationString(elem);
  },

  hasClass: (elem, classname) => {
    return Helper._hasClass(elem, classname);
  },

  isIE10Down: () => {
    if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
      return parseFloat( RegExp.$1 );
    }
    else {
      return false;
    }
  },

  isIE11: '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style

};
