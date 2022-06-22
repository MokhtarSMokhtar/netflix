/// up button
let btn = document.querySelector("button");

window.onscroll = function(){
    if(window.scrollY >= 400){
        console.log(`Scrolling Y Value Is ${window.scrollY}`);
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
};
btn.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth",
    });
};

      //JavaScript code 
   function Search_Movie(){ 
       let input = document.getElementById('searchbar').value 
       input=input.toLowerCase(); 
       let x = document.getElementsByClassName('photo'); 
         
       for (i = 0; i < x.length; i++) {  
           if (!x[i].innerHTML.toLowerCase().includes(input)) { 
               x[i].style.display="none"; 
           } 
           else { 
               x[i].style.display="";                  
           } 
       } 
   }
           
 /// when user log out 
 document.getElementById("submitLogout").addEventListener("click",LogOut)
function LogOut(){

  localStorage.removeItem("UserData");
  localStorage.removeItem("UserPass");


}


