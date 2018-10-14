const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";
const output = document.getElementById('output');



function endScroll() {

    let height = document.documentElement.offsetHeight;
    let scroll = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let suma = scroll + windowHeight;

    if (suma == height) {


        $.getJSON(url, function (response) {
            var html = `ID: ${response.userId}<br>
                Imie: ${response.userName}<br>
                Url: ${response.userURL}`;

            output.innerHTML = html;

        });
        
        console.log("wyswietla jsona");

    }
    
    else {
        console.log("nie wyswietla jsona");
    }

}

$(window).on('scroll', endScroll);

