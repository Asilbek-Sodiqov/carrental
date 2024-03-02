var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeader = document.querySelector(".site-header");
elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.toggle("open-menu");
  document.body.classList.toggle("unscrollbody");
});