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

$(document).ready(function(){
  $('body').on('change', '[data-behavior~="select-other-demo"]', function(event) {

    var $self = $(this);
    var $component = $self.closest('.fsa-field');
    var $target = $('#' + $self.attr('data-target'));

    if ($self.val() == 'other') {
      $target.removeAttr('hidden');
      $target.attr('aria-hidden', 'false');
    }
    else {
      $target.attr('hidden', true);
      $target.attr('aria-hidden', 'true');
    }

  })
});