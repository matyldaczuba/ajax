const btn = document.getElementById('get');
const utput = document.getElementById('output');
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

btn.addEventListener('click', function(){
    pobierzDane('GET', url);
});

function pobierzDane(method, endpoint) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, endpoint);
    httpReq.send();

    httpReq.addEventListener('readystatechange', function () {

        if (httpReq.readyState == 4 && httpReq.status == 200) {
            //        console.log(`readyState: ${httpReq.readyState}`);
            //        console.log(`status: ${httpReq.status}`);
            let data = JSON.parse(httpReq.responseText);
            console.log(data);
           

            let html = `UserID: ${data.userId} <hr> 
                User Name: ${data.userName}<hr>
                User Url: ${data.userURL}`;
             document.getElementById('output').innerHTML = html;

        }
    });

}



//function ajax(method, endpoint) {
//    let httpReq = new XMLHttpRequest();
//    httpReq.open(method, endpoint);
//    httpReq.send();
//
//
//    httpReq.addEventListener('readystatechange', function () {
//
//        if (httpReq.readyState == 4 && httpReq.status == 200) {
//            //        console.log(`readyState: ${httpReq.readyState}`);
//            //        console.log(`status: ${httpReq.status}`);
//            let data = JSON.parse(httpReq.responseText);
//            console.log(data);;
//        }
//    });
//
//}





//console.log(httpReq);
