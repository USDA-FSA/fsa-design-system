if ('serviceWorker' in navigator) {
  // only if modern enough browser, https://caniuse.com/#search=serviceworker
  const icf = {

    inputId: '',
    clearId: '',
    resultsId: '',
    search: '',
    results: '',
    iconsArr: [],


    setSearchProperties: function(){
      icf.search = document.getElementById( icf.inputId );
      icf.clear = document.getElementById( icf.clearId );
      icf.results = document.getElementById( icf.resultsId );
      icf.resultsCount = document.getElementById( icf.resultsCountId );
      icf.search.oninput = icf.searchInput();
      icf.getSource( icf.pagesArray, icf.getContent );
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
      icf.iconsArr = json.icons;
    },

    doSearch: function( phrase ){
      let arr = icf.dedupeArrayOfObjects( icf.searchArray );
      let lowPhrase = phrase.toLowerCase();

      let list = arr.filter( item => {
        let exists = false;

        let lowCategory = item.text.toLowerCase()
        let lowKeywords = item.keywords.toLowerCase();

        if(lowCategory.indexOf( lowPhrase ) > -1) exists = true;
        if(lowKeywords.indexOf( lowPhrase ) > -1) exists = true;

        return exists
      });

      list = icf.dedupeArrayOfObjects(list);

      let listToDisplay = list.slice( 0, icf.displayCount-1);
      icf.resultsCount.innerText = listToDisplay.length + ' results';
      return listToDisplay;
    },

    searchInput: function(){
      return function(){


        if(icf.search.value!=''){ // isn't empty
          if(icf.search.value.length > 1){ // run only if at least 2 characters

            icf.search.setAttribute('aria-expanded', 'true');

            let preHTML = '<ul class="ds-quick-find__output" role="listbox">';

            // aray of objects
            let matches = icf.doSearch( icf.search.value );

            // For Google Analytics Tracking
            if(matches.length < 1) icf.buildSearchCollection(icf.search.value);
            // End

            let tier1 = matches.filter( item => item.tier == 1 );
            tier1.sort((a, b) => (a.text < b.text) ? 1 : -1)

            let subgroups = matches.filter( item => item.tier > 1 );
            subgroups.sort((a, b) => (a.text > b.text) ? 1 : -1)
            subgroups.sort((a, b) => (a.ancestors.header > b.ancestors.header) ? 1 : -1)

            if( tier1.length > 0 ) icf.buildTierOne(tier1);

            if( subgroups.length > 0) icf.buildSubgroups(subgroups);

            /*
            if(icf.keywords != ''){
              preHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">Related Keywords</li>`;
              preHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                          ${icf.keywords}
                        </>`;
            }
            */

            icf.newHTML = preHTML + icf.newHTML + '</ul>';
            icf.results.innerHTML = icf.newHTML;
            icf.newHTML = '';
          }
        } else {
          icf.closeResults();
        }
      }
    },

    getMatchedPages: function(matchObject){
      let pages = '';
      pages = matchObject.text.replace( icf.getSearchRegex(), (str) => '<mark>'+ str + '</mark>');
      return pages;
    },

    getKeywords: function(matchObject){
      let arr = matchObject.keywords.split(',');
      let arr2 = [];
      arr.forEach( item => {
        let kw = item.toLowerCase();
        let phrase = icf.search.value.toLowerCase();
        if( kw.indexOf(phrase) > -1 ){
          arr2.push( item.replace( icf.getSearchRegex(), (str) => '<mark>'+ str + '</mark>') )
        }
      })
      return arr2.length > 1 ? arr2.join(', ') : arr2[0];
    },

    getSearchRegex: function(){
      return new RegExp(icf.search.value, 'gi');
    },

    buildTierOne: function(tier){
      tier.forEach( item => {

        let keywords = icf.getKeywords(item);
        keywords = keywords ? '<span title="Also known as"> ' + keywords + '</span>' : '';
        let newText = icf.getMatchedPages(item);

        icf.newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
            <a onclick="QuickFind.navigateTo('${item.url}', this.innerText); return false;" class="ds-quick-find__output-link" href="">
              <span class="ds-quick-find__text">${newText}</span>
              <span class="ds-quick-find__keyword">${keywords}</span>
            </a>
          </li>`;
        icf.keywords += ' ' + keywords;
      })
    },

    buildSubgroups: function(subgroups){
      let prevHeader = '';
      // Used for typed string Highlight
      let regex = new RegExp(icf.search.value, 'gi');
      subgroups.forEach( item => {

        let newText = icf.getMatchedPages(item);
        let newParentText = item.ancestors.parent.replace(regex, (str) => '<mark>'+ str + '</mark>');

        let keywords = icf.getKeywords(item);
        keywords = keywords ? '<span title="Also known as"> ' + keywords + '</span>' : '';

        if( item.tier == 2){
          if(prevHeader != item.ancestors.header){
            icf.newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
                             ${item.ancestors.parent}
                           </li>`
          }
          prevHeader = item.ancestors.header;
          icf.newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                           <a onclick="QuickFind.navigateTo('${item.url}', this.innerText); return false;" class="ds-quick-find__output-link" href="">
                             <span class="ds-quick-find__text">${newText}</span>
                             <span class="ds-quick-find__keyword">${keywords}</span>
                           </a>
                         </li>`
        } else {
          if(prevHeader != item.ancestors.header){
            icf.newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
                             ${item.ancestors.grandParent}
                           </li>`
          }
          prevHeader = item.ancestors.header;

          icf.newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                           <a onclick="QuickFind.navigateTo('${item.url}', this.innerText); return false;" class="ds-quick-find__output-link" href="">
                             <span class="ds-quick-find__text">${newParentText} / ${newText}</span>
                             <span class="ds-quick-find__keyword">${keywords}</span>
                           </a>
                         </li>`
        }

        icf.keywords += ' ' + keywords;
      })
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

    init: function( arr, inputId) {
      icf.pagesArray = arr;
      icf.inputId = inputId;
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
  );

  window.IconFind = icf;
}

