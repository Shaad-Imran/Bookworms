const addEventOnElement = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-link");
const navToggler = document.querySelector(".nav-toggle-btn");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElement(navToggler, "click", toggleNavbar);

/**
 * header active on scroll down to 100px
 */

const header = document.querySelector(".header");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventOnElement(window, "scroll", activeHeader);

/**
 * filter tab
 */

const tabCard = document.querySelectorAll(".tab-card");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
};

addEventOnElement(tabCard, "click", navigateTab);
