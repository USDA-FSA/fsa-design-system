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

const $ = window.jQuery = require('jquery');

$('body').on('click', '[data-behavior~="alert-dismiss"]', function(event) {

  const $self = $(this);
  const $alert = $self.closest('.fsa-alert');

  // 1. Hide it visually via opacity.
  // 2. Animate the component's height.
  // 3. When animation is complete, remove it from the DOM.

  $alert.css('opacity', 0); // 1.

  $alert.slideUp('slow', function(){ // 2.
    this.remove(); // 3.
  });

})