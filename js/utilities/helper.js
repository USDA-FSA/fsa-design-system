
var Helper = (function () {

  var defaults = {};

  //PRIVATE METHODS

  // Utility method to loop thru NodeList correctly
  var _forEach = function(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // Utilitity method
  var _getClosest = function(elem, selector){

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
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
  };

  var _getAnimationString = function(el){
    var str = "";
    var t;
    var animations = {
      'animation':'animationend',
      'OAnimation':'oAnimationEnd',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
    };
    for (t in animations) {
      if ( typeof el.style[t] !== 'undefined' ) str = animations[t];
    }
    return str;
  }

  var _hasClass = function(elem, classname) {
    return (' ' + elem.className + ' ').indexOf(' ' + classname + ' ') > -1;
  };


  // PUBLIC METHODS
  var forEach = function( array, callback, scope ){
    return _forEach( array, callback, scope );
  }

  var getClosest = function(elem, selector){
    return _getClosest( elem, selector );
  }

  var getAnimationString = function(elem){
    return _getAnimationString(elem);
  }

  var hasClass = function(elem, classname){
    return _hasClass(elem, classname);
  }

  var isIE10Down = (function() {
    if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
      return parseFloat( RegExp.$1 );
    }
    else {
      return false;
    }
  })();

  var isIE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;

  //Object Literal Return
  return {
    forEach: forEach, //( array, callback, scope )
    getClosest: getClosest, //( elem, selector )
    getAnimationString: getAnimationString, //( elem ),
    hasClass: hasClass, //( elem, classname )
    isIE10Down: isIE10Down,
    isIE11: isIE11
  };

})();

module.exports = Helper;
