if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    ga: {},
    id: '',
    trackerName: '',
    
    trackPhrase: function(phrase){
      console.log('GA Track', phrase)
      gat.ga('send', 'event', gat.trackerName, 'search', phrase );
    },

    setupTracker: function(){
      gat.ga('create', gat.id, 'auto', gat.trackerName );
    },
    
    init: function(ga, gaId, trackerName) {
      gat.ga = ga;
      gat.id = gaId;
      gat.trackerName = trackerName;
      gat.setupTracker()
    }

  };

 gat.init(
    window.ga,
    'UA-171509374-1',
    'Quick Find'
  );

  window.GoogleTracker = gat;
}

