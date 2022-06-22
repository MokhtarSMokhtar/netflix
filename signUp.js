///validate signUp
//first user name

document.getElementById("username").addEventListener("change", UserNameValidation)
document.getElementById("signup").addEventListener("click", UserNameValidation);

function UserNameValidation() {
    var x = document.getElementById("username").value;
    var pattr = /^[a-zA-Z](.*[a-zA-Z]){3,}?$/g;
    var result = pattr.test(x);
    if (result == false) {

        document.getElementById("username").style.backgroundColor = "gray";
        document.getElementById("username").select();
        document.getElementById("alertuser").innerHTML = " invaled";
        event.preventDefault();
    }
    else {
        document.getElementById("username").style.backgroundColor = "white";
        document.getElementById("alertuser").innerHTML = " ";
    }
}






/////password on change ///////////

document.getElementById("passw").addEventListener("change", confirmpass)

function confirmpass() {

    const pass1 = document.getElementById("passw").value;
 
    var pattr = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/g;
    var result = pattr.test(pass1);

    if (result == false) {

         document.getElementById("alertpass1").innerHTML = "invalid password ";
         document.getElementById("passw").style.backgroundColor = "gray";
     
    }
    else {
        document.getElementById("passw").style.backgroundColor = "white";
        document.getElementById("alertpass1").innerHTML = "";
    }
}

// REPEAT WRONG PASSWORD

document.getElementById("signup").addEventListener("click", confirmPASSWORD);


function confirmPASSWORD() {
    const pass1 = document.getElementById("passw").value;
    const pass2 = document.getElementById("repassw").value;

    if (pass1 != pass2) {

         document.getElementById("alertpass").innerHTML = "repeat password should be the same "
        document.getElementById("passw").style.backgroundColor = "gray";
        event.preventDefault();
    
    }
    else {
        document.getElementById("passw").style.backgroundColor = "white";
        document.getElementById("alertpass").innerHTML = "";
    }
}


 
document.getElementById("sgup_email").addEventListener("change", emailValidation)

function emailValidation() {
    var x = document.getElementById("sgup_email").value;
    var pattr = /(^[a-zA-Z 0-9]+)@([a-zA-Z 0-9]+)([a-zA-Z 0-9 . ]+)([ com net eg . ]+){3,}?$/g;
    var result = pattr.test(x);
    if (result == false) {

        document.getElementById("sgup_email").style.backgroundColor = "gray";
        document.getElementById("sgup_email").select();
        document.getElementById("alertemail").innerHTML = " invaled";
    
    }
    else {
        document.getElementById("sgup_email").style.backgroundColor = "white";
        document.getElementById("alertemail").innerHTML = " ";


    }

}

document.getElementById("signup").addEventListener("click", StorgeEmail); //for sign up

function StorgeEmail() {
    var StorgEmail= document.getElementById("sgup_email").value;
    localStorage.setItem("UserData",StorgEmail);
    var StorgPass= document.getElementById("passw").value;
      localStorage.setItem("UserPass",StorgPass);
}

