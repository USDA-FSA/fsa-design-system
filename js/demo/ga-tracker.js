if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    id: '',
    trackerName: '',
    
    trackPhrase: function(phrase){
      console.log('GA Track', phrase)
      window.ga('send', 'event', gat.trackerName, 'search', phrase );
    },

    setupTracker: function(){
      window.ga('create', gat.id, 'auto', gat.trackerName );
      console.log('ga',window.ga)
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

