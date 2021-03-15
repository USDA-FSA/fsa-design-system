
const qf = {

  trackerName: 'Quick Find',
  trackedPhrase: '',
  searchCollection: '',
  searchCollectionLimit: 100,
  searchCollectionPosts: 0,
  searchCollectionPostLimit: 3,

  getSearchCollection: function(){
    return qf.searchCollection;
  },

  trackPhrase: function(phrase){
    qf.trackedPhrase = phrase;
    GoogleTracker.sendToGA('search', qf.trackerName, phrase);
  },

  trackSearchCollection: function(str){
    if( qf.searchCollection.length <= qf.searchCollectionLimit ){
      qf.searchCollection += ' ~ ' + str;
    } else {
      if(qf.searchCollectionPosts <= qf.searchCollectionPostLimit ){
        qf.searchCollectionPosts++;
        qf.trackFreeform( qf.searchCollection );
        qf.searchCollection = ' ~ ' + str;
      }
    }
  },

  trackSearchAbandon: function(){
    GoogleTracker.sendToGA('search abandon', qf.trackerName);
  },

  trackFreeform: function(coll){
    GoogleTracker.sendToGA('search freeform', qf.trackerName, coll);
  },

  trackLeavePage: function(){
    if((qf.trackedPhrase == '') && (qf.searchCollection != '')){
      qf.trackFreeform( qf.searchCollection );
      qf.trackSearchAbandon();
    }
  },

  getTrackerName: function(){
    return qf.trackerName;
  }

};

window.QuickFindTracker = qf;

window.addEventListener('load', (evt)=>{  
  // nothing happening yet
});

window.addEventListener('beforeunload', function(evt){
  QuickFindTracker.trackLeavePage();
});