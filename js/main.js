// const banner = document.getElementById("head-banner");
// const bannerCloseBtn = document.getElementById("head-baner-close-btn");
// bannerCloseBtn.addEventListener("click", function () {
//   banner.classList.add("close");
// });
// const bannerCloseBtnBlack = document.getElementById(
//   "head-baner-close-btn-black"
// );
// bannerCloseBtnBlack.addEventListener("click", function () {
//   banner.classList.add("close");
//   bannerCloseBtnBlack.classList.add("hide");
// });

const forexOrig = document.getElementById("forex-orig");
const stockOrig = document.getElementById("stock-orig");
const inmoOrig = document.getElementById("inmo-orig");
const stockHov = document.getElementById("stock-hover");
const inmoHov = document.getElementById("inmo-hover");
const forexHov = document.getElementById("forex-hover");

forexOrig.addEventListener("mouseover", function () {
  forexHov.classList.remove("close");
});

forexOrig.addEventListener("mouseleave", function () {
  forexHov.classList.add("close");
});

stockOrig.addEventListener("mouseover", function () {
  stockHov.classList.remove("close");
});

stockOrig.addEventListener("mouseleave", function () {
  stockHov.classList.add("close");
});

inmoOrig.addEventListener("mouseover", function () {
  inmoHov.classList.remove("close");
});

inmoOrig.addEventListener("mouseleave", function () {
  inmoHov.classList.add("close");
});

// const footerBanner = document.getElementById("footer-banner");
// const footerBannerBtn = document.getElementById("fotter-banner-btn");
// setTimeout(() => {
//   footerBanner.classList.remove("close");
// }, 3000);
// footerBannerBtn.addEventListener("click", () => {
//   footerBanner.classList.add("close");
// });
