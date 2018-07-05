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

var Helper = require('../utilities/helper');

var selectMulti__triggers = document.querySelectorAll('[data-behavior~="select-multi"]');

// iterate thru trigger elements and set click handler
Helper.forEach(selectMulti__triggers, function(index, value) {
  var _el = value;
  _el.addEventListener('click', function(e){

    var _check = e.target;
    //var _parent = el.closest('.fsa-select-multi');
    var _parent = Helper.getClosest(_el, '.fsa-select-multi');
    var _selectAll = _parent.querySelector('[data-behavior~="select-multi-all"]');

    if(_el != _selectAll){

      var _len = _parent.querySelectorAll('[data-behavior~="select-multi"]').length;
      var _lenChecked = _parent.querySelectorAll('[data-behavior~="select-multi"]:checked').length
      var _count = _len - _lenChecked;

      if( _el.checked){
        if(!_selectAll.checked){
          if( _count <= 1 ){
            _selectAll.indeterminate = false;
            _selectAll.checked = true;
          } else {
            _selectAll.indeterminate = true;
            _selectAll.checked = false;
          }
        }
      } else {
        if(_selectAll.checked){
          _selectAll.indeterminate = true;
          _selectAll.checked = false;
        } else if(_count == (_len)) {
          _selectAll.indeterminate = false;
          _selectAll.checked = false;
        }
      }

    } else {
      var _cbs = _parent.querySelectorAll('[data-behavior~="select-multi"]');
      Helper.forEach(_cbs, function (index, value) {
        value.checked = _selectAll.checked;
      });
      _selectAll.indeterminate = false;
    }

  }, false);
});

function selectMulti__setState(){

  var _selectAll = document.querySelectorAll('[data-behavior~="select-multi-all"]');
  Helper.forEach(_selectAll, function (index, value) {

    //console.log(typeof value);
    //var _parent = value.closest('.fsa-select-multi');
    var _parent = Helper.getClosest(value, '.fsa-select-multi');
    var _selectAll = value;

    var _len = _parent.querySelectorAll('[data-behavior~="select-multi"]').length;
    var _lenChecked = _parent.querySelectorAll('[data-behavior~="select-multi"]:checked').length
    var _count = _len - _lenChecked;

    if( _count <= 1 ){
      _selectAll.indeterminate = false;
      _selectAll.checked = true;
    } else {
      _selectAll.indeterminate = true;
      _selectAll.checked = false;
    }
  });
}


selectMulti__setState();

console.log('SelectMultipleComponent loaded, its JS is NOT to be used for Production, demo purposes only');
