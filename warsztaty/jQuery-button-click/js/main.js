const btn = document.getElementById('get');
const utput = document.getElementById('output');
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";



//$.getJSON(url, function (response) {
//    let html = `UserID: ${response.userId} <hr> 
//                User Name: ${response.userName}<hr>
//                User Url: ${response.userURL}`;
//
//    document.getElementById('output').innerHTML = html;
//});
//


btn.addEventListener('click', function () {
    
    
    
$.getJSON(url, function (response) {
    let html = `UserID: ${response.userId} <hr> 
                User Name: ${response.userName}<hr>
                User Url: ${response.userURL}`;

    document.getElementById('output').innerHTML = html;
});
//    $.ajax({
//        url: url,
//        dataType: "json",
//        success: function (resultJSON) {
//            
//                document.getElementById('output').innerHTML = resultJSON;
//        },
//        onerror: function (msg) {
//            console.log(msg);
//        }
//    });
//
});
