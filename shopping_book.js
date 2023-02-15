
    
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
    



    $(function(){
        $('#img-switch .small-img a').click(function(e) {
            var $imgSrc = $(this).attr('href');
            $('#img-switch .big-img img').attr('src',$imgSrc);
            return false;
        });
    })



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




    