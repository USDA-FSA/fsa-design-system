var $ = require('jquery');
var Sticky = require('../vendor/jquery.sticky');
var OnePageNav = require('../vendor/jquery.OnePageNav.js').OnePageNav;

function JumpBuild() {

  var $articleBody = $('.ds-article');
  var $articleTitles = $articleBody.find('h2[id]');
  var $jumpTarget = $('#jump-target');
  var $jumpTitle = $('#article-title').text();

  $jumpTarget.html('\
    <div class="ds-jump">\
      <h2 class="ds-jump__title">' + $jumpTitle + '</h2>\
      <ul class="ds-jump__list">\
        <li class="ds-jump__item ds-jump__item--active"><a class="ds-jump__link" href="#main-content">Overview</a></li>\
      </ul>\
    </div>\
  ');

  var $jumpAppendTarget = $jumpTarget.find('.ds-jump__list');

  $articleTitles.each(function(index) {
    $jumpAppendTarget.append('<li class="ds-jump__item"><a class="ds-jump__link" href="#' + $(this).attr('id') +'">' + $(this).text() + '</a></li>')
  });

}

function JumpStick() {

  if (window.matchMedia("(min-width: 54em)").matches) {

    // If browser doesn't support matchMedia(), we don't care if menu is sticky

    $('.ds-jump').sticky({
      topSpacing: 40,
      className: 'ds-jump--stuck',
      wrapperClassName: 'ds-jump-wrapper'
    });

    $('.ds-jump').on('sticky-start', function() {
      console.log("Stuck");
    });

    $('.ds-jump').on('sticky-end', function() {
      console.log("UNStuck");
    });

  }

}

function JumpFollow() {
  $('.ds-jump__list').onePageNav({
    currentClass: 'ds-jump__item--active',
    changeHash: false,
    scrollThreshold: 0.1,
    scrollSpeed: 550
  });
}

jQuery(document).ready(function($){

  JumpBuild();
  JumpStick();
  JumpFollow();

});

//module.exports = Jump;
