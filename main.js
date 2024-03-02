var elMenuBtn = document.querySelector(".js-menu-btn");
var elSiteHeader = document.querySelector(".site-header");
elMenuBtn.addEventListener("click", function(){
  elSiteHeader.classList.toggle("open-menu");
  document.body.classList.toggle("unscrollbody");
});

let elHeaderHamburg = document.querySelector(".js-hamburg");
let elHeaderNav = document.querySelector(".js-nav");
let elHeaderCros = document.querySelector(".js-close");
let elHeaderTheme = document.querySelector(".js-dark");
let elChooseCompact = document.querySelector(".js-compact");
let elChooseSport = document.querySelector(".js-sport");
let elChooseVans = document.querySelector(".js-vans");

elHeaderHamburg.addEventListener("click", function () {
  elHeaderNav.classList.add("open");
  document.body.classList.add("unscroll");
});

elHeaderCros.addEventListener("click", function () {
  elHeaderNav.classList.remove("open");
  document.body.classList.remove("unscroll");
});

elHeaderTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  elHeaderNav.classList.toggle("dark-theme");
});
elChooseCompact.addEventListener("click", function () {
  elChooseCompact.classList.add("choose__btn-actived");
  elChooseSport.classList.remove("choose__btn-actived");
  elChooseVans.classList.remove("choose__btn-actived");
});
elChooseSport.addEventListener("click", function () {
  elChooseSport.classList.add("choose__btn-actived");
  elChooseCompact.classList.remove("choose__btn-actived");
  elChooseVans.classList.remove("choose__btn-actived");
});
elChooseVans.addEventListener("click", function () {
  elChooseVans.classList.add("choose__btn-actived");
  elChooseCompact.classList.remove("choose__btn-actived");
  elChooseSport.classList.remove("choose__btn-actived");
});