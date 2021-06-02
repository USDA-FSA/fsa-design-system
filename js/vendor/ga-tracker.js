if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    id: '',
    onProduction: true,
    trackerName: '',
    trackedAction: '',
    trackingScroll: false,
    docsObj: {},
    currentScrollPercent: 0,

    getSearchCollection: function(){
      return gat.searchCollection;
    },
    
    trackAction: function(action, label){
      gat.trackedAction = action;
      gat.sendToGA(action, gat.trackerName, label);
    },

    trackScrollDepth: function(perc){
      //console.log('Scroll % -- ', perc)
      gat.sendToGA('Scroll Percent', gat.trackerName, perc);
    },

    trackDocs: function(action, label){
      gat.docsObj.action = action;
      gat.docsObj.label = label;
    },

    trackLeavePage: function(){
      if(gat.trackingScroll){
        // record last scroll percent
        gat.sendToGA('Last Scroll', gat.trackerName, gat.currentScrollPercent);
        gat.trackingScroll = false;
      }
      if(gat.docsObj.action != null){
        // record Docs button clicked
        gat.sendToGA(gat.docsObj.action, gat.trackerName, gat.docsObj.label);
      }
    },

    startScrollTracking: function(){
      gat.trackingScroll = true;
      window.addEventListener('scroll', (evt)=>{
        // Calculate scroll position and if it is a multiple of 10, record that value
        // This prevents constantly recording the pages scrolled percent in GA 
        let perc = Math.ceil( ((gat.getWindowYScroll() + gat.getWindowHeight()) / gat.getDocHeight()) * 100);
        if((perc % 10 == 0) && (perc != gat.currentScrollPercent)){
          gat.trackScrollDepth(perc);
          gat.currentScrollPercent = perc;
        }
      });
    },

    /*
      Get current browser viewpane heigtht
    */
    getWindowHeight: function(){
      return window.innerHeight || 
        document.documentElement.clientHeight ||
        document.body.clientHeight || 0;
    },
    
    /*
      Get current absolute window scroll position
    */
    getWindowYScroll: function(){
      return window.pageYOffset || 
        document.body.scrollTop ||
        document.documentElement.scrollTop || 0;
    },
    
    /*
      Get current absolute document height
    */
    getDocHeight: function(){
      return Math.max(
        document.body.scrollHeight || 0, 
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0, 
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0, 
        document.documentElement.clientHeight || 0
      );
    },

    /*
      NOT IN USE CURRENTLY

      returns true if element in viewport, false if not
    */
    isInViewport: function(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    sendToGA: function(typ, cat, lab){
      if(gat.onProduction){
        gtag('event', typ, { 'event_category': cat, 'event_label': lab });
      } else {
        console.log('GA TRACKING: ' + typ + " | " + cat + " | " + lab)
      }
    },

    setTrackerName: function(trackerName){
      gat.trackerName = trackerName;
    },
    
    init: function(gaId) {
      gat.id = gaId;
      gat.onProduction = window.location.href.indexOf('localhost:') > -1 ? false : true;
      window.addEventListener('beforeunload', function(evt){
        gat.trackLeavePage();
      });
    }

  };

  gat.init(
    'UA-171509374-2'
  );

  window.GoogleTracker = gat;
}