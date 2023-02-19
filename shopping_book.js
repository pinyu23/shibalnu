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
    

// ---------圖片切換---------- // 

$(function(){
    $('#img-switch .small-img a').click(function(e) {
        var $imgSrc = $(this).attr('href');
        $('#img-switch .big-img img').attr('src',$imgSrc);
        return false;
    });
})


// ---------數量變化---------- // 
var num=1;

function check(){//設一個動作叫做check 裡頭含有num的if與else 
    if(num<3){
        $(".text").text("數量充足");
        // $(".text").css("border-bottom","solid 8px #E9E9E9");
        $(".fill_stock").addClass("fill_stock_open");
    }else if(num<5){
        $(".text").text("數量極少");
        // $(".text").css("border-bottom","solid 8px #FFF2D8");
        $(".fill_stock").removeClass("fill_stock_open");
    }else{
        $(".text").text("庫存不足");
        // $(".text").css("border-bottom","solid 8px #FFE9D8");
    }
 }


$(".minus").click(
    function(){
        num=num-1;
        $(".num").text(num);
        check();//執行check裏頭的if與else
    }
);

$(".add").click(
    function(){
        num=num+1;
        $(".num").text(num);
        check();//執行check裏頭的if與else
    }
);



// ---------其他人也看過---------- // 


$(function () {
    slider();
});
  
  
$(window).resize(function () {
    slider();
});
  
function slider() {
    var gNum = 0; //組數的初始值
    var dX = 0; //水平座標位置
    var divWidth = $(".slider").width(); //外層寬度
    var ulNum; //為總組數
    var liLength = $(".slider .list li").length;
    var ulWidth;
    var liWidth;
    $(".status").html("");
        if ($(window).width() < 768) {
            liWidth = divWidth;
            ulNum = liLength;
        } else if ($(window).width() <= 960) {
            liWidth = divWidth / 2;
            ulNum = liLength  / 2;
        } else {
            liWidth = divWidth / 3;
            ulNum = liLength / 3;
        }
  
        $(".slider .list li").css("width", liWidth);
        ulWidth = liWidth * liLength;    //ul的寬度
        $(".slider ul").css("width", ulWidth);
        if (ulNum <= 1) {
            $(".dIcon.next").hide();
            $(".dIcon.prev").hide();
            } else {
                $(".dIcon.next").show();
                $(".dIcon.prev").show();
                for (var i = 0; i < ulNum; i++) {
                    $(".status").append("<span class='dot'></span>")
                }
                $(".dot").eq(0).addClass("active");
            }
        leftAnimate();
        function leftAnimate() {
            $(".slider ul").stop().animate({ "left": dX }, 700);
        }
  
        function showDot(point) {
            $(".dot").removeClass("active");
            $(".dot").eq(point).addClass("active");
        }
  
  
    $(".next").click(function () {
        if (gNum < ulNum - 1) {
            gNum++;
            dX = gNum * divWidth * -1;
        } else {
            gNum = 0;
            dX = 0;
        }
        leftAnimate();
        showDot(gNum);
    });
  
    $(".prev").click(function () {
        if (gNum > 0) {
            gNum--;
            dX = gNum * divWidth * -1;
        }
        leftAnimate();
        showDot(gNum);
    });
  
  
    $(".dot").click(function () {
        var point = $(this).index();
        dX = point * divWidth * -1;
        showDot(point);
        leftAnimate();
    });
  
}


// ---------加入---------- //
let buy_btn = document.getElementById("buy1");
let add_buy = document.getElementById("add_buy");
let jsimg = document.getElementById("jsimg");
buy_btn.addEventListener("click", function(){
    add_buy.className = "show";
    setTimeout(function(){ add_buy.className = add_buy.className.replace("show", ""); }, 1400);
    jsimg.className = "show";
    setTimeout(function(){ jsimg.className = jsimg.className.replace("show", ""); }, 1400);
});







    