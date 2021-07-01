
const icfTracker = {

  trackerName: 'Icon Finder',
  trackedPhrase: '',
  searchCollection: '',
  searchCollectionLimit: 100,
  searchCollectionPosts: 0,
  searchCollectionPostLimit: 3,

  getSearchCollection: function(){
    return icfTracker.searchCollection;
  },

  trackSelected: function(iconName){
    GoogleTracker.sendToGA('Icon Clicked', icfTracker.trackerName, iconName);
  },

  trackSearchCollection: function(str){
    if( icfTracker.searchCollection.length <= icfTracker.searchCollectionLimit ){
      icfTracker.searchCollection += ' ~ ' + str;
    } else {
      if(icfTracker.searchCollectionPosts <= icfTracker.searchCollectionPostLimit ){
        icfTracker.searchCollectionPosts++;
        icfTracker.trackFreeform( icfTracker.searchCollection );
        icfTracker.searchCollection = ' ~ ' + str;
      }
    }
  },

  trackSearchAbandon: function(){
    GoogleTracker.sendToGA('search abandon', icfTracker.trackerName);
  },

  trackFreeform: function(coll){
    GoogleTracker.sendToGA('search freeform', icfTracker.trackerName, coll);
  },

  trackLeavePage: function(){
    if((icfTracker.trackedPhrase == '') && (icfTracker.searchCollection != '')){
      icfTracker.trackFreeform( icfTracker.searchCollection );
      icfTracker.trackSearchAbandon();
    }
  },

  getTrackerName: function(){
    return icfTracker.trackerName;
  }

};

window.IconFinderTracker = icfTracker;

window.addEventListener('load', (evt)=>{  
  // nothing happening yet
});

window.addEventListener('beforeunload', function(evt){
  IconFinderTracker.trackLeavePage();
});