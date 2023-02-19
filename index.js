// ---------倫播圖---------- //  
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
    watchState: true,
    },
    pagination: {
    el: ".swiper-pagination",
    bulletElement: 'li',
    bulletClass: 'swiper-pagination-bullet',
    bullerActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
});




// ---------登入---------- //  
let lightbox_el = document.getElementById("lightbox");
let scrollhide = document.querySelector('body');

// 頁面上的按鈕
var header_navigation_log_in= document.getElementsByClassName("header_navigation_log_in")[0];
header_navigation_log_in.addEventListener("click", function(){
    lightbox_el.classList.remove("none");
    scrollhide.style.overflow ="hidden";
});


var log_in_close = document.getElementsByClassName("log_in_close")[0];
log_in_close.addEventListener("click", function(){
    lightbox_el.classList.add("none");
});


lightbox_el.addEventListener("click", function(){
    this.classList.add("none");
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el.querySelector("article").addEventListener("click", function(e){
    e.stopPropagation();
});





// ---------註冊---------- //  
let lightbox_2_el = document.getElementById("lightbox_2");

// 頁面上的按鈕
var header_navigation_sign_up= document.getElementsByClassName("header_navigation_sign_up")[0];
header_navigation_sign_up.addEventListener("click", function(){
    lightbox_2_el.classList.remove("none");
});


var sign_in_close = document.getElementsByClassName("sign_in_close")[0];
sign_in_close.addEventListener("click", function(){
    lightbox_2_el.classList.add("none");
});


lightbox_2_el.addEventListener("click", function(){
    this.classList.add("none");
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_2_el.querySelector("article").addEventListener("click", function(e){
    e.stopPropagation();
});




// ---------跳至最上方---------- //  
$(function(){
    $('#BackTop').click(function(){ 
        $('html,body').animate({scrollTop:0}, 333);
    });
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300 ){
        $('#BackTop').fadeIn(222);
    } else {
        $('#BackTop').stop().fadeOut(222);
    }
    }).scroll();
});


// ---------漢堡選單---------- //  
$('#menu_btn').click(function(){
    $('#nav_rwd').slideToggle(500, 'linear')
})



$(document).ready(function(){
    let flag = 0;  
    $('#menu_btn').click(function(){
    if(flag == 0) {
        $('#menu_btn_img').attr("src","images/menu_icon2.png");
        flag = 1;
    }
    else if(flag == 1) {
        $('#menu_btn_img').attr("src","images/menu_icon.png");
        flag = 0;
    }
    });
});


let menu_btn = document.getElementById("menu_btn");
menu_btn.addEventListener("click", function(){
    let nav_rwd = document.getElementById("nav_rwd");
    nav_rwd.classList.toggle("btn_none"); 
});

