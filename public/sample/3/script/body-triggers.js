/**
 * The following applies to the appbar,
 * 1. Fades to transparent when on top of the page
 * 2. Shows up when u scroll up a little
 * 3. Disappears when u scroll down
 */
var navbar = document.getElementById("navbar");
var title = document.getElementById("title");
var titleOffset = title.offsetHeight;

var lastScrollTop = 0;

window.onscroll = function () {
  makeSticky();
};

function makeSticky() {
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    navbar.classList.remove("scrolled-up");
    navbar.classList.add("scrolled-top");
  } else {
    navbar.classList.add("scrolled-up");
    navbar.classList.remove("scrolled-top");

    if (window.scrollY == 0) {
      navbar.classList.add("scrolled-top");
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

/* End of script */
