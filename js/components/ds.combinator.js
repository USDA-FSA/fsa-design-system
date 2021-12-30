global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$('body').on('change', '[data-behavior~="combinator-select"]', function(event) {

  var $self = $(this);
  var $target = $('#combinatorTarget');
  var $removals = $self.attr('data-remove');

  console.log('Need to account for icon sizes. IOW, there were will nested instances that need to be toggled, inserted, etc.');

  $target
    .removeClass($removals)
    .addClass($self.val())
  ;

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
  var $iconTarget = $('#' + $self.attr('data-icon-target'));

  if($iconTarget.attr('hidden')) {
    $iconTarget.removeAttr('hidden');
  } else {
    $iconTarget.attr('hidden', true);
  }

})

// combinator-select