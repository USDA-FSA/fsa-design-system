global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// TODO; combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element
// combinator-change-element


// Adjust size variant of icons in specific contexts (this is lazy, and probably can be done better)
function combinatorIconAdjust() {

  const $target = $('.ds-combinator__preview');
  const $iconTargets = $target.find('.combinatorIconSample');

  /////////////////////////////////////////////////////////////////////////////
  // 1. Remove *all* sizes
  $iconTargets.removeClass('fsa-icon--size-1 fsa-icon--size-2')

  /////////////////////////////////////////////////////////////////////////////
  // 2. And then add the size back in, specific to its context
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

// Clone the combinator preview and add it to the Code Snippet block
function combinatorClone() {

  $target = $('#combinatorCodeSnippet');
  $source = $('#combinatorTarget').prop('outerHTML');
  $holder = $('#combinatorHolder');

  /////////////////////////////////////////////////////////////////////////////
  // 1. immediately clone the new HTML source
  $holder.html($source);

  /////////////////////////////////////////////////////////////////////////////
  // 2. Remove selected attributes from the cloned source
  $holder
    .find('[hidden]')
    .remove()
    .closest('#combinatorTarget')
    .removeAttr('id')
  ;
  $holder
    .find('#combinatorTarget, #combinatorTextLabel, #combinatorIconSampleLeft, #combinatorIconSampleRight, #combinatorSlots, #combinator_Label, [data-id]')
    .removeAttr('id')
    .removeAttr('data-id')
  ;
  $holder
    .find('.combinatorIconSample')
    .removeClass('combinatorIconSample')
  ;

  /////////////////////////////////////////////////////////////////////////////
  // 3. Trim empty lines
  $sourceScrubbed = $holder.html().replace(/^\s*[\r\n]/gm, '');

  /////////////////////////////////////////////////////////////////////////////
  // 4. Add the cloned source to the target
  $target.text('    ' + $sourceScrubbed); // the four extra spaces are to (lazily) align the subsequent code. TODO: reformat the code, with color coding, etc.

}

// Immediately clone the default combinator code snippet
if ($('.ds-combinator')) {
  combinatorClone();
}

// Allow custom labels to preview
$('body').on('keyup', '[data-behavior~="combinator-custom-text"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTextLabel');
  const $newLabel = this.value;

  $target.html($newLabel);

  combinatorClone()

})

// Use Button Group to cycle through its selected states. This is an alternate to using <select> and currently specific to toggling between Button/Anchor HTML elements.
// INCOMPLETE
// TODO: Add ability to reform an <a> to <button> or vice versa.
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

// Use Button Group to toggle between anchor or button HTML elements.
$('body').on('click', '[data-behavior~="combinator-change-element"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const targetHTML = $target.html();
  const elementType = $self.data('element-type');
  const attributes = $target.prop('attributes');

  if (elementType === 'button') {
    $target.removeAttr('href');
    $target.attr('type', 'button');
  } else {
    $target.removeAttr('type');
    $target.attr('href', '/link.html');
  }

  $target.replaceWith('<' + elementType + ' id="combinatorTarget">' + targetHTML + '</' + elementType + '>');

  $.each(attributes, function() {
    $('#combinatorTarget').attr(this.name, this.value);
  });

  combinatorClone();

})

// Use <select> to cycle through variants on a *single* target, e.g. --small, --large, etc.
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

// Use <select> to cycle through variants on *multiple* targets, e.g. --small, --large, etc.
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

// Use <select> to cycle through wildly different structures: show a target, hide its peers
$('body').on('change', '[data-behavior~="combinator-toggle-slots"]', function(event) {

  const $self = $(this);
  const $newSlot = $('[data-id="' + $self.val() + '"]');

  $newSlot
    .prop('hidden', false)
    .siblings()
    .prop('hidden', true)
  ;

  combinatorClone();

})

// Use Switch to add/remove a class to target(s)
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

// Use Switch to *toggle* a target's `checked` state
$('body').on('change', '[data-behavior~="combinator-toggle-disabled"]', function(event) {

  const $target = $('#combinatorTarget');

  if($target.attr('disabled')) {
    $target.attr('disabled', false);
  } else {
    $target.attr('disabled', true);
  }

  combinatorClone();

})

// Use Switch to change a target's `checked` state to TRUE (this is *not* a *toggle*).
$('body').on('click', '[data-behavior~="combinator-check"]', function(event) {

  // USAGE: <button class="fsa-btn" data-behavior="combinator-check" data-check-target="#combinatorIcon" type="button">Check $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-check-target'));

  if(!$target.is(':checked')) {
    $target.click();
  }

  combinatorClone();

})

// Use Switch to change a target's `checked` state to FALSE (this is *not* a *toggle*).
$('body').on('click', '[data-behavior~="combinator-uncheck"]', function(event) {

  // USAGE: <button class="fsa-btn fsa-bg--black" data-behavior="combinator-uncheck" data-uncheck-target="#combinatorIcon" type="button">Uncheck $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-uncheck-target'));

  if($target.is(':checked')) {
    $target.click();
  }

  combinatorClone();

})

// Use Switch to change a target's `disabled` state to TRUE (this is *not* a *toggle*).
$('body').on('click', '[data-behavior~="combinator-disable"]', function(event) {

  // ENABLE: <button class="fsa-btn fsa-bg--black" data-behavior="combinator-disable" data-disable-target="#combinatorIcon" type="button">Disable $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-disable-target'));

  $target.prop('disabled', true)

  combinatorClone();

})

// Use Switch to change a target's `disabled` state to FALSE (this is *not* a *toggle*).
$('body').on('click', '[data-behavior~="combinator-enable"]', function(event) {

  // USAGE: <button class="fsa-btn fsa-bg--black" data-behavior="combinator-enable" data-enable-target="#combinatorIcon" type="button">Enable $target</button>

  const $self = $(this);
  const $target = $($self.attr('data-enable-target'));

  $target.prop('disabled', false)

  combinatorClone();

})

// Use Switch to add --error variant to multiple targets. This is *specific* to fsa-field component.
$('body').on('change', '[data-behavior~="combinator-toggle-form-error"]', function(event) {

  const $target = $('#combinatorTarget');

  $target.find('.fsa-input').toggleClass('fsa-input--error');
  $target.find('.fsa-textarea').toggleClass('fsa-textarea--error');
  $target.find('.fsa-select').toggleClass('fsa-select--error');
  $target.find('.fsa-select-multi').toggleClass('fsa-select-multi--error');

  combinatorClone();

})

// Use Switch to toggle `hidden` attribute on target(s)
$('body').on('change', '[data-behavior~="combinator-toggle-hidden"]', function(event) {

  const $self = $(this);
  const $iconTarget = $($self.attr('data-toggle-hidden-target'));

  if($iconTarget.attr('hidden')) {
    $iconTarget.removeAttr('hidden');
  } else {
    $iconTarget.attr('hidden', true);
  }

  combinatorIconAdjust();
  combinatorClone();

})

// Use Switch to show/hide Icons within Buttons.
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

// Use Switch to Toggle Prefix/Suffix
$('body').on('change', '[data-behavior~="combinator-toggle-affix"]', function(event) {

  const $self = $(this);
  const $target = $('#combinatorTarget');
  const $affixDir = $self.attr('data-affix-direction');
  const $affixType = $self.attr('data-affix-type');

  console.log('Direction: ' + $affixDir + '\nType: ' + $affixType);

  combinatorClone();

})

// Add or Remove nodes from the DOM.
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