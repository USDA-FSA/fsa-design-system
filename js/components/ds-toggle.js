var Storage = require('../utilities/storage');
var Helper = require('../utilities/helper');

var Toggle = function () {

  var key, useStorage, toggle, toggleState, toggleHolder, holderClassPrefix;

  // Toggle ON setter
  var setOn = function(){
    var onElements = toggleHolder.querySelectorAll('.'+ holderClassPrefix + '__on');
    var offElements = toggleHolder.querySelectorAll('.'+ holderClassPrefix + '__off');

    Helper.forEach(onElements, function(index, el) { 
      el.style.visibility = "visible"
      el.style.display = "inline"
    })
    Helper.forEach(offElements, function(index, el) { 
      el.style.visibility = "hidden"
      el.style.display = "none"
    })
    setState(true);
  }

  // Toggle OFF setter
  var setOff = function(){
    var onElements = toggleHolder.querySelectorAll('.'+ holderClassPrefix + '__on');
    var offElements = toggleHolder.querySelectorAll('.'+ holderClassPrefix + '__off');

    Helper.forEach(onElements, function(index, el) { 
      el.style.visibility = "hidden"
      el.style.display = "none"
    })
    Helper.forEach(offElements, function(index, el) { 
      el.style.visibility = "visible"
      el.style.display = "inline"
    })
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

    holderClassPrefix = obj.holderClassPrefix;
    useStorage = obj.useStorage == false ? false : true;
    key = obj.toggleId + window.location.href
    toggleState = obj.isOnInit == true ? true : false;

    // Grab Toggle checkbox on page
    toggle = document.getElementById(obj.toggleId);
    // Grab Toggle Holder on page 
    toggleHolder = document.getElementById(obj.toggleHolderId);  

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

module.exports = Toggle;