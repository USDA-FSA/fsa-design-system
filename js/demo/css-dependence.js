$(document).ready(function(){
  $('body').on('click', '[data-behavior~="strip-styles"]', function() {
    $('link[rel=stylesheet]').remove();
  });
});
