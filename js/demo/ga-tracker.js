if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    id: '',
    onProduction: true,
    trackerName: '',
    trackedPhrase: '',
    searchCollection: '',
    searchCollectionLimit: 100,
    searchCollectionPosts: 0,
    searchCollectionPostLimit: 3,

    getSearchCollection: function(){
      return gat.searchCollection;
    },
    
    trackPhrase: function(phrase){
      gat.trackedPhrase = phrase;
      if(gat.onProduction){
        gtag('event', 'search', {
          'event_category': gat.trackerName,
          'event_label': phrase
        });
      }
    },

    trackSearchCollection: function(str){
      if( gat.searchCollection.length <= gat.searchCollectionLimit ){
        gat.searchCollection += ' ~ ' + str;
      } else {
        if(gat.searchCollectionPosts <= gat.searchCollectionPostLimit ){
          gat.searchCollectionPosts++;
          gat.trackFreeform( gat.searchCollection );
          gat.searchCollection = ' ~ ' + str;
        }
      }
    },

    trackSearchAbandon: function(){
      if(gat.onProduction){
        gtag('event', 'search abandon', {
          'event_category': gat.trackerName
        });
      }
    },

    trackFreeform: function(coll){
      if(gat.onProduction){
        gtag('event', 'search freeform', {
          'event_category': gat.trackerName,
          'event_label': coll
        });
      }
    },

    trackLeavePage: function(){
      if(gat.trackedPhrase == ''){
        if(gat.searchCollection != ''){
          gat.trackFreeform( gat.searchCollection );
          gat.trackSearchAbandon();
        }
      }
    },
    
    init: function(gaId, trackerName) {
      gat.id = gaId;
      gat.trackerName = trackerName;
      gat.onProduction = window.location.href.indexOf('localhost:') > -1 ? false : true;
      window.addEventListener('beforeunload', function(evt){
        gat.trackLeavePage();
      });
    }

  };

  gat.init(
    'UA-171509374-1',
    'Quick Find'
  );

  window.GoogleTracker = gat;
}

