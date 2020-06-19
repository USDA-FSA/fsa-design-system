var Storage = (function () {

  var defaults = { toggleState: false };

  //PRIVATE METHODS

  var _getStorage = function(key) {
    return JSON.parse( window.localStorage.getItem(key) );
  };

  var _setStorage = function( lso ){
    window.localStorage.setItem( lso.key, JSON.stringify( lso ) );
  };

  var _getToggleState = function(key){
    var store = _getStorage(key);
    var toggleState = false;

    if(store) toggleState = store.toggleState ? store.toggleState : defaults.toggleState;
    else toggleState = defaults.toggleState;

    return toggleState;
  };

  var _setToggleState = function(key, val){
    var lso = { key: key, toggleState: val };
    return _setStorage(lso)
  };

  // PUBLIC METHODS

  var getToggleState = function(key){ return _getToggleState(key) }; 
  var setToggleState = function(key, val){ _setToggleState(key, val) };

  //Object Literal Return
  return {
    getToggleState: getToggleState,
    setToggleState: setToggleState
  };

})();

module.exports = Storage;
