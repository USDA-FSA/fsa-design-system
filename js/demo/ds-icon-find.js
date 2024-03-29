if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const icf = {

    inputId: '',
    clearId: '',
    displayId: '',
    resultsCountId: '',
    search: '',
    results: '',
    filterId: '',
    filterCategories: [],
    resultsCount: '',
    iconsUrlsArray: [],
    iconsArray: [],
    iconsCount: 0,
    displayCount: 0,
    displayLimit: 0,
    showDefault: true,
    prevInputString: '',
    clickedIconsArray: [],
    clickedIconDelay: 3000,
    popularThreshold: 42,
    filterDefault: '',

    setSearchProperties: function(){
      icf.search = document.getElementById( icf.inputId );
      icf.results = document.getElementById( icf.displayId );
      icf.resultsCount = document.getElementById( icf.resultsCountId );
      icf.search.oninput = icf.searchInput();
      icf.getSource( icf.iconsUrlsArray, icf.getContent );
    },

    getSource: function( arr, callback ){
      if (window.XMLHttpRequest){
        arr.forEach( item => {
          let xhr = new XMLHttpRequest();
          //console.log('xhr', xhr)
          xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE) callback(this);
          }
          xhr.open( 'GET', item.url, true);
          xhr.send();
        })
      } else {
        console.log('no xhr')
      }
    },

    getContent: function(res){
      var json = JSON.parse(res.response);
      icf.filterCategories = json.categories;
      icf.iconsArray = icf.iconsArray.concat(json.icons);
      icf.iconsArray = icf.dedupeArrayOfObjects(icf.iconsArray);
      icf.iconsCount = icf.iconsArray.length;
      icf.iconsArray.sort( (a,b) => a.name - b.name );
      icf.buildIcons( icf.getDefaultIcons() );
      icf.buildFilter();
    },

    buildIcons: function(arr){
      icf.displayCount = arr.length;
      var newHTML = ``;
      arr.forEach( item => {
        // add FSA Style specific parameters
        let svg = String(item.svg).split('<svg ').join('<svg class="fsa-icon fsa-icon--size-4" aria-hidden="true" focusable="false" role="img"');
        let kw = String(item.keywords).split(',').join(', ');
        newHTML += `<a onclick="event.preventDefault(); IconFinder.copyToClipboard(this,'${item.name}');" `;
        newHTML += `id="${item.fileName}" title="${kw}" class="docs__icons__link" `;
        newHTML += `href="/fsa-design-system/img/material-design-icons/${item.fileName}"> `;
        newHTML += `<figure class="docs__icons__figure">${svg}</figure></figure> `;
        newHTML += `<figcaption class='docs__icons__caption'>${item.name}</figcaption> </a>`;
      });
      icf.buildIconsHolder(newHTML);
      icf.buildCountHolder(`<div class="fsa-level@m fsa-level--justify-between@m fsa-level--align-baseline@m"><div aria-live="polite">Previewing <strong>${icf.displayCount} of ${icf.iconsCount}</strong> available icons</div><div id="ds-icon-find__icon-list-desc" class="fsa-color--tertiary-300 fsa-font--sans fsa-text-size--3">Click an icon to copy its code snippet</div></div>`);
    },

    buildIconsHolder: function(newHTML){
      icf.results.innerHTML = newHTML;
    },

    buildCountHolder: function(txt){
      icf.resultsCount.innerHTML = txt;
    },

    buildFilter: function(){
      var filter = document.getElementById( icf.filterId );
      icf.popularThreshold = parseInt( filter.dataset.mostPopular );
      icf.filterCategories.forEach( item => {
        var option = document.createElement("option");
        option.value = item;
        option.text = item.charAt(0).toUpperCase() + item.slice(1);
        filter.appendChild(option);
      });
      icf.filterDefault = filter.value;
    },

    getDefaultIcons: function(){
      var arr = icf.iconsArray.filter( item => item.showDS == "true" ? true : false);
      return arr;
    },

    doSearch: function( phrase ){
      let arr = icf.iconsArray;
      let lowPhrase = phrase.toLowerCase();

      let list = arr.filter( item => {
        let exists = false;

        let lowName = item.name.toLowerCase();
        let lowKeywords = item.keywords.toLowerCase();

        if(lowName.indexOf( lowPhrase ) > -1) exists = true;
        if(lowKeywords.indexOf( lowPhrase ) > -1) exists = true;

        return exists
      });

      list = icf.dedupeArrayOfObjects(list);

      // Used to restrict how many icons to show 0 = unlimited.
      let listToDisplay = icf.displayLimit > 0 ? list.slice( 0, icf.displayLimit-1) : list;
      return listToDisplay;
    },

    searchInput: function(){
      return function(){

        if(icf.search.value!=''){ // isn't empty
          if(icf.search.value.length > 2){ // run only if at least 3 characters
            // aray of objects
            let matches = icf.doSearch( icf.search.value );

            // For Google Analytics Tracking - Track what is NOT Found
            if(matches.length < 1) icf.buildSearchCollection(icf.search.value);
            // End

            // Put matches in ABC order
            matches.sort( (a,b) => a.name - b.name );

            if( matches.length > 0 ) {
              icf.buildIcons(matches);
              document.getElementById( icf.filterId ).value = icf.filterDefault;
            }
          }
        } else {
          icf.buildIcons( icf.getDefaultIcons() );
        }
      }
    },

    setCategory: function(sel){
      var cat = sel.value;

      if(cat!=""){
        if(cat == "popular"){
          icf.buildIcons( icf.getPopularIcons(icf.popularThreshold) );
        } else {
          icf.buildIcons( icf.filterIcons(cat) );
        }
        IconFinderTracker.trackCategory( cat );
      } else {
        icf.buildIcons( icf.getDefaultIcons() );
        IconFinderTracker.trackCategory('Reset to Default');
      }
      icf.search.value = '';
    },

    filterIcons: function(cat){
      var arr = icf.iconsArray.filter( item => item.category == cat ? true : false);
      return arr;
    },

    getPopularIcons: function(threshold){
      // Use if you want the actual popularity value to be used as the threshold - Higher value = more popular
      //var arr = icf.iconsArray.filter( item => parseInt( item.popularity ) > threshold ? true : false);

      // Use if you want to the Top X to be used as a threshold
      icf.iconsArray.sort((a,b)=>{
        return  b.popularity - a.popularity;
      });
      var arr = icf.iconsArray.slice(0,threshold);
      /*
      Uncomment this out to populate the textarea with JSON 

      var val = `{
        "icons":[`
      arr.forEach((item)=>{
        val += `{
          "fileName": "${item.fileName}"
        },`
      })
      val += `]
    }`
      document.getElementById('thejson').value = val;
      */
      return arr;
    },

    copyToClipboard: function(el, iconName){
      // take all SVGs and turn Nodelist into an array
      var svgs = [...el.querySelectorAll('svg')];
      // grab the HTML string value of the object SVGElement
      var svg = svgs[0].outerHTML;
      navigator.clipboard.writeText(svg).then(function() {
        console.log("Copied ["+iconName+"] SVG to clipboard successfully!");
        // track in GA what was copied
        IconFinderTracker.trackSelected( iconName );
        icf.setClickedStyle(el);
      }, function() {
        console.error("Unable to write to clipboard.");
      });
    },

    setClickedStyle: function(el){
      icf.clickedIconsArray.push({
        prevHTML: el.innerHTML,
        el: el
      })
      el.classList.add('docs__icons__link--clicked');
      el.innerHTML = `<span class="fsa-level fsa-level--align-top fsa-level--gutter-xs"><span><svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span><span style="flex:0;">Copied to Clipboard</span></span>`;
      window.setTimeout(icf.resetIcon, icf.clickedIconDelay);
    },

    resetIcon: function(){
      let icons = icf.clickedIconsArray.forEach( (icon) => {
        icon.el.innerHTML = icon.prevHTML;
        icon.el.classList.remove('docs__icons__link--clicked');
      })
    },

    // A very expensive method, use sparingly
    dedupeArrayOfObjects: function( arr ){
      let uniqueArray = arr.filter((item, index) => {
        let _item = JSON.stringify(item);
        return index === arr.findIndex(obj => {
          return JSON.stringify(obj) === _item;
        });
      });
      return uniqueArray;
    },

    getClosest: function(elem, selector){
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
              var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                  i = matches.length;
              while (--i >= 0 && matches.item(i) !== this) {}
              return i > -1;
            };
      }
      // Get the closest matching element
      for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) {
          return elem;
        } else {
          if ( elem.querySelectorAll( selector ).length > 0 ) return elem.querySelectorAll( selector );
        }
      }
      return null;
    },

    // For Google Analytics Tracking
    buildSearchCollection: function(str){
      let isValid = true;
      // string must be longer than previous string
      if(str.length < icf.prevInputString.length) isValid = false;
      icf.prevInputString = str;
      // string must be more than 2 characters
      if(str.length < 3) isValid = false;
      // if string is not all spaces
      let patt = /[ ]{2,}/;
      if( patt.test( str ) ) isValid = false;
      // if string is not in collection
      let sc = IconFinderTracker.getSearchCollection()
      if(sc.indexOf( '~ '+ str +' ~' ) > -1) isValid = false;

      if(isValid){
        IconFinderTracker.trackSearchCollection(str);
      }
    },
    // End

    init: function( arr, inputId, displayId, countId, filterId) {
      icf.iconsUrlsArray = arr;
      icf.inputId = inputId;
      icf.displayId = displayId;
      icf.resultsCountId = countId;
      icf.filterId = filterId;
      icf.setSearchProperties();
    }

  };

  /*
    Looping over an array of objects, the below will initiate a search for the Text and closest link related CSS Class
  */
  icf.init(
    [
      {
        url:'/fsa-design-system/data/icons.json',
      }
    ],
    'ds-icon-find',
    'ds-icon-find-results-id',
    'ds-icon-find__icon-list-title-id',
    'ds-icon-filter'
  );

  window.IconFinder = icf;
}