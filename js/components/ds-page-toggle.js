var Storage = require('../utilities/storage');

var PageToggle = function () {

  var key, toggle, toggleId, bodyClass;

  // Toggle ON setter
  var setOn = function(){
    document.body.classList.add(bodyClass);
    setState(true);
  }

  // Toggle OFF setter
  var setOff = function(){
    document.body.classList.remove(bodyClass);
    setState(false);
  }

  // State setter
  var setState = function(bool){
    toggle.checked = bool;
    Storage.setToggleState(key, bool);
  }

  // Set initial state of page/show code checkbox
  var setInitialState = function(){ Storage.getToggleState(key) ? setOn() : setOff() }

  var init = function( obj ){

    key = obj.key;
    toggleId = obj.toggleId;
    bodyClass = obj.bodyClass;

    // Grab Toggle checkbox on page
    toggle = document.getElementById(toggleId);

    // check to make sure show code exists on page, then set change handler
    if(toggle){ 
      toggle.addEventListener('change', function(e){
        Storage.getToggleState(key) ? setOff() : setOn()
      }, false);
      // delay initialize code so that is runs last on page
      setTimeout( setInitialState, 200);
    }
  }

  //Object Literal Return
  return {
    init: init // expects an Object
  };

};

module.exports = PageToggle;