---
layout: home
title: Home
---

<div class="ds-article">

  <h1 class="fsa-sr-only">Welcome to FPAC's Design System</h1>

  <input class="fsa-input fsa-input--block" id="UNIQUE-ID-ksidjyehdi" type="text" name="search" value="" placeholder="Quick Search">
  <div id="UNIQUE-ID-ksidjyehdi-results"></div>


  <p class="fsa-text--lead fsa-m-t--10"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting a new bar for cohesive user experiences across USDA Farm Production and Conservation.</p>

  <div class="fsa-grid ds-home-features">
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}visual-style/">
        <span class="ds-home-features__title">Visual Style</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_visual_style_guide_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">508-compliant colors and typography designed to establish a cohesive experience.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}components/">
        <span class="ds-home-features__title">Components</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_components_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Common web interactions with reusable and downloadable HTML/CSS.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}grid-and-layout/">
        <span class="ds-home-features__title">Grid and Layout</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_grid_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Structure your content with a responsive 12-column grid system.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}utilities/">
        <span class="ds-home-features__title">Utilities</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_ui_utilities_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Make targeted style alterations with these helper classes.</p>
    </div>
    <div class="fsa-grid__1 fsa-grid__1/2@s fsa-grid__1/3@m ds-home-features__item">
      <a class="ds-home-features__link" href="{{ site.baseurl }}guides/">
        <span class="ds-home-features__title">Guides</span>
        <img class="ds-home-features__img" src="{{ site.baseurl }}img/home/homepage_illustrations_designer_2x.png" alt="">
      </a>
      <p class="ds-home-features__blurb">Guidelines covering topics such as Accessibility and Content.</p>
    </div>
  </div>

</div>

<script>

  const search = {

    url: 'http://usda-fsa.github.io/fsa-design-system/sitemap/',
    searchArray: [],

    getSource: function( callback ){
      if (window.XMLHttpRequest){ 
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          callback(this)
        }
        xhr.open( 'GET', this.url, true);
        xhr.send();
      } else {
        console.log('no xhr')
      }
    },

    setContent: function(response){
      let holder = document.createElement('html');
      holder.innerHTML = response.response
      let list = [].slice.call(holder.querySelectorAll(".ds-sitemap__link"))
      this.searchArray = list.map( item => {
        return {text: item.innerText.trim(), url: item.pathname }
      })
    },

    doSearch( p ){
      let list = searchArray.filter( item => {
        let lowCategory = item.text.toLowerCase()
        let lowPhrase = p.toLowerCase()
        if(lowCategory.indexOf( lowPhrase ) > -1) return true
        else false
      });
      // return max 8 results
      return list.slice(0,7);
    },

    init(){
      this.getSource( this.setContent );
    }

  };

  search.init();

  let smartSearch = document.getElementById('UNIQUE-ID-ksidjyehdi');
  let smartResults = document.getElementById('UNIQUE-ID-ksidjyehdi-results');

  smartSearch.oninput = function(){
    if(smartSearch.value!=''){
      let newHTML = '<ul>';
      let list = search.doSearch( smartSearch.value );
      list.forEach( item => {
        newHTML += '<li>'+item.text+' - <a href="'+item.url+'">'+ item.url +'</a></li>'
      });
      newHTML += '</ul>';
      smartResults.innerHTML = newHTML;
    } else {
      smartResults.innerHTML = '';
    }
  }

</script>
