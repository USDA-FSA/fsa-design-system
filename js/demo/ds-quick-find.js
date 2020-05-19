
const quickFind = {

  inputId: '',
  resultsId: '',
  search: '',
  results: '',
  pagesArray: [],
  searchUrl: '',
  cssClass: '',
  searchArray: [],
  displayCount: 1,

  setSearchProperties: function(){

    quickFind.search = document.getElementById( quickFind.inputId );
    quickFind.results = document.getElementById( quickFind.resultsId );
    quickFind.search.oninput = quickFind.searchInput();
    quickFind.getSource( quickFind.pagesArray, quickFind.getContent );
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

    tier1.forEach( node => quickFind.addToSearchList(node, 1) );
    tier2.forEach( node => quickFind.addToSearchList(node, 2) );
    tier3.forEach( node => quickFind.addToSearchList(node, 3) );
  },

  addToSearchList: function(node, tier){
    let ancestors = {parent: null, grandParent: null, header: null};
    if(tier == 3){
      ancestors.parent = quickFind.getClosest(node, 'a.js-quick-find--tier2')[0].text;
      ancestors.grandParent = quickFind.getClosest(node, 'a.js-quick-find--tier1')[0].text;
      ancestors.header = ancestors.grandParent;
    } else if(tier == 2){
      ancestors.parent = quickFind.getClosest(node, 'a.js-quick-find--tier1')[0].text;
      ancestors.header = ancestors.parent;
    }
    let newUrl = node.getAttribute('href')
    if(newUrl) quickFind.searchArray.push(
      {
        text: node.innerText.trim(),
        url: newUrl,
        tier: tier,
        ancestors: ancestors
      });
  },

  doSearch: function( phrase ){
    let arr = quickFind.dedupeArrayOfObjects( quickFind.searchArray );
    let list = arr.filter( item => {
      let lowCategory = item.text.toLowerCase()
      let lowPhrase = phrase.toLowerCase()
      if(lowCategory.indexOf( lowPhrase ) > -1) return true
      else false
    });
    return list.slice( 0, quickFind.displayCount-1);
  },

  searchInput: function(){
    return function(){
      let q = quickFind;
      if(q.search.value!=''){
        
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
                newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
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
                newHTML += `<li class="ds-quick-find__output-item ds-quick-find__output-item--section" aria-hidden="true">
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
        q.results.innerHTML = '';
      }
    }

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

  init: function( arr, inputId, resultsId, count=null) {
    quickFind.pagesArray = arr;
    quickFind.inputId = inputId;
    quickFind.resultsId = resultsId;
    quickFind.displayCount = count ? count : 8;
    quickFind.setSearchProperties();
  }

};

/*
  Looping over an array of objects, the below will initiate a search for the Text and closest link related CSS Class
*/
quickFind.init(
  [
    { 
      url:'/fsa-design-system/sitemap/',
      //url:'https://usda-fsa.github.io/fsa-design-system/sitemap/',
    }
  ],
  'quick-find-id',
  'quick-find-results-id'
);