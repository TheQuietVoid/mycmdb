window.addEventListener("DOMContentLoaded", function(){
    $.get("static/html/login.html", function(data){
        document.getElementById("main_content").innerHTML=data
        const btnLogin = document.getElementById("btnLogin")
        btnLogin.addEventListener("click", function(){
            alert("ciao")
        });
    });
});
$(document).ready(function() {
    console.info("pagina principale")

});