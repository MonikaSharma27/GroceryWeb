let searchForm = document.querySelector(".nav-search");
let searchBtn = document.querySelector("#search-btn");
let shoppingCart = document.querySelector(".shopping-cart");
let cart = document.querySelector("#cart");
let loginForm = document.querySelector(".login-form");
let user = document.querySelector("#user");
let navBar = document.querySelector(".nav-bar");
let menu = document.querySelector("#menu");

searchBtn.addEventListener("click" ,()=>{
  searchForm.classList.toggle("hide") ;
  shoppingCart.classList.add("hide");
  loginForm.classList.add("hide");
  navBar.classList.add("hide2");

})
cart.addEventListener("click",()=>{
  shoppingCart.classList.toggle("hide");
  searchForm.classList.add("hide");
  loginForm.classList.add("hide");
  navBar.classList.add("hide2");
})
user.addEventListener("click",()=>{
  loginForm.classList.toggle("hide");
  searchForm.classList.add("hide");
  shoppingCart.classList.add("hide");
  navBar.classList.add("hide2");
})
menu.addEventListener("click",()=>{
  navBar.classList.toggle("hide2");
  searchForm.classList.add("hide");
  shoppingCart.classList.add("hide");
  loginForm.classList.add("hide");
})
/*slider*/
var swiper = new Swiper(".product-slider", {
 loop:true,
  spaceBetween: 20,

autoplay: {
  delay: 7500,
  disableOnInteraction: false,
},

  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1020: {
      slidesPerView: 3,
     
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
   spaceBetween: 20,
 
 autoplay: {
   delay: 7500,
   disableOnInteraction: false,
 },
 
   breakpoints: {
     0: {
       slidesPerView: 1,
       
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 40,
     },
     1020: {
       slidesPerView: 3,
      
     },
   },
 });
/*slider*/









