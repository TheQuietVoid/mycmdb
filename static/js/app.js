
window.addEventListener("load", function() {
    $('#staticBackdrop').modal({ show: false})
    $.get("static/html/login.html", function(data){
        document.getElementById("main_content").innerHTML=data
        const btnLogin = document.getElementById("btnLogin")
        btnLogin.addEventListener("click", async function(){
            const user = document.getElementById("user").value
            if(user == ""){
                alert('Inserire username')
                return
            }
            const pass = document.getElementById("pass").value
            if(pass == ""){
                alert('Inserire password')
                return
            }
            await performLogin(user, pass)
        });
    });
});

async function performLogin(user, pass) {
    const respjson=await fetch('/signin',{
        method: 'POST',
        headers: {'accept':'application/json','Content-Type':'application/json'},
        body: JSON.stringify({user: user,pwd: pass})
    });
    const data = await respjson.json();
    if(data.token != "no"){
        localStorage.setItem("token", data.token);
        localStorage.setItem("session_id", data.session_id);
        localStorage.setItem("role", data.role);
    }else{
        showModal();
    }
}

async function showModal(){
    const modal = new bootstrap.Modal(document.getElementById('modal-id'));
    modal.show();    
}