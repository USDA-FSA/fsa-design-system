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

var $ = window.jQuery = require('jquery');

;$(function() {

    var $steppedControl = $('.fsa-stepped-control--sticky'); // only the --sticky ones

    function steppedControl() {

      $steppedControl.each(function(index) {

        var $self = $(this)
        var pageTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var steppendControlPosTop = $self.offset().top - pageTop;
        var steppendControlHeight = $self.outerHeight();
        var steppendControlPosBot = windowHeight - (steppendControlPosTop + steppendControlHeight);

        // console.log('pageTop: ' + pageTop);
        // console.log('windowHeight: ' + windowHeight);
        // console.log('steppendControlPosTop: ' + steppendControlPosTop);
        // console.log('steppendControlHeight: ' + steppendControlHeight);
        // console.log('steppendControlPosBot: ' + steppendControlPosBot);

        if (steppendControlPosBot > 12) {
          $self.addClass("fsa-stepped-control--unstuck");
        }
        else {
          $self.removeClass("fsa-stepped-control--unstuck");
        }

      });

    }

    if ($steppedControl.length) { // only run if at least one instance

      $(window).scroll(function() {
        steppedControl()
      });

      $('.fsa-modal').scroll(function() {
        steppedControl()
      });

      $(document).ready(function() {
        steppedControl();
      })

      $(window).resize(function() {
        // may want to **debounce** this, e.g. http://benalman.com/projects/jquery-throttle-debounce-plugin/
        steppedControl();
      })

    }

});

console.log('SteppedControl loaded, its JS is NOT to be used for Production, demo purposes only');
