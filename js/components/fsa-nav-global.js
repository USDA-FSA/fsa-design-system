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


// Disable functionality if class is present
if (document.querySelectorAll('.docs__page').length == 0) {

  var $menuItem = document.querySelectorAll('.fsa-nav-global__link--has-sub-menu');
  var $main = document.querySelectorAll('.fsa-tophat, .fsa-header-app, #main-content, .fsa-footer');

  // Utility method to loop thru NodeList correctly
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  // Utilitity method
  var getClosest = function (elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }
    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  forEach($main, function (index, value) {
    var _el = value;
    _el.addEventListener('click', function (e) {
      if (document.querySelector('.fsa-nav-global__link[aria-expanded="true"]')) {
        document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
    });
  });

  forEach($menuItem, function (index, value) {
    var _el = value;
    _el.addEventListener('click', function (e) {

      var $self = this;
      var $component = getClosest($self, '.fsa-nav-global');
      var $listItem = getClosest($self, '.fsa-nav-global__list-item');
      var $target = $listItem.querySelector('.fsa-nav-global__sub-menu');
      var $currentlyActiveTab = $component.querySelector('.fsa-nav-global__link[aria-expanded="true"]');
      var $currentlyActiveFlyout = $component.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]');
      var menuState = $self.getAttribute('aria-expanded');
      // $target.classList.add('OUTLINE');

      if ($currentlyActiveTab) {
        $currentlyActiveTab.setAttribute('aria-expanded', 'false');
        $currentlyActiveFlyout.setAttribute('aria-hidden', 'true');
      }

      // TOGGLE MENU ITEM OPENED STATE
      if (menuState == 'true') {
        // $self.classList.remove('OUTLINE');
        $self.setAttribute('aria-expanded', 'false');
        $target.setAttribute('aria-hidden', 'true');
      } else {
        // $self.classList.add('OUTLINE');
        $self.setAttribute('aria-expanded', 'true');
        $target.setAttribute('aria-hidden', 'false');
      }

      // if ($self.classList.contains('OUTLINE')) {
      //   $self.classList.remove('OUTLINE');
      //   $target.setAttribute('aria-hidden', 'true');
      // } else {
      //   $self.classList.add('OUTLINE');
      //   $target.setAttribute('aria-hidden', 'false');
      // }
      //
    });

    _el.addEventListener('focus', function (e) {
      if (document.querySelector('.fsa-nav-global__link[aria-expanded="true"]')) {
        document.querySelector('.fsa-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fsa-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
      console.log('you focused an item');
    });

  });

  console.log('FSA_NAV_GLOBAL loaded, its JS ***not*** to be used for Production');

}
