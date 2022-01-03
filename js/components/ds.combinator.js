global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$('body').on('keyup', '[data-behavior~="combinator-custom-text"]', function(event) {

  var $self = $(this);
  var $target = $('#combinatorTextLabel');

  var $newLabel = this.value;

  console.log($newLabel);

  $target.html($newLabel);

})

$('body').on('change', '[data-behavior~="combinator-select"]', function(event) {

  var $self = $(this);
  var $target = $('#combinatorTarget');
  var $removals = $self.attr('data-remove');
  var $iconTarget = $target.find('.fsa-icon');

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

$('body').on('change', '[data-behavior~="combinator-toggle-class"]', function(event) {

  var $self = $(this);
  var $target = $('#combinatorTarget');

  $target.toggleClass($self.val());

})

$('body').on('change', '[data-behavior~="combinator-toggle-attr"]', function(event) {

  var $self = $(this);
  var $target = $('#combinatorTarget');
  var $attr = $self.val();

  if($target.attr($attr)) {
    $target.removeAttr($attr);
  } else {
    $target.attr($attr, true);
  }

})

$('body').on('change', '[data-behavior~="combinator-toggle-icon"]', function(event) {

  var $self = $(this);
  var $target = $('#combinatorTarget');
  var $iconTarget = $('#' + $self.attr('data-icon-target'));

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

  var $self = $(this);
  var $target = $('#combinatorTarget');
  var $targetLabel = $('#' + $self.attr('data-label-target'));

  if($targetLabel.attr('hidden')) {
    $targetLabel.removeAttr('hidden');
  } else {
    $targetLabel.attr('hidden', true);
  }

})

// combinator-select