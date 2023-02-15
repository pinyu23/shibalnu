// ----------常見問題---------- //
$(document).ready(function() {
    $('.question div').click(function(e) {
        //讓點擊到div時，帶入question div.active的CSS效果
        $(this).toggleClass('active');
        //讓點擊到div時，div找到父元素.question，再找到裡面的p元素，使用slideToggle()判斷收闔
        $(this).parent().find('p').slideToggle();
        //讓自己以外的p收闔隱藏起來
        $(this).parent().siblings().find('p').slideUp();
        //讓自己以外的h3，移除帶入question h3.active的CSS效果
        $(this).parent().siblings().find('h3').removeClass('active');



        //$(this).children('.sub').attr("src","images/sub.png");

    });
});


// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     hashNavigation: {
//     watchState: true,
//     },
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//     },
//     autoplay: {
//     delay: 3000,
//     stopOnLastSlide: false,
//     disableOnInteraction: true,
//     },
// });

// const accordion = document.getElementsByClassName('container');

// for (i=0; i<accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active')
//     })
// }



// ---------登入---------- // 

let lightbox_el = document.getElementById("lightbox");

// 頁面上的按鈕
var header_navigation_log_in= document.getElementsByClassName("header_navigation_log_in")[0];
header_navigation_log_in.addEventListener("click", function(){
    lightbox_el.classList.remove("none");
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
        if(flag == 0){
            $('#menu_btn_img').attr("src","images/menu_icon2.png");
            flag = 1;
        }else if(flag == 1){
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


