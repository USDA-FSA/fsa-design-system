var $ = require('jquery');
var Sticky = require('../vendor/jquery.sticky');

function JumpBuild() {

  var $articleBody = $('.pb-article');
  var $articleTitles = $articleBody.find('h2[id]')

  $articleTitles.each(function(index) {
    console.log(index + ": " + $(this).text() + ' #' + $(this).attr('id'));
  });

}

jQuery(document).ready(function($){

  JumpBuild();

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

});




module.exports = Jump;
