var Storage = require('../utilities/storage');

var PageToggle = function () {

  var key, toggle, toggleState, toggleId, bodyClass, useStorage;

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
    toggle.checked = toggleState = bool;
    if(useStorage) Storage.setToggleState(key, bool);
  }

  // Set initial state of page/show code checkbox
  var setInitialState = function(){ toggleState ? setOn() : setOff() }

  var init = function( obj ){
    key = obj.key;
    toggleId = obj.toggleId;
    bodyClass = obj.bodyClass;
    useStorage = obj.useStorage == false ? false : true;
    toggleState = false;

    // Grab Toggle checkbox on page
    toggle = document.getElementById(toggleId);    

    // check to make sure toggle exists on page, then set change handler
    if(toggle){ 
      if(useStorage) toggleState = Storage.getToggleState(key)
      // delay initialize code so that is runs last on page
      setTimeout( setInitialState, 200);

      toggle.addEventListener('change', function(e){
        toggleState ? setOff() : setOn()
      }, false);
    }
  }

  //Object Literal Return
  return {
    init: init // expects an Object
  };

};

module.exports = PageToggle;