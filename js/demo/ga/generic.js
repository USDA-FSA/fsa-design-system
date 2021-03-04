
const generic = {
  
  trackerName: 'Generic',

  setTrackerName: function( str ){
    generic.trackerName = str;
  },

  getTrackerName: function(){
    return generic.trackerName;
  }
};
window.addEventListener('load', (evt)=>{
  GoogleTracker.startScrollTracking();
});
/*
window.addEventListener('beforeunload', function(evt){
  //
});
*/