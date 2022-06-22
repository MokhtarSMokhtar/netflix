document.getElementById("submit").addEventListener("click",emailValidation)
function emailValidation() {
    var x = document.getElementById("email").value;
    var pattr = /(^[a-zA-Z 0-9]+)@([a-zA-Z 0-9]+)([a-zA-Z 0-9 . ]+)([ com net eg . ]+){3,}?$/g;
    var resultuser = pattr.test(x);
    //password
    const pass = document.getElementById("password").value;
    var pattr1 =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/g;
    var resultpass = pattr1.test(pass);

    if (resultuser == false || resultpass == false) {
        event.preventDefault();

        if (resultuser != false){
            document.getElementById("valdite_email").innerHTML = "";
        }
        else{ document.getElementById("email").style.backgroundColor = "gray";
        document.getElementById("email").select();
        document.getElementById("valdite_email").innerHTML = " invaled";


        }
        
        if(resultpass != false )
        {
            document.getElementById("valdite_pass").innerHTML = "";
        }
        else{
            document.getElementById("valdite_pass").innerHTML = " invaled";
        }

        
        return false;
    }
    else{
        
    }
   

}



document.getElementById("rememberMe").addEventListener("change", RememberMy)

function RememberMy(){

   var RememberMyStAtu= document.getElementById("rememberMe");

    if(RememberMyStAtu.checked== true)
    {
        
        var ValueOFullName= document.getElementById("email").value;
        
        localStorage.setItem("UserData",ValueOFullName);

        var ValuePassword= document.getElementById("password").value;
        
        localStorage.setItem("UserPass",ValuePassword);
    }
    else{
        localStorage.removeItem("UserData");
        localStorage.removeItem("UserPass");
   }

}

// //////remember me on reload ///

document.getElementById("email").addEventListener("load", RetrieveEmail); 

function RetrieveEmail()
{
   document.getElementById("email").value=localStorage.getItem("UserData");
}



document.getElementById("password").addEventListener("load", RetrievePAssword); 

function RetrievePAssword()
{   
   document.getElementById("password").value = localStorage.getItem("UserPass");
}




 // function to show password
document.getElementById("showpassword").addEventListener("click",ShowPassword)
function ShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  function myFunction(){
    var x = document.getElementById("hidden");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

