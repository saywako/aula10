//let myUsername = document.getElementById("username");
//console.log(myUsername[0]);

//let myUsername = document.getElementsByClassName('username');
//console.log(myUsername[0]);

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value == "" || password.value == ""){
        alert("Preencha seu login e senha!");
    }else{
        alert("Formulário envido com sucesso!");
        console.log(`O nome do usuario é: ${username.value} e a senha é: ${password.value}`);

        username.value="";
        password.value="";
    }
});