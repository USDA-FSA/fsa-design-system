$(document).ready(function(){

  $('body').on('change', '[data-behavior~="select-table-row"]', function(event) {
    const $self = $(this);
    const $row = $self.closest('tr');
    $row.toggleClass('fsa-table__row--selected');
    console.log('row toggled');
  })

  $('body').on('change', '[data-behavior~="select-table-all"]', function(event) {
    const $self = $(this);
    const $table = $self.closest('table');

    const $checkbox = $table.find('.fsa-checkbox:not([disabled])');

    if ($self.is(':checked')) {
      $checkbox.attr('checked', true);
    }
    else {
      $checkbox.attr('checked', false);
    }

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

});

