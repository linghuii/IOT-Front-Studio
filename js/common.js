var API={
    prefix:"http://47.98.244.28/iotFront/",
    picfix:"http://47.98.244.28/",
    login:"",
    brief:"v1/visitor/getUserNum",
    notice:"v1/visitor/getAllNotice",
    oneNotice:"v1/visitor/getNoticeById",
    getAllBlog:"v1/visitor/getAllBlog",
    getNews:"v1/visitor/getNews",
    getAllWork:"v1/visitor/getAllWork",
    submitForm:"v1/visitor/submitForm",
    getBlogByBlogId:"v1/visitor/getBlogByBlogId",
    getAPI:function (name) {
        return API.prefix+name;
    }
};

// $('#logOff').click(function () {
//     layer.confirm('您是否选择退出？',{
//         btn:['确定','取消']
//     },function () {
//         clearCookie();
//         window.location.href='loginAdmin.html';
//     })
// });
// $('#logOut').click(function () {
//     layer.confirm('您是否选择退出？',{
//         btn:['确定','取消']
//     },function () {
//         clearCookie();
//         window.location.href='login.html';
//     })
// });
//清除cookie
function clearCookie() {
    $.cookie('token','',{expires:-1});
}