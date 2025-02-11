$(document).ready(function(){
    $(".outer").mouseover(function(){
        console.log("아우터 마으수 오버");
    })
    $(".outer").mouseenter(function(){
        console.log("아우터 마으수 엔터");
    })
    $(".inner").mouseover(function(){
        console.log("아우터 마으수 오버");
    })
    $(".inner").mouseover(function(){
        console.log("아우터 마으수 엔터");
    })
    
    $("input[type='password']").focus(function(){
        $(this).css("background-color","pink")
    })
    $("input[type='password']").blur(function(){
        $(this).css("background-color","yellow")
    })
})