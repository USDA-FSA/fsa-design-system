var Helper = require('../utilities/helper');

var _code_toggle = document.querySelectorAll('[data-behavior~="toggle-xray"]');

Helper.forEach(_code_toggle, function(index, value) {

  var _el = value;

  _el.addEventListener('change', function(e){
    document.body.classList.toggle('x-ray');
  }, false);

});