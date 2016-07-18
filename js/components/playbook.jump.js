var $ = require('jquery');
var Sticky = require('../vendor/jquery.sticky');

// $('.pb-jump').sticky({
//   topSpacing: 0,
//   className: 'pb-jump--stuck',
//   wrapperClassName: 'pb-jump-wrapper'
// });
//
// $('.pb-jump').on('sticky-start', function() {
//   console.log("Stuck");
// });
//
// $('.pb-jump').on('sticky-end', function() {
//   console.log("UNStuck");
// });

var $jumpNav = $('.pb-jump');

$(window).on('scroll', function(){

  var heightToShift = $('.pb-jump').height();

  if( $(this).scrollTop() > heightToShift ) {
    $jumpNav.addClass('pb-jump--stuck');
  } else {
    $jumpNav.removeClass('pb-jump--stuck');
  }

});


module.exports = Jump;
