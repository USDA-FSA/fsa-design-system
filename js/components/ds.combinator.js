global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$('body').on('keyup', '[data-behavior~="combinator-custom-text"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTextLabel');

  const $newLabel = this.value;

  console.log($newLabel);

  $target.html($newLabel);

})

$('body').on('change', '[data-behavior~="combinator-select"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $removals = $self.attr('data-remove');
  const $iconTarget = $target.find('.fsa-icon');

  console.log('Need to account for icon sizes. IOW, there were will nested instances that need to be toggled, inserted, etc.');

  $target
    .removeClass($removals)
    .addClass($self.val())
  ;

  if ($target.hasClass('fsa-btn--small')) {
    $iconTarget
      .removeClass('fsa-icon--size-2')
      .addClass('fsa-icon--size-1')
    ;
  } else {
    $iconTarget
      .removeClass('fsa-icon--size-1')
      .addClass('fsa-icon--size-2')
    ;
  }

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
  const $target = $('#combinatorTarget');

  $target.toggleClass($self.val());

})

$('body').on('change', '[data-behavior~="combinator-toggle-disabled"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');

  if($target.attr('disabled')) {
    $target.prop('disabled', false);
  } else {
    $target.prop('disabled', true);
  }

})

$('body').on('change', '[data-behavior~="combinator-toggle-icon"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $iconTarget = $('#' + $self.attr('data-icon-target'));

  if($iconTarget.attr('hidden')) {
    $iconTarget.removeAttr('hidden');
  } else {
    $iconTarget.attr('hidden', true);
  }

  if ($target.hasClass('fsa-btn--small')) {
    $iconTarget
      .removeClass('fsa-icon--size-2')
      .addClass('fsa-icon--size-1')
    ;
  } else {
    $iconTarget
      .removeClass('fsa-icon--size-1')
      .addClass('fsa-icon--size-2')
    ;
  }

})

$('body').on('change', '[data-behavior~="combinator-toggle-icon-only"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $targetLabel = $('#' + $self.attr('data-label-target'));
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
      .prop('checked', true)
      .prop('disabled', true)
    ;
    $('#combinatorIconRight')
      .prop('checked', false)
      .prop('disabled', true)
    ;
  }

})
