if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const gat = {

    id: '',
    onProduction: true,
    trackerName: '',
    trackingScroll: false,
    currentScrollPercent: 0,
    io: {},
    headerList: [],

    trackAction: function(trackerName, action, label){
      gat.sendToGA(action, trackerName, label);
    },

    trackScrollDepth: function(trackerName, perc){
      gat.sendToGA('Scroll Percent', trackerName, perc);
    },

    trackViewport: function(elem){
      let target = elem[0].target;
      let label = target.textContent
      if(!gat.headerList.includes(label)){
         gat.headerList.push(label);
         gat.sendToGA('Scroll', 'Viewed Content', gat.getPageName() + ' - ' + label)
      }
    },

    startScrollTracking: function(){

      let options = { threshhold: 0.75 };
      gat.io = new IntersectionObserver( gat.trackViewport, options );
      let h2s = document.getElementsByTagName('h2');
      if(h2s.length>0){
        gat.io.POLL_INTERVAL = 300; //milliseconds
        for(let elem of h2s){
          gat.io.observe(elem)
        }
      }
      
      /*
      KEEP for Percent tracking
      gat.trackingScroll = true;
      window.addEventListener('scroll', (evt)=>{
        // Calculate scroll position and if it is a multiple of 10, record that value
        // This prevents constantly recording the pages scrolled percent in GA 
        let perc = Math.ceil( ((gat.getWindowYScroll() + gat.getWindowHeight()) / gat.getDocHeight()) * 100);
        if((perc % 10 == 0) && (perc != gat.currentScrollPercent)){
          gat.trackScrollDepth(gat.getPageName(), perc);
          gat.currentScrollPercent = perc;
        }
      });
      */
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

    trackReturnToTop: function(){
      gat.sendToGA('search', phrase);
    },

    getPageName: function(){
      let pageName = window.location.href.split('fsa-design-system/')[1];
      if(pageName == 'index.html' || pageName == '') pageName = 'home';
      return pageName;
    },

    sendToGA: function(typ, cat='', lab=''){
      if(gat.onProduction){
        let eventObject = {};
        if(cat!='') eventObject['event_category'] = cat;
        if(lab!='') eventObject['event_label'] = lab;
        gtag('event', typ, eventObject);
        //gtag('event', typ, { 'event_category': cat, 'event_label': lab });
      } else {
        console.log('GA TRACKING: ' + typ + " | " + cat + " | " + lab)
      }
    },

    setTrackerName: function(trackerName){
      gat.trackerName = trackerName;
    },
    
    init: function(gaId) {
      gat.id = gaId;
      gat.onProduction = ((window.location.href.indexOf('localhost:') > -1) || (window.location.href.indexOf('127.0.0.1:') > -1)) ? false : true;
    }

  };

  gat.init(
    'UA-171509374-1'
  );

  window.GoogleTracker = gat;
}