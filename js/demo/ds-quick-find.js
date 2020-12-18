if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const qf = {

    inputId: '',
    clearId: '',
    resultsId: '',
    search: '',
    results: '',
    resultsCount: '',
    pagesArray: [],
    searchUrl: '',
    cssClass: '',
    searchArray: [],
    displayCount: 8,
    prevElem: '',
    prevInputString: '',
    keywords: '',
    newHTML: '',

    setSearchProperties: function(){
      qf.search = document.getElementById( qf.inputId );
      qf.clear = document.getElementById( qf.clearId );
      qf.results = document.getElementById( qf.resultsId );
      qf.resultsCount = document.getElementById( qf.resultsCountId );
      qf.search.oninput = qf.searchInput();
      qf.getSource( qf.pagesArray, qf.getContent );
    },

    getSource: function( arr, callback ){
      if (window.XMLHttpRequest){
        arr.forEach( item => {
          let xhr = new XMLHttpRequest();
          //console.log('xhr', xhr)
          xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE) callback(this, item.url);
          }
          xhr.open( 'GET', item.url, true);
          xhr.send();
        })
      } else {
        console.log('no xhr')
      }
    },

    getContent: function(res, url){
      let fakeDOM = document.createElement('html');
      fakeDOM.innerHTML = res.response;

      let tier1 = fakeDOM.querySelectorAll( 'a.js-quick-find--tier1' );
      let tier2 = fakeDOM.querySelectorAll( 'a.js-quick-find--tier2' );
      let tier3 = fakeDOM.querySelectorAll( 'a.js-quick-find--tier3' );

      tier1.forEach( node => qf.addToSearchList(node, 1) );
      tier2.forEach( node => qf.addToSearchList(node, 2) );
      tier3.forEach( node => qf.addToSearchList(node, 3) );
    },

    addToSearchList: function(node, tier){
      let ancestors = {parent: null, grandParent: null, header: null};
      if(tier == 3){
        ancestors.parent = qf.getClosest(node, 'a.js-quick-find--tier2')[0].text;
        ancestors.grandParent = qf.getClosest(node, 'a.js-quick-find--tier1')[0].text;
        ancestors.header = ancestors.grandParent;
      } else if(tier == 2){
        ancestors.parent = qf.getClosest(node, 'a.js-quick-find--tier1')[0].text;
        ancestors.header = ancestors.parent;
      }
      let newUrl = node.getAttribute('href')
      if(newUrl) qf.searchArray.push(
        {
          text: node.innerText.trim(),
          url: newUrl,
          tier: tier,
          ancestors: ancestors,
          keywords: node.dataset.keywords != '' ? node.dataset.keywords : ''
        });
    },

    doSearch: function( phrase ){
      let arr = qf.dedupeArrayOfObjects( qf.searchArray );
      let lowPhrase = phrase.toLowerCase();

      /*
      let pagesList = arr.filter( item => {
        let lowCategory = item.text.toLowerCase()
        if(lowCategory.indexOf( lowPhrase ) > -1) return true
        else return false
      });

      let keywordsList = arr.filter( item => {
        let lowKeywords = item.keywords.toLowerCase();
        let kwList = lowKeywords.split(',');
        let exists = false;
        kwList.forEach( item2 => {
          if(item2 == lowPhrase) exists = true
          else exist = false
        })
        return exists;
      })
      */

      let list = arr.filter( item => {
        let exists = false;

        let lowCategory = item.text.toLowerCase()
        let lowKeywords = item.keywords.toLowerCase();

        if(lowCategory.indexOf( lowPhrase ) > -1) exists = true;
        if(lowKeywords.indexOf( lowPhrase ) > -1) exists = true;

        return exists
      });

      list = qf.dedupeArrayOfObjects(list);

      let listToDisplay = list.slice( 0, qf.displayCount-1);
      qf.resultsCount.innerText = listToDisplay.length + ' results';
      return listToDisplay;
    },

    searchInput: function(){
      return function(){


        if(qf.search.value!=''){ // isn't empty
          if(qf.search.value.length > 1){ // run only if at least 2 characters

            qf.search.setAttribute('aria-expanded', 'true');

            let preHTML = '<ul class="ds-quick-find__output" role="listbox">';

            // aray of objects
            let matches = qf.doSearch( qf.search.value );

            // For Google Analytics Tracking
            if(matches.length < 1) qf.buildSearchCollection(qf.search.value);
            // End

            let tier1 = matches.filter( item => item.tier == 1 );
            tier1.sort((a, b) => (a.text < b.text) ? 1 : -1)

            let subgroups = matches.filter( item => item.tier > 1 );
            subgroups.sort((a, b) => (a.text > b.text) ? 1 : -1)
            subgroups.sort((a, b) => (a.ancestors.header > b.ancestors.header) ? 1 : -1)

            if( tier1.length > 0 ) qf.buildTierOne(tier1);

            if( subgroups.length > 0) qf.buildSubgroups(subgroups);

            /*
            if(qf.keywords != ''){
              preHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">Related Keywords</li>`;
              preHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                          ${qf.keywords}
                        </>`;
            }
            */

            qf.newHTML = preHTML + qf.newHTML + '</ul>';
            qf.results.innerHTML = qf.newHTML;
            qf.newHTML = '';
          }
        } else {
          qf.closeResults();
        }
      }
    },

    getMatchedPages: function(matchObject){
      let pages = '';
      pages = matchObject.text.replace( qf.getSearchRegex(), (str) => '<mark>'+ str + '</mark>');
      return pages;
    },

    getKeywords: function(matchObject){
      let arr = matchObject.keywords.split(',');
      let arr2 = [];
      arr.forEach( item => {
        let kw = item.toLowerCase();
        let phrase = qf.search.value.toLowerCase();
        if( kw.indexOf(phrase) > -1 ){
          arr2.push( item.replace( qf.getSearchRegex(), (str) => '<mark>'+ str + '</mark>') )
        }
      })
      return arr2.length > 1 ? arr2.join(', ') : arr2[0];
    },

    getSearchRegex: function(){
      return new RegExp(qf.search.value, 'gi');
    },

    buildTierOne: function(tier){
      tier.forEach( item => {

        let keywords = qf.getKeywords(item);
        keywords = keywords ? '<span title="Also known as"> ' + keywords + '</span>' : '';
        let newText = qf.getMatchedPages(item);

        qf.newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
            <a onclick="QuickFind.navigateTo('${item.url}', this.innerText); return false;" class="ds-quick-find__output-link" href="">
              <span class="ds-quick-find__text">${newText}</span>
              <span class="ds-quick-find__keyword">${keywords}</span>
            </a>
          </li>`;
        qf.keywords += ' ' + keywords;
      })
    },

    buildSubgroups: function(subgroups){
      let prevHeader = '';
      // Used for typed string Highlight
      let regex = new RegExp(qf.search.value, 'gi');
      subgroups.forEach( item => {

        let newText = qf.getMatchedPages(item);
        let newParentText = item.ancestors.parent.replace(regex, (str) => '<mark>'+ str + '</mark>');

        let keywords = qf.getKeywords(item);
        keywords = keywords ? '<span title="Also known as"> ' + keywords + '</span>' : '';

        if( item.tier == 2){
          if(prevHeader != item.ancestors.header){
            qf.newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
                             ${item.ancestors.parent}
                           </li>`
          }
          prevHeader = item.ancestors.header;
          qf.newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                           <a onclick="QuickFind.navigateTo('${item.url}', this.innerText); return false;" class="ds-quick-find__output-link" href="">
                             <span class="ds-quick-find__text">${newText}</span>
                             <span class="ds-quick-find__keyword">${keywords}</span>
                           </a>
                         </li>`
        } else {
          if(prevHeader != item.ancestors.header){
            qf.newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
                             ${item.ancestors.grandParent}
                           </li>`
          }
          prevHeader = item.ancestors.header;

          qf.newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                           <a onclick="QuickFind.navigateTo('${item.url}', this.innerText); return false;" class="ds-quick-find__output-link" href="">
                             <span class="ds-quick-find__text">${newParentText} / ${newText}</span>
                             <span class="ds-quick-find__keyword">${keywords}</span>
                           </a>
                         </li>`
        }

        qf.keywords += ' ' + keywords;
      })
    },

    // For Google Analytics Tracking
    buildSearchCollection: function(str){
      let isValid = true;
      // string must be longer than previous string
      if(str.length < qf.prevInputString.length) isValid = false;
      qf.prevInputString = str;
      // string must be more than 2 characters
      if(str.length < 3) isValid = false;
      // if string is not all spaces
      let patt = /[ ]{2,}/;
      if( patt.test( str ) ) isValid = false;
      // if string is not in collection
      let sc = GoogleTracker.getSearchCollection()
      if(sc.indexOf( '~ '+ str +' ~' ) > -1) isValid = false;

      if(isValid){
        GoogleTracker.trackSearchCollection(str);
      }
    },
    // End

    runEventTracking: function(){
      // Listen for Clear Button click
      qf.clear.addEventListener('click', qf.handleClearButtonClick);

      // Listen for TAB events associated with Clear button
      qf.clear.addEventListener('keydown', qf.handleClearButtonKeydown);

      // Listen for ESC key when Search Input in focus
      qf.search.addEventListener('keydown', qf.handleSearchInputKeydown);

      // Listen for Search Results Focus
      qf.results.addEventListener('focusin', qf.handleResultsFocus);

      // Listen for Search Results Keydown
      qf.results.addEventListener('keydown', qf.handleResultsKeydown);
    },

    handleClearButtonClick: function(e){
      qf.closeResults();
    },

    handleClearButtonKeydown: function(e){
      // SHIFT+TAB
      if(e.keyCode==9 && !(e.shiftKey && e.keyCode==9) ) qf.closeResults();
      // ENTER
      if(e.keyCode==13) qf.closeResults();
    },

    handleSearchInputKeydown: function(e){
      // ESC
      if(e.keyCode==27) qf.closeResults()
      // DOWN ARROW
      if(e.keyCode==40){
        e.preventDefault();
        let el = qf.results.querySelector('a');
        if(el) el.focus()
      }
    },

    handleResultsFocus: function(e){

      let prevElem = qf.prevElem;
      let currElem = document.activeElement;
      if( qf.prevElem ) qf.resultsNavFrom( qf.prevElem  );
      if( currElem ) qf.resultsNavTo( currElem );
      qf.prevElem = currElem;

    },

    handleResultsKeydown: function(e){

      let currElem = document.activeElement;

      // Listen for ESC key when results in focus
      if(e.keyCode==27){
        e.preventDefault();
        qf.closeResults();
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
          qf.resultsNavFrom( currElem );
          qf.search.focus();
        } else {
          // window.location = currElem.href;
          qf.resultsNavFrom( currElem );
          qf.clear.focus();
        }
      }

      // Listen for SPACE key when results in focus
      if(e.keyCode==32) {
        e.preventDefault();
        qf.navigateTo( currElem.href, currElem.innerText );
      }

    },

    navigateTo: function( url, phrase ){
      GoogleTracker.trackPhrase( phrase );
      window.location.href = url;
    },

    closeResults: function(){
      qf.results.innerHTML = '';
      qf.search.value = '';
      qf.search.setAttribute('aria-expanded', 'false');
      qf.search.focus();
      //GoogleTracker.trackSearchAbandon();
    },

    resultsNavTo: function( node ){
      node.parentElement.setAttribute('aria-selected', 'true');
    },

    resultsNavFrom: function( node ){
      node.parentElement.setAttribute('aria-selected', 'false');
    },

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

    init: function( arr, inputId, clearId, resultsId, resultsCountId, count=null) {
      qf.pagesArray = arr;
      qf.inputId = inputId;
      qf.clearId = clearId;
      qf.resultsId = resultsId;
      qf.resultsCountId = resultsCountId;
      qf.displayCount = count != null ? count : qf.displayCount;
      qf.setSearchProperties();
      qf.runEventTracking();
    }

  };

  /*
    Looping over an array of objects, the below will initiate a search for the Text and closest link related CSS Class
  */
  qf.init(
    [
      {
        url:'/fsa-design-system/sitemap/',
        //url:'https://usda-fsa.github.io/fsa-design-system/sitemap/',
      }
    ],
    'quick-find-id',
    'quick-find-clear-id',
    'quick-find-results-id',
    'quick-find-results-count-id'
  );

  window.QuickFind = qf;
}

