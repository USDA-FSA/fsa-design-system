global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

function combinatorIconAdjust() {

  const $target = $('.ds-combinator__preview');
  const $iconTargets = $target.find('.combinatorIconSample');

  $iconTargets.removeClass('fsa-icon--size-1 fsa-icon--size-2')

  if ($iconTargets) {
    $target
      .find('.fsa-btn--small .combinatorIconSample, .fsa-btn-group--small .combinatorIconSample, .fsa-content-tabs__label--small .combinatorIconSample, .fsa-breadcrumb .combinatorIconSample')
      .addClass('fsa-icon--size-1')
    ;
    $target
      .find('.fsa-btn--large .combinatorIconSample, .fsa-btn-group--large .combinatorIconSample, .fsa-content-tabs__label--large .combinatorIconSample')
      .addClass('fsa-icon--size-2')
    ;
  }

}

function combinatorClone() {

  $target = $('#combinatorCodeSnippet');
  $source = $('#combinatorTarget').prop('outerHTML');
  $holder = $('#combinatorHolder');

  $holder.html($source);

  $holder
    .find('[hidden]')
    .remove()
    .closest('#combinatorTarget')
    .removeAttr('id')
  ;
  $holder
    .find('#combinatorTarget')
    .removeAttr('id')
  ;
  $holder
    .find('#combinatorTextLabel')
    .removeAttr('id')
  ;
  $holder
    .find('#combinatorIconSampleLeft')
    .removeAttr('id')
  ;
  $holder
    .find('#combinatorIconSampleRight')
    .removeAttr('id')
  ;
  $holder
    .find('#combinatorSlots')
    .removeAttr('id')
  ;
  $holder
    .find('.combinatorIconSample')
    .removeClass('combinatorIconSample')
  ;
  $holder
    .find('[data-id]')
    .removeAttr('data-id')
  ;

  $sourceScrubbed = $holder.html().replace(/^\s*[\r\n]/gm, '');;
  $target.text($sourceScrubbed);

  // TODO
  // [ ] refactor $holder.find...
  // [X] remove empty lines (regex)
  // [x] remove id="combinatorTarget"
  // [x] remove id="combinatorTextLabel"
  // [x] remove id="combinatorIconSampleLeft"
  // [x] remove id="combinatorIconSampleRight"
  // [x] remove class="combinatorIconSample"
  // [x] remove id="combinatorSlots"
  // [x] remove data-id="attribute" (and any other data attributes)

}

$('body').on('keyup', '[data-behavior~="combinator-custom-text"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTextLabel');
  const $newLabel = this.value;

  $target.html($newLabel);

  combinatorClone()

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
  combinatorClone();

})

$('body').on('change', '[data-behavior~="combinator-select-many"]', function(event) {

  const $self = $(this);
  const $target = $($self.attr('data-select-targets'));
  const $removals = $self.attr('data-remove');

  $target
    .removeClass($removals)
    .addClass($self.val())
  ;

  combinatorIconAdjust();
  combinatorClone();

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

  combinatorClone();

})

$('body').on('change', '[data-behavior~="combinator-toggle-class"]', function(event) {

  const $self = $(this);
  if ($self.attr('data-toggle-class-target')) {
    var $target = $($self.attr('data-toggle-class-target'));
  } else {
    var $target = $('#combinatorTarget');
  }

  $target.toggleClass($self.val());

  combinatorClone();

})

$('body').on('click', '[data-behavior~="combinator-check"]', function(event) {

  // USAGE: <button class="fsa-btn" data-behavior="combinator-check" data-check-target="#combinatorIcon" type="button">Check $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-check-target'));

  if(!$target.is(':checked')) {
    $target.click();
  }

  combinatorClone();

})

$('body').on('click', '[data-behavior~="combinator-uncheck"]', function(event) {

  // USAGE: <button class="fsa-btn fsa-bg--black" data-behavior="combinator-uncheck" data-uncheck-target="#combinatorIcon" type="button">Uncheck $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-uncheck-target'));

  if($target.is(':checked')) {
    $target.click();
  }

  combinatorClone();

})

$('body').on('click', '[data-behavior~="combinator-disable"]', function(event) {

  // ENABLE: <button class="fsa-btn fsa-bg--black" data-behavior="combinator-disable" data-disable-target="#combinatorIcon" type="button">Disable $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-disable-target'));

  $target.prop('disabled', true)

  combinatorClone();

})

$('body').on('click', '[data-behavior~="combinator-enable"]', function(event) {

  // USAGE: <button class="fsa-btn fsa-bg--black" data-behavior="combinator-enable" data-enable-target="#combinatorIcon" type="button">Enable $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-enable-target'));

  $target.prop('disabled', false)

  combinatorClone();

})

$('body').on('change', '[data-behavior~="combinator-toggle-form-error"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');

  $target.find('.fsa-input').toggleClass('fsa-input--error');
  $target.find('.fsa-textarea').toggleClass('fsa-textarea--error');
  $target.find('.fsa-select').toggleClass('fsa-select--error');
  $target.find('.fsa-select-multi').toggleClass('fsa-select-multi--error');

  combinatorClone();

})

$('body').on('change', '[data-behavior~="combinator-toggle-disabled"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');

  if($target.attr('disabled')) {
    $target.attr('disabled', false);
  } else {
    $target.attr('disabled', true);
  }

  combinatorClone();

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
  combinatorClone();

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
  combinatorClone();

})

$('body').on('click', '[data-behavior~="combinator-btn-group"]', function(event) {

  const $self = $(this);

  $self
    .addClass('fsa-btn-group__item--active')
    .attr('aria-selected', 'true')
    .siblings()
    .removeClass('fsa-btn-group__item--active')
    .removeAttr('aria-selected')
  ;

  combinatorClone();

})

$('body').on('click', '[data-behavior~="combinator-level"]', function(event) {

  const $self = $(this);
  const $direction = $self.attr('data-level-direction');
  const $target = $('#combinatorTarget ' + $self.attr("data-level-target") + ' > :last-child');

  if ($direction === 'up') {
    $target.clone().appendTo($target.parent());
  }
  else {
    if (!$target.is(':only-child')) {
      $target.remove();
    }
  }

  combinatorClone();

})

if ($('.ds-combinator')) {
  combinatorClone();
}