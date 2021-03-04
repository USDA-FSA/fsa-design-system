
const components = {
  
  trackerName: 'Components',

  getTrackerName: function(){
    return home.trackerName;
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