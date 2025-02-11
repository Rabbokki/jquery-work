$(document).ready(function(){
    $("#cutlet").on("click",function(){
        $(this).hide('slow');
    })
    $("#btn_show").on("click",function(){
        $("#cutlet").show('fast');
    })
    $("#cutlet").on("mouseenter", function(){
        $(this).hide(3000);
    })
    $("#btn_fadeIn").on("click", function(){
        $(".a").fadeIn(3000);
        $(".b").fadeIn(3000);
        $(".c").fadeIn('slow',function(){
            alert("다나옴");
        });
    })
    $("#btn_fadeOut").on("click", function(){
        $(".a").fadeOut(3000);
        $(".b").fadeOut(3000);
        $(".c").fadeOut('slow');
    })
    $("#btn_fadeToggle").on("click", function(){
        $(".a").fadeToggle();
    })
    $("#btn_fadeTo").on("click", function(){
        $(".a").fadeTo(3000,0);
    })
})