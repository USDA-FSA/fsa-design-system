---
layout: home
title: Home
---

<div class="ds-article">

  <h1 class="fsa-sr-only">Welcome to FPAC's Design System</h1>



  <p class="fsa-text--lead fsa-m-t--none"><strong><abbr title="Farm Production and Conservation">FPAC</abbr></strong>'s Open Source <strong>design resource</strong>, <strong>documentation</strong>, and <strong>guidelines</strong> - setting a new bar for cohesive user experiences across USDA Farm Production and Conservation.</p>

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

    url: 'sitemap/index.html',
    phrase: '',
    searchArray: [],

    getSource: function( callback ){
      if (window.XMLHttpRequest){ 
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
          callback(this)
        }
        xhr.open( 'GET', this.url, true);
        xhr.send();
      }
    },

    setContent: function(response){
      let holder = document.createElement('html');
      holder.innerHTML = response.response
      let list = [].slice.call(holder.querySelectorAll(".ds-sitemap__link"))
      this.searchArray = list.map( item => {
        return {
          text: item.innerText.trim(),
          url: item.pathname,
        }
      })

      console.log('content',searchArray);
    },

    doSearch( p ){
      this.phrase = p;
    },


    init(){
      this.getSource( this.setContent );
    }

  };

  search.init();
  //search.doSearch('logo')

</script>
