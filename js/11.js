$(document).ready(function(){
    $("#hi").on("click",function(){
        // $("#display").text("ㅎㅇㅎㅇ")
        $("#display").load("../outer.txt")
    })

    $("#btn_first").on("click",function(){
        // $("#display").text("ㅎㅇㅎㅇ")
        $("#first").load("../outer.html #first")
    })
    $("#btn_second").on("click",function(){
        // $("#display").text("ㅎㅇㅎㅇ")
        $("#second").load("../outer.html #second")
    })
    $("#btn_third").on("click",function(){
        // $("#display").text("ㅎㅇㅎㅇ")
        $("#third").load("../outer.html #third")
    })

    $("#btn_ajax").on("click",function(){
        $.ajax({
            type : 'GET',
            url : 'https://jsonplaceholder.typicode.com/posts?_limit=10',
            success : function(data){
                console.log(data);
                let result = JSON.stringify(data);
                $("#ajax").text(result);
            }
        })
    })
})