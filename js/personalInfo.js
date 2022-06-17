const signUpBtn=document.getElementById("signUp");
const personalInfoForm=document.querySelector(".personalInfoForm")


personalInfoForm.addEventListener("submit",(e)=>{
  e.preventDefault();
    window.location.href="/pages/verify.html"
})
