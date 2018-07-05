var $ = window.jQuery = require('jquery');

var heightToHold = $('.docs__primary-nav').outerHeight(true);
var $navShell = $('.docs__nav-shell');
var $docsNav = $('.docs__nav');

if ($docsNav) {
  $(window).on('scroll', function(){
    var heightToShift = $('.docs__intro').height();
    if( $(this).scrollTop() > heightToShift ) {
      $docsNav.addClass('docs__nav--fixed');
      $navShell.css('height', heightToHold);
    } else {
      $docsNav.removeClass('docs__nav--fixed');
      $navShell.removeAttr('style');
    }
  });
}

console.log('DocsNav loaded, its JS is NOT to be used for Production, demo purposes only');

// module.exports = DocsNav;
