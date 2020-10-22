if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    id: '',
    trackerName: '',
    
    trackPhrase: function(phrase){
      console.log('GA Track', phrase)
      gtag('event', 'search', {
        'event_category': gat.trackerName,
        'event_label': phrase
      });
    },
    
    init: function(gaId, trackerName) {
      gat.id = gaId;
      gat.trackerName = trackerName;
    }

  };

  gat.init(
    'UA-171509374-1',
    'Quick Find'
  );

  window.GoogleTracker = gat;
}

