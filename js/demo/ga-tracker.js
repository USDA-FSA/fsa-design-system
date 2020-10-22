if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    id: '',
    trackerName: '',
    
    trackPhrase: function(phrase){
      console.log('GA Track', phrase)
      ga('send', 'event', gat.trackerName, 'search', phrase );
    },

    setupTracker: function(){
      ga('create', gat.id, 'auto', gat.trackerName );
    },
    
    init: function(gaId, trackerName) {
      gat.id = gaId;
      gat.trackerName = trackerName;
      gat.setupTracker()
    }

  };

 gat.init(
    'UA-171509374-1',
    'Quick Find'
  );

  window.GoogleTracker = gat;
}

