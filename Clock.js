window.onload = setInterval(clock, 1000);

function clock() {
    var d = new Date();

    var date = d.getDate();

    var month = d.getMonth();
    var montharr = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = montharr[month];

    var year = d.getFullYear();

    var day = d.getDay();
    var dayarr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    day = dayarr[day];

    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    document.getElementById("date").innerHTML = day + " " + date + " " + month + " " + year;
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
}
var article = [{
    "author": "Robert W.Sebesta",
    "date": "01/1/12",
    "publication": "Pearson"
},
    {
        "author": "Chetan Bhagat",
        "date": "01/1/13",
        "publication": " 	Pearson"
    }, {
        "author": "Naveen Aryan",
        "date": "01/1/14",
        "publication": "Pearson"
    }];
function myfunction() {
    var i = Math.floor(Math.random() * article.length);
    if (i <= article.length) {
        document.getElementById("d1").innerHTML = article[i].author;
        document.getElementById("d2").innerHTML = article[i].date;
        document.getElementById("d3").innerHTML = article[i].publication;
        var t = setTimeout(myfunction, 1000);
    }
}