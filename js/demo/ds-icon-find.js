if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const icf = {

    inputId: '',
    clearId: '',
    displayId: '',
    resultsCountId: '',
    search: '',
    results: '',
    resultsCount: '',
    iconsUrlsArray: [],
    iconsArray: [],
    iconsCount: 0,
    displayCount: 0,
    displayLimit: 0,
    showDefault: true,

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
      icf.iconsArray = icf.iconsArray.concat(json.icons);
      icf.iconsArray = icf.dedupeArrayOfObjects(icf.iconsArray);
      icf.iconsCount = icf.iconsArray.length;
      icf.iconsArray.sort( (a,b) => a.name - b.name );
      icf.buildIcons( icf.getDefaultIcons() );
    },

    buildIcons: function(arr){
      icf.displayCount = arr.length;
      var newHTML = ``;
      arr.forEach( item => {
        // add FSA Style specific parameters
        let svg = String(item.svg).split('<svg ').join('<svg class="fsa-icon fsa-icon--size-4" aria-hidden="true" focusable="false" role="img"');
        let kw = String(item.keywords).split(',').join(', ');
        newHTML += `<a id="${item.fileName}" title="${kw}" class="docs__icons__link" href="/fsa-design-system/img/material-design-icons/${item.fileName}"> <figure class="docs__icons__figure">${svg}</figure></figure> <figcaption class='docs__icons__caption'>${item.name}</figcaption> </a>`;
      });
      icf.buildIconsHolder(newHTML);
      icf.buildCountHolder(`Previewing <strong>${icf.displayCount} of ${icf.iconsCount}</strong> available icons`);
    },

    buildIconsHolder: function(newHTML){
      icf.results.innerHTML = newHTML;
    },

    buildCountHolder: function(txt){
      icf.resultsCount.innerHTML = txt;
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
          if(icf.search.value.length > 1){ // run only if at least 2 characters

            //icf.search.setAttribute('aria-expanded', 'true');

            // aray of objects
            let matches = icf.doSearch( icf.search.value );

            // For Google Analytics Tracking
            //if(matches.length < 1) icf.buildSearchCollection(icf.search.value);
            // End

            // Put matches in ABC order            
            matches.sort( (a,b) => a.name - b.name );

            if( matches.length > 0 ) icf.buildIcons(matches);
          }
        } else {
          icf.buildIcons( icf.getDefaultIcons() );
        }
      }
    },

    handleSearchInputKeydown: function(e){
      // ESC
      if(e.keyCode==27) icf.closeResults()
      // DOWN ARROW
      if(e.keyCode==40){
        e.preventDefault();
        let el = icf.results.querySelector('a');
        if(el) el.focus()
      }
    },

    handleResultsFocus: function(e){

      let prevElem = icf.prevElem;
      let currElem = document.activeElement;
      if( icf.prevElem ) icf.resultsNavFrom( icf.prevElem  );
      if( currElem ) icf.resultsNavTo( currElem );
      icf.prevElem = currElem;

    },

    handleResultsKeydown: function(e){

      let currElem = document.activeElement;

      // Listen for ESC key when results in focus
      if(e.keyCode==27){
        e.preventDefault();
        icf.closeResults();
      }
      // Listen for DOWN key when results in focus
      if(e.keyCode==40) {
        e.preventDefault();

        let nextSib = currElem.parentNode.nextSibling;
        if(nextSib) {
          let sibAnchor = nextSib.querySelector('a');
          if(sibAnchor) {
            sibAnchor.focus();
          } else {
            let cousin = nextSib.nextSibling;
            if(cousin){
              let cousinAnchor = cousin.querySelector('a');
              if(cousinAnchor) cousinAnchor.focus();
            }
          }
        }
      }

      // Listen for UP key when results in focus
      if(e.keyCode==38) {
        e.preventDefault();
        let prevSib = currElem.parentNode.previousSibling;
        if(prevSib) {
          let sibAnchor = prevSib.querySelector('a');
          if(sibAnchor) {
            sibAnchor.focus();
          } else {
            let cousin = prevSib.previousSibling;
            if(cousin){
              let cousinAnchor = cousin.querySelector('a');
              if(cousinAnchor) cousinAnchor.focus();
            }
          }
        }
      }

      // Listen for TAB key when results in focus
      if(e.keyCode==9){
        e.preventDefault();
        // SHIFT+TAB
        if( e.shiftKey && e.keyCode==9 ){
          icf.resultsNavFrom( currElem );
          icf.search.focus();
        } else {
          // window.location = currElem.href;
          icf.resultsNavFrom( currElem );
          icf.clear.focus();
        }
      }

      // Listen for SPACE key when results in focus
      if(e.keyCode==32) {
        e.preventDefault();
        icf.navigateTo( currElem.href, currElem.innerText );
      }

    },


    resultsNavTo: function( node ){
      node.parentElement.setAttribute('aria-selected', 'true');
    },

    resultsNavFrom: function( node ){
      node.parentElement.setAttribute('aria-selected', 'false');
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

    init: function( arr, inputId, displayId, countId) {
      icf.iconsUrlsArray = arr;
      icf.inputId = inputId;
      icf.displayId = displayId;
      icf.resultsCountId = countId
      icf.setSearchProperties();
    }

  };

  /*
    Looping over an array of objects, the below will initiate a search for the Text and closest link related CSS Class
  */
  icf.init(
    [
      {
        //url:'/fsa-design-system/sitemap/',
        url:'/fsa-design-system/data/icons.json',
      }
    ],
    'ds-icon-find',
    'ds-icon-find-results-id',
    'ds-icon-find__icon-list-title-id'
  );

  window.IconFind = icf;
}

