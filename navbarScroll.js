
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar_scroll").style.top = "0";
  } else {
    document.getElementById("navbar_scroll").style.top = "-105px";
  }
  prevScrollpos = currentScrollPos;
}
