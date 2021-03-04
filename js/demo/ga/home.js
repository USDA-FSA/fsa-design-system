
const home = {
  
  trackerName: 'Home Page',

  setTrackerName: function( str ){
    home.trackerName = str;
  },

  getTrackerName: function(){
    return home.trackerName;
  }
};
window.addEventListener('load', (evt)=>{
  let pn = GoogleTracker.getPageName();
  home.setTrackerName( pn )
  GoogleTracker.startScrollTracking();
});
/*
window.addEventListener('beforeunload', function(evt){
  //
});
*/