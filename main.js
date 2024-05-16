var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeader = document.querySelector(".site-header");
var elHeaderTheme = document.querySelector(".js-dark");
elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.toggle("open-menu");
  document.body.classList.toggle("unscrollbody");
});
elHeaderTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});