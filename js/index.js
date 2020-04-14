
$(document).ready(function () {
    $.ajax({
        url: API.getAPI(API.brief),
        type: "get",
        dataType: "json",
        async: false,
        data: {},
        beforeSend: function () {
            layer.load();
        },
        success: function (data) {
            if (data.status == 1) {
                $("#people").append(data.data);
            }
        },
        error: function (data) {
            layer.alert(data.msg);
        },
        complete: function () {
            layer.close(layer.load());
        }
    });
    $.ajax({
        url: API.getAPI(API.notice),
        type: "get",
        dataType: "json",
        data: {},
        async: false,
        beforeSend: function () {
            layer.load();
        },
        success: function (data) {
            if (data.status == 1) {
                b = data.data;
                for (i=0;i<9;i++){
                    var a=b[i].noticeDate;
                    a=a.substring(0,a.lastIndexOf("."));
                    $("#notice").append(
                        '<div class="item animate" data-animate="fadeInUp">' +
                        '<div class="service-box">' +
                        '<span class="service-icon">' + '<i class="fa fa-free-code-camp" aria-hidden="true">' + '</i>' + '</span>' +
                        '<h3>' + b[i].title + '</h3>' +
                        '<p>' + a + '</p>' +
                        '<p>' + b[i].brief + '</p>' +
                        '</div>' +
                        '</div>'
                    )
                }

            }
        },
        error: function (data) {
            layer.alert(data.msg);
        },
        complete: function () {
            layer.close(layer.load());
        }
    });
    $.ajax({
        url: API.getAPI(API.getAllBlog),
        type: "get",
        dataType: "json",
        data: {},
        async: false,
        beforeSend: function () {
            layer.load();
        },
        success: function (data) {
            if (data.status == 1) {
                a = data.data;
                console.log(a);
                    $("#blog").append(
                        '<div class="list-group">' +
                        '<a href="https://blog.csdn.net/ttxxi_/article/details/83991752" class="list-group-item bg-transparent border-0" style="text-decoration: none">' +
                        '<h4 class="list-group-item-heading">' + a[0].title + '</h4>' +
                        '<p class="list-group-item-text">' + a[0].brief + '</p>' +
                        '</a>' +
                        '</div>'+
                        '<div class="list-group">' +
                        '<a href="https://blog.csdn.net/ttxxi_/article/details/83996712" class="list-group-item bg-transparent border-0" style="text-decoration: none">' +
                        '<h4 class="list-group-item-heading">' + a[1].title + '</h4>' +
                        '<p class="list-group-item-text">' + a[1].brief + '</p>' +
                        '</a>' +
                        '</div>'+
                        '<div class="list-group">' +
                        '<a href="https://blog.csdn.net/ttxxi_/article/details/84073896" class="list-group-item bg-transparent border-0" style="text-decoration: none">' +
                        '<h4 class="list-group-item-heading">' + a[2].title + '</h4>' +
                        '<p class="list-group-item-text">' + a[2].brief + '</p>' +
                        '</a>' +
                        '</div>'+
                        '<div class="list-group">' +
                        '<a href="https://blog.csdn.net/ttxxi_/article/details/84074679" class="list-group-item bg-transparent border-0" style="text-decoration: none">' +
                        '<h4 class="list-group-item-heading">' + a[3].title + '</h4>' +
                        '<p class="list-group-item-text">' + a[3].brief + '</p>' +
                        '</a>' +
                        '</div>'
                    )


            }
        },
        error: function (data) {
            layer.alert(data.msg);
        },
        complete: function () {
            layer.close(layer.load());
        }
    });
    $.ajax({
        url: API.getAPI(API.getAllWork),
        type: "get",
        dataType: "json",
        data: {},
        async: false,
        beforeSend: function () {
            layer.load();
        },
        success: function (data) {
            if (data.status == 1) {
                console.log(data.data);
                a = data.data;
                for(i=0;i<9;i++){
                    $("#work").append(
                        '<div class="item animate" data-animate="fadeInUp">' +
                        '<div class="portfolio-item">' +
                        '<div class="thumb">' +
                        '<img src="'+ API.picfix+ a[i].workImage.imagePath+'" alt="" style="height: 325.04px">' +
                        '</div>' +
                        '<div class="thumb-inner animate" data-animate="fadeInUp">' +
                        '<h4>' + a[i].title + '</h4>' +
                        '<p>' + a[i].brief + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    )
                }
            }
        },
        error: function (data) {
            layer.alert(data.msg);
        },
        complete: function () {
            layer.close(layer.load());
        }
    });
    $.ajax({
        url: API.getAPI(API.getNews),
        type: "get",
        dataType: "json",
        data: {},
        async: false,
        beforeSend: function () {
            layer.load();
        },
        success: function (data) {
            if (data.status == 1) {
                console.log(data.data);
                a = data.data;
                for (i=0;i<3;i++){
                    $("#news").append(
                        '<div class="item animate" data-animate="fadeInUp">' +
                        '<div class="testimonial-item">' +
                        '<div class="client-row">' +
                        '<img src="'+ API.picfix+a[i].cover.imagePath +'" class="rounded-circle" alt="profile 1">' +
                        '</div>' +
                        '<div class="testimonial-content">' +
                        '<h4>' + a[i].title + '</h4>' +
                        '<p>' + a[i].brief + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    )
                }
            }
        },
        error: function (data) {
            layer.alert(data.msg);
        },
        complete: function () {
            layer.close(layer.load());
        }
    })
});

function submit() {
    if ($("#name").val() == "" || $("#class").val() == "" || $("#qq").val() == "" || $("#number").val() == "" || $("#message").val() == "") {
        layer.msg("所有选项为必填项！");
    } else {
        submitData();
    }
}

function submitData() {
    $.ajax({
        url: API.getAPI(API.submitForm),
        type: "get",
        dateType: "json",
        data: {
            name: $("#name").val(),
            clazz: $("#class").val(),
            studentId: $("#number").val(),
            QQ: $("#qq").val(),
            description: $("#message").val()
        },
        beforeSend: function () {
            layer.load();
        },
        success: function (data) {
            if (data.status == 1) {
                layer.msg("您已成功提交表单，谢谢！");
                layer.close(layer.load());
            } else {
                layer.msg("已提交过表单");
                layer.close(layer.load());
            }
        },
        error: function () {
            layer.alert("连接服务器失败！")
        }
    })
}