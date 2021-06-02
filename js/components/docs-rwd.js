var $ = window.jQuery = require('jquery');

$('body').on('click', '[data-behavior~="toggle-rwd-size"]', function(event) {

  var $self = $(this);
  var $newClass = $self.data('size');
  var $component = $self.closest('[data-component]');
  var $target = $component.find('.docs__rwd-embed');

  $target
    .removeClass('docs__rwd-embed--phone docs__rwd-embed--phone-big docs__rwd-embed--tablet docs__rwd-embed--desktop docs__rwd-embed--fullscreen')
    .addClass('docs__rwd-embed--' + $newClass)
  ;

  $self
    .removeClass('fsa-bg:hover--tertiary-100')
    .addClass('fsa-bg--secondary-100')
    .attr('aria-selected', true)
    .siblings()
    .removeClass('fsa-bg--secondary-100')
    .removeAttr('aria-selected')
    .addClass('fsa-bg:hover--tertiary-100')
  ;

  if ($self.attr('data-size') === 'fullscreen') {
    $self
      .closest('.docs__rwd-embed-container')
      .find('[data-behavior="toggle-rwd-close-fullscreen"')
      .focus()
    ;
  }

})

$('body').on('click', '[data-behavior~="toggle-rwd-close-fullscreen"]', function(event) {

  var $self = $(this);
  var $target = $self.closest('.docs__rwd-embed');
  var $targetComponent = $target.closest('.docs__rwd-demo-block');

  $target
    .removeClass('docs__rwd-embed--fullscreen')
    .addClass('docs__rwd-embed--desktop')
  ;

  $targetComponent
    .find('[data-size="phone"')
    .focus()
    .click()
  ;

})

$('body').on('change', '[data-behavior~="toggle-rwd-table"]', function(event) {

  var $self = $(this);
  var $target = $('#' + $self.data('target'));
  var $newClass = $self.val();

  $target.toggleClass('fsa-table--responsive-horizontal');

})

console.log('DocsRWD loaded, its JS is NOT to be used for Production, demo purposes only');1
