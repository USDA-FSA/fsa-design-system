const $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="select-table-row"]', function(event) {
  const $self = $(this);
  const $row = $self.closest('tr');
  $row.toggleClass('fsa-table__row--selected');
  console.log('row toggled');
})

$('body').on('change', '[data-behavior~="select-one-table-row"]', function(event) {
  const $self = $(this);
  const $row = $self.closest('tr');
  $row
    .addClass('fsa-table__row--selected')
    .siblings('tr')
      .removeClass('fsa-table__row--selected')
    ;
  ;
})
