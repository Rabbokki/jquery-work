$(document).ready(function () {
    let index;
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
        success: function (data) {
            console.log(data);
            let resultStr = "";
            for (let i = 0; i < data.length; i++) {
                index = i;
                // 15글자 타이틀
                let cutTitle = data[i].title.length > 15 ?
                data[i].title.slice(0,15) : data[i].title;

                //20글자 바디 ...
                let cutBody = data[i].body.length > 15 ?
                data[i].body.slice(0,20) + "..." : data[i].body;

                resultStr += `
                    <tr>
                        <td>${data[i].userId}</td>
                        <td>${data[i].id}</td>
                        <td>${cutTitle}</td>
                        <td>${cutBody}</td>
                        <td> <button class="dataDetail" data-id = "${data[i].id}">Detail</button></td>
                    </tr>
                `;
            }
            $("#tbody").html(resultStr);
        }
    });
    $(document).on("click", ".dataDetail", function () {
        let postId = $(this).data("id");
        $.ajax({
            type: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            success: function (data) {
                $("#bodyDetail").text(data.body).slideToggle(2000); 
            }
            
        });
    });

});
