"use strict";

/*------------------------ VARIABLE ------------------------*/
const htmlBody = $("html, body");
const body = $("body");
const aJsScrollTrigger = $('a.js-scroll-trigger[href*="#"]:not([href="#"])');
const scrollToTop = $(".scroll-to-top");
const jsScrollTrigger = $(".js-scroll-trigger");
const navbarCollapse = $(".navbar-collapse");
const mainNav = $("#mainNav");

const OFFSET_71 = 71;
const OFFSET_80 = 80;
const OFFSET_100 = 100;
const TIMEOUT = 1000;

/*------------------------ FUNCTIONS ------------------------*/

// Scroll to top button appear
$(document).scroll(function () {
  let scrollDistance = $(this).scrollTop();

  if (scrollDistance > OFFSET_100) {
    scrollToTop.fadeIn();
  } else {
    scrollToTop.fadeOut();
  }
});

// Smooth scrolling using jQuery easing
aJsScrollTrigger.click(function () {
  if (location.pathname.replace(/^\//, '')
    === this.pathname.replace(/^\//, '')
    && location.hostname === this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
      htmlBody.animate({
        scrollTop: (target.offset().top - OFFSET_71)
      }, TIMEOUT, "easeInOutExpo");

      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
jsScrollTrigger.click(function () {
  navbarCollapse.collapse("hide");
});

// Activate scrollspy to add active class to navbar items on scroll
body.scrollspy({
  target: '#mainNav',
  offset: OFFSET_80
});

let collapseNavigationBar = function () {
  if (mainNav.offset().top > OFFSET_100) {
    mainNav.addClass("navbar-shrink");
  } else {
    mainNav.removeClass("navbar-shrink");
  }
};

/*------------------------ FUNCTION CALL ------------------------*/
collapseNavigationBar();
$(window).scroll(collapseNavigationBar);
