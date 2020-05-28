
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
  displayCount: 1,
  prevElem: '',

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
        console.log('xhr', xhr)
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
        ancestors: ancestors
      });
  },

  doSearch: function( phrase ){
    let arr = qf.dedupeArrayOfObjects( qf.searchArray );
    let list = arr.filter( item => {
      let lowCategory = item.text.toLowerCase()
      let lowPhrase = phrase.toLowerCase()
      if(lowCategory.indexOf( lowPhrase ) > -1) return true
      else false
    });
    let listToDisplay = list.slice( 0, qf.displayCount-1);
    qf.resultsCount.innerText = listToDisplay.length + ' results';
    return listToDisplay;
  },

  searchInput: function(){
    return function(){
      let q = qf;
      if(q.search.value!=''){

        qf.search.setAttribute('aria-expanded', 'true');
        
        let newHTML = '<ul class="ds-quick-find__output" role="listbox">';
        let matches = q.doSearch( q.search.value );
        
        let tier1 = matches.filter( item => item.tier == 1 );
        tier1.sort((a, b) => (a.text < b.text) ? 1 : -1)
        
        let subgroups = matches.filter( item => item.tier > 1 );
        subgroups.sort((a, b) => (a.text > b.text) ? 1 : -1)
        subgroups.sort((a, b) => (a.ancestors.header > b.ancestors.header) ? 1 : -1)

        let regex = new RegExp(q.search.value, 'gi');

        if( tier1.length > 0 ){
          tier1.forEach( item => { 
            let newText = item.text.replace(regex, (str) => '<mark>'+ str + '</mark>');
            newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                          <a class="ds-quick-find__output-link" href="${item.url}">
                            ${newText}
                          </a>
                        </li>`
          })
        }

        if( subgroups.length > 0){
          let prevHeader = '';
          subgroups.forEach( item => {

            let newText = item.text.replace(regex, (str) => '<mark>'+ str + '</mark>');
            let newParentText = item.ancestors.parent.replace(regex, (str) => '<mark>'+ str + '</mark>');

            if( item.tier == 2){
              if(prevHeader != item.ancestors.header){
                newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="false">
                              ${item.ancestors.parent}
                            </li>`
              }
              prevHeader = item.ancestors.header;
              newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                            <a class="ds-quick-find__output-link" href="${item.url}">
                              ${newText}
                            </a>
                          </>`
            } else {
              if(prevHeader != item.ancestors.header){
                newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="false">
                              ${item.ancestors.grandParent}
                            </li>`
              }
              prevHeader = item.ancestors.header;

              newHTML += `<li role="option" aria-selected="false" class="ds-quick-find__output-item">
                            <a class="ds-quick-find__output-link" href="${item.url}">
                              ${newParentText}
                              /
                              ${newText}
                            </a>
                          </li>`
            }            
          })
        }
        newHTML += '</ul>';
        q.results.innerHTML = newHTML;
      } else {
        qf.closeResults();
      }
    }

  },


  closeResults: function(){
    qf.results.innerHTML = '';
    qf.search.value = '';
    qf.search.setAttribute('aria-expanded', 'false');
    qf.search.focus();
  },

  runEventTracking: function(){

    // Listen for Clear Button click
    qf.clear.addEventListener('click', (event) => {
      qf.closeResults();
    });

    // Listen for TAB events associated with Clear button
    qf.clear.addEventListener('focusin', (evt) => { 
      evt.target.addEventListener('keydown', (evt) => { 
        // SHIFT+TAB
        if(evt.keyCode==9 && !(evt.shiftKey && evt.keyCode==9) ) qf.closeResults();
        // ENTER
        if(evt.keyCode==13) qf.closeResults();
      });
    });
  
    // Listen for Search Input Focus
    qf.search.addEventListener('focusin', (event) => {
      // Listen for ESC key when Search Input in focus
      qf.search.addEventListener('keydown', (evt) => { if(evt.keyCode==27) qf.closeResults() });

      qf.search.addEventListener('keydown', (evt) => { 
        if(evt.keyCode==40){
          evt.preventDefault();
          let el = qf.results.querySelector('a');
          if(el) el.focus()
        }  
      });
    });


    // Listen for Search Results Focus
    let prevElem = qf.prevElem;
    qf.results.addEventListener('focusin', (event) => {
      
      let currElem = document.activeElement;
      if( qf.prevElem ) qf.resultsNavFrom( qf.prevElem  );
      if( currElem ) qf.resultsNavTo( currElem );
      qf.prevElem = currElem;

      qf.results.addEventListener('keydown', (evt) => {
        // Listen for ESC key when results in focus
        if(evt.keyCode==27){ 
          evt.preventDefault();
          qf.closeResults();
        }
        // Listen for DOWN key when results in focus
        if(evt.keyCode==40) {
          evt.preventDefault();
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
        if(evt.keyCode==38) {
          evt.preventDefault();
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

        if(evt.keyCode==9){
          evt.preventDefault();
          // SHIFT+TAB
          if( evt.shiftKey && evt.keyCode==9 ){
            qf.resultsNavFrom( currElem );
            qf.search.focus();
          } else {
            window.location = currElem.href;
          }
        }
      });

    });
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
    qf.displayCount = count ? count : 8;
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