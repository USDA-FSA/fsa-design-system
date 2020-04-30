
const quickSearch = {

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

    quickSearch.search = document.getElementById( quickSearch.inputId );
    quickSearch.results = document.getElementById( quickSearch.resultsId );
    quickSearch.search.oninput = quickSearch.onSearchInput(quickSearch);

    // pass a callback method to contain appropriate scope
    quickSearch.getSource( quickSearch.pagesArray, quickSearch.getContent );
  },

  getSource: function( arr, callback ){
    if (window.XMLHttpRequest){ 
      // loop for all objects in array and get their page contents
      // send page contents to callback to have processed
      arr.forEach( item => {
        let xhr = new XMLHttpRequest();
        //console.log('xhr', xhr)
        xhr.onreadystatechange = function(){
          callback(this, item.url, item.cssClass)
        }
        xhr.open( 'GET', item.url, true);
        xhr.send();
      })

    } else {
      console.log('no xhr')
    }
  },

  getContent: function(res, url, cssClass){
    // create github.io base app url
    let protocol = url.split('/')[0] 
    let domain = url.split('/')[2]
    let baseUrl = protocol + '//' + domain;
    let app = url.split('/')[3]
    // build app url
    let appUrl = baseUrl + '/' + app + '/';

    let holder = document.createElement('html');
    holder.innerHTML = res.response;

    // need to add logic here to find closest anchor from CSS class passed
    let anchors = Array.prototype.slice.call( holder.querySelectorAll( cssClass ) )
    let arr = [];

    anchors.forEach( node => {
      // TODO: add code here to find and add Parent Header/Groupings
      let newUrl = node.getAttribute('href')
      if(newUrl){
        if( newUrl.indexOf('#') > -1 ) quickSearch.searchArray.push( { text: node.innerText.trim(), url: appUrl + newUrl } );
        else quickSearch.searchArray.push( { text: node.innerText.trim(), url: baseUrl + newUrl } );
      }
    })
  },

  dedupeArrayOfObjects: function( arr ){
    const uniqueArray = arr.filter((item, index) => {
      const _item = JSON.stringify(item);
      return index === arr.findIndex(obj => {
        return JSON.stringify(obj) === _item;
      });
    });
    return uniqueArray;
  },

  doSearch: function( phrase ){
    let arr = quickSearch.dedupeArrayOfObjects( quickSearch.searchArray );
    let list = arr.filter( item => {
      let lowCategory = item.text.toLowerCase()
      let lowPhrase = phrase.toLowerCase()
      if(lowCategory.indexOf( lowPhrase ) > -1) return true
      else false
    });
    return list.slice( 0, quickSearch.displayCount-1);
  },

  onSearchInput: function( q ){
    return function(){
      if(q.search.value!=''){

        //TODO: create Parent/Groupings for hierarchy
        let newHTML = '<ul>';
        let list = q.doSearch( q.search.value );
        list.forEach( item => {
          newHTML += '<li>'+item.text+' - <a href="'+item.url+'">'+ item.url +'</a></li>'
        });
        newHTML += '</ul>';
        q.results.innerHTML = newHTML;
      } else {
        q.results.innerHTML = '';
      }
    }

  },

  init: function( arr, inputId, resultsId, count=null) {
    quickSearch.pagesArray = arr;
    quickSearch.inputId = inputId;
    quickSearch.resultsId = resultsId;
    quickSearch.displayCount = count ? count : 8;
    quickSearch.setSearchProperties();
  }

};

/*
  Looping over an array of objects, the below will initiate a search for the Text and closest link related CSS Class
*/
quickSearch.init(
  [
    { 
      url:'https://usda-fsa.github.io/fsa-design-system/sitemap/',
      cssClass: '.ds-sitemap__link'
    },
    {
      url: 'http://usda-fsa.github.io/fsa-style/',
      cssClass: '.docs__primary-nav-sub-link'
    }
  ],
  'quick-search-id',
  'quick-search-results-id'
);