// Login Page

// user password visibility
const loginPassword=document.querySelector("#userPassword");
const loginShowIcon=document.querySelector(".loginShowIcon");
loginPassword.setAttribute("onkeyup","passwordvisibility()");
function passwordvisibility(){
  if (loginPassword.value !== "") {
    loginShowIcon.classList.add("active")
    

  }
  else{
    loginShowIcon.classList.remove("active");

  }
}

loginShowIcon.addEventListener("click",()=>{

  if (loginPassword.type=="password") {
    loginPassword.type="text"
    loginShowIcon.setAttribute("src","/images/hide.png")
  } else {
    loginPassword.type="password"
    loginShowIcon.setAttribute("src","/images/show.png")
    
  }

})



const rememberMeText=document.querySelector(".rememberTextReal");
const inputCheckBox=document.getElementById("remember");



rememberMeText.addEventListener("click",()=>{

 inputCheckBox.toggleAttribute("checked");

})