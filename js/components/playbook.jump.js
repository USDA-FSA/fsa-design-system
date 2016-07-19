var $ = require('jquery');
var Sticky = require('../vendor/jquery.sticky');

if (window.matchMedia("(min-width: 672px)").matches) {

  // If browser doesn't support matchMedia(), we don't care if menu is sticky

  $('.pb-jump').sticky({
    topSpacing: 40,
    className: 'pb-jump--stuck',
    wrapperClassName: 'pb-jump-wrapper'
  });

  $('.pb-jump').on('sticky-start', function() {
    console.log("Stuck");
  });

  $('.pb-jump').on('sticky-end', function() {
    console.log("UNStuck");
  });

}

// var $jumpNav = $('.pb-jump');

// $(window).on('scroll', function(){
//
//   var offset = $jumpNav.offset();
//   var heightToShift = offset.top;
//   // var heightToShift = 20;
//
//   if( $(this).scrollTop() > heightToShift ) {
//     $jumpNav.addClass('pb-jump--stuck');
//   } else {
//     $jumpNav.removeClass('pb-jump--stuck');
//   }
//
//   console.log('$(this).scrollTop() is ' + $(this).scrollTop() + ' and heightToShift is ' + heightToShift);
//
// });

module.exports = Jump;
