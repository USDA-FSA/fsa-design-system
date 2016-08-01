var $ = require('jquery');
var Sticky = require('../vendor/jquery.sticky');
var OnePageNav = require('../vendor/jquery.OnePageNav.js').OnePageNav;

function JumpBuild() {

  var $articleBody = $('.pb-article');
  var $articleTitles = $articleBody.find('h2[id]');
  var $jumpTarget = $('#jump-target');
  var $jumpTitle = $('#article-title').text();

  $jumpTarget.html('\
    <div class="pb-jump">\
      <h2 class="pb-jump__title">'+$jumpTitle+'</h2>\
      <ul class="pb-jump__list">\
        <li class="pb-jump__item pb-jump__item--active"><a class="pb-jump__link" href="#main-content">Overview</a></li>\
      </ul>\
    </div>\
  ');

  var $jumpAppendTarget = $jumpTarget.find('.pb-jump__list');

  $articleTitles.each(function(index) {
    $jumpAppendTarget.append('<li class="pb-jump__item"><a class="pb-jump__link" href="#' + $(this).attr('id') +'">' + $(this).text() + '</a></li>')
  });

}

function JumpStick() {

  if (window.matchMedia("(min-width: 672px)").matches) {

    // If browser doesn't support matchMedia(), we don't care if menu is sticky

    $('.pb-jump').sticky({
      topSpacing: 40,
      className: 'pb-jump--stuck',
      wrapperClassName: 'pb-jump-wrapper'
    });

    $('.pb-jump').on('sticky-start', function() {
      console.log("Stuck");
    });

    $('.pb-jump').on('sticky-end', function() {
      console.log("UNStuck");
    });

  }

}

function JumpFollow() {
  $('.pb-jump__list').onePageNav({
    currentClass: 'pb-jump__item--active',
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

module.exports = Jump;
