$(document).ready(function(){
    $("#btn_get").on("click",function(){
        alert($("#message").text());
        alert($("#message").html());
    })

    $("#getName").on("click",function(){
        let myName = $("#name").val();
        alert(myName);
    })
    $("#attr-url").on("click",function(){
        const url = $("#daum").attr("href")
        $("#getDaumUrl").val(url);
    })
    $("#btn_set").on("click",function(){
        const name = "장원영"
        $("#an").text(name);
        $("#an").css("color","blue");
        
    })
    $("#btn_set2").on("click",function(){
        $("#an").html("<b style='color : red'>장원영</b>")
    })
    $("#btn_ive").on("click",function(){
        $("#ive").text(function(index, origin){
            let str = "안녕하세요." + origin + "입니다." + "index = " + index;
            return str;
        })
    })

    $("#btn_girl_group").on("click",function(){
        $(".girl-group").text(function(index, origin){
            let str = "안녕하세요." + (index+1) + "번" + origin + "입니다.";
            return str;
        })
    })

    $("#btn_change").on("click",function(){
        let currentSite = $("#site").attr("href");
        let naver = "https://www.naver.com/";
        let naverr = "네이버";
        let google = "https://google.com";
        let googlee = "구글";
        if(currentSite === naver){
            $("#site").attr("href", google).text(googlee);
        }else{
            $("#site").attr("href", naver).text(naverr);
        }
    })

   

    
})