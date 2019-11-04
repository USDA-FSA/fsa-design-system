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

$('body').on('click', '[data-behavior~="fakeSystemTrackAddition"]', function(event) {

  const $self = $(this);
  const $target = $('#' + $self.attr('data-target'));
  const updateValueBy = 10;
  const $targetValue = $target.closest('.fsa-progress').find('.fsa-progress__value');
  const currentValue = $targetValue.html().slice(0, -1);
  const newValue = Number(updateValueBy) + Number(currentValue);

  if (newValue >= 100) {
    $target.css('transform','scaleX(1)');
    $targetValue.html('100%');
    $self.attr('disabled', true);
  } else {
    $target.css('transform','scaleX(.' + newValue + ')');
    $targetValue.html(newValue + '%');
  }

})

$('body').on('click', '[data-behavior~="toggleProgressBars"]', function(event) {

  const $bars = $('.fsa-progress');

  if ($bars.is('[style]')) {
    $bars.removeAttr('style');
  } else {
    $bars.css('visibility', 'hidden');
  }

})

$('body').on('click', '[data-behavior~="fakeSystemTrackLoop"]', function(event) {

  const $self = $(this);
  const $target = $('#' + $self.attr('data-target'));
  const $targetBar = $target.find('.fsa-progress__primary');
  const $targetValue = $target.find('.fsa-progress__value');

  $self.css('visibility','hidden');
  $targetBar.css('transform','scaleX(.03)');
  $targetValue.html('3%');

  for (percentageComplete = 10; percentageComplete <= 97; ++percentageComplete) {
    fakeProgressUpdate(percentageComplete);
  }

  function fakeProgressUpdate(percentageComplete) {

    setTimeout(function(){
      // console.log("'percentageComplete' is " + percentageComplete + ", and 'delay' is " + (66 * percentageComplete));
      $targetBar.css('transform','scaleX(.' + percentageComplete +')');
      $targetValue.html(percentageComplete + '%');
    }, 66 * percentageComplete);

  }

  setTimeout(function(){
    $targetValue.html('100%');
    $targetBar.css('transform','scaleX(1)');
    $self.removeAttr('style');

    $('#UNIQUE-ID-ttfrancbra').attr('aria-hidden', 'false');

  }, 7000);

})

$('body').on('click', '[data-behavior~="toggleTableProgress"]', function(event) {
  $('#tableProgress').toggle();
})

$('body').on('click', '[data-behavior~="fakeTableDone"]', function(event) {
  $('#tableProgress').attr('hidden', true);
})

$('body').on('click', '[data-behavior~="fakeTableShow"]', function(event) {
  $('#tableProgress').removeAttr('hidden');
})

console.log('ProgressComponent loaded, its JS is NOT to be used for Production, demo purposes only');1
