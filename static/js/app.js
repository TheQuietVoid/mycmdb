$(document).ready(function() {

    window.addEventListener("load", (event) => {
        $.get("static/html/login.html", function(data){
            document.getElementById("main_content").innerHTML=data
        });
    });

});