
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOdffset;d
  if (prevScrollpos > currentScrollPos) {d
    document.getElementById("navbar_scroll").style.top = "0";d
  } else {
    document.getElementById("navbar_scroll").style.top = "-105px";d
  }d
  prevScrollpos = currentScrollPos;d
}
