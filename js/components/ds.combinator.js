global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

function combinatorIconAdjust() {

  const $target = $('.ds-combinator__preview');
  const $iconTargets = $target.find('.combinatorIconSample');

  $iconTargets.removeClass('fsa-icon--size-1 fsa-icon--size-2')

  if ($iconTargets) {
    $target
      .find('.fsa-btn--small .combinatorIconSample, .fsa-btn-group--small .combinatorIconSample')
      .addClass('fsa-icon--size-1')
    ;
    $target
      .find('.fsa-btn--large .combinatorIconSample, .fsa-btn-group--large .combinatorIconSample')
      .addClass('fsa-icon--size-2')
    ;
  }

}

$('body').on('keyup', '[data-behavior~="combinator-custom-text"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTextLabel');
  const $newLabel = this.value;

  $target.html($newLabel);

})

$('body').on('change', '[data-behavior~="combinator-select"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $removals = $self.attr('data-remove');

  $target
    .removeClass($removals)
    .addClass($self.val())
  ;

  combinatorIconAdjust();

})

$('body').on('change', '[data-behavior~="combinator-toggle-slots"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorSlots');
  const $newSlot = $('[data-id="' + $self.val() + '"]');

  $newSlot
    .prop('hidden', false)
    .siblings()
    .prop('hidden', true)
  ;

})

$('body').on('change', '[data-behavior~="combinator-toggle-class"]', function(event) {

  const $self = $(this);
  if ($self.attr('data-toggle-class-target')) {
    var $target = $($self.attr('data-toggle-class-target'));
  } else {
    var $target = $('#combinatorTarget');
  }

  $target.toggleClass($self.val());

})

$('body').on('change', '[data-behavior~="combinator-toggle-form-error"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');

  $target.find('.fsa-input').toggleClass('fsa-input--error');
  $target.find('.fsa-textarea').toggleClass('fsa-textarea--error');
  $target.find('.fsa-select').toggleClass('fsa-select--error');
  $target.find('.fsa-select-multi').toggleClass('fsa-select-multi--error');

})

$('body').on('change', '[data-behavior~="combinator-toggle-disabled"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');

  if($target.attr('disabled')) {
    $target.attr('disabled', false);
  } else {
    $target.attr('disabled', true);
  }

})

$('body').on('change', '[data-behavior~="combinator-toggle-item"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $iconTarget = $($self.attr('data-toggle-target'));

  if($iconTarget.attr('hidden')) {
    $iconTarget.removeAttr('hidden');
  } else {
    $iconTarget.attr('hidden', true);
  }

  combinatorIconAdjust();

})

$('body').on('change', '[data-behavior~="combinator-toggle-icon-only"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $targetLabel = $($self.attr('data-label-target'));
  const $iconLeft = $('#combinatorIconSampleLeft');
  const $iconRight = $('#combinatorIconSampleRight');
  const $textLabel = $('#combinatorTextLabel').text();

  if($targetLabel.attr('hidden')) {

    $iconLeft.attr('hidden', true);
    $iconRight.attr('hidden', true);

    $target.removeAttr('aria-label');
    $target.removeAttr('title');
    $targetLabel.removeAttr('hidden');

    $('#combinatorIconLeft')
      .prop('checked', false)
      .prop('disabled', false)
    ;
    $('#combinatorIconRight')
      .prop('checked', false)
      .prop('disabled', false)
    ;

  } else {

    $iconLeft.removeAttr('hidden');
    $iconRight.attr('hidden', true);

    $target.attr('aria-label', $textLabel);
    $target.attr('title', $textLabel);
    $targetLabel.attr('hidden', true);

    $('#combinatorIconLeft')
      .prop('checked', false)
      .prop('disabled', true)
    ;
    $('#combinatorIconRight')
      .prop('checked', false)
      .prop('disabled', true)
    ;

  }

  combinatorIconAdjust()

})


