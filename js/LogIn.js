var emailInputElement=document.querySelector(".login-card input#email-input")
var PasswordInputElement=document.querySelector(".login-card input#password-input")
var loginButtonElement=document.querySelector("button#Login")
var signUpWord=document.querySelector("p#Sign-Up span")
var cardElement=emailInputElement.closest(".login-card")
var errorMessageElement=document.querySelector("p.error-message")
var allAccounts=JSON.parse(localStorage.getItem("Accounts"))
var userName
const loginInputs = Array.from(document.querySelectorAll("input"))
console.log(loginInputs);
console.log(JSON.parse(localStorage.getItem("Accounts")));


console.log(allAccounts[0].role);
console.log(emailInputElement.nextElementSibling);

console.log(allAccounts);

//?=====================================> ? Login VALIDATION FUNCTION ? <====================================
function IsValidAccount(email ,password  )
{
    var isWrongPassOrEmail=true
    for (var i = 0; i < allAccounts.length; i++) {
       if (email.value==allAccounts[i].email && password.value==allAccounts[i].password) 
       {
        errorMessageElement.classList.replace("d-block" , "d-none")
        isWrongPassOrEmail=false
        if (allAccounts[i].role === "user") {
               window.location.href = "/Home.html";
               return;
        }
        else if(allAccounts[i].role === "seller")
        {
              window.location.href = "/seller.html";
              return;
        }
        return userName= allAccounts[i].name
        
       }
      
   }
   if(isWrongPassOrEmail==true){
        // console.log(email.value , password.value);
        // console.log("wrong pass");
    
        errorMessageElement.classList.replace("d-none" , "d-block")
        loginInputs.forEach((c)=>{c.classList.add("is-invalid")})
        return false
   }

}

function isLoginEmptyInputs(input) {
    
        if (input.value === "") 
            {
            
            // input.nextElementSibling.classList.replace("d-none","d-block")
            input.classList.add("is-invalid")
           
        }
        else{
            //  input.nextElementSibling.classList.replace("d-block" ,"d-none")
                 input.classList.remove("is-invalid")
        }
    

 }

 loginInputs.forEach((input)=>{
    input.addEventListener("blur" , function(e){
        isLoginEmptyInputs(e.target)
    })
 })
cardElement.addEventListener("click" , function(e){
    if (e.target==loginButtonElement) {
       
        if((IsValidAccount(emailInputElement, PasswordInputElement ))==false) 
        {
            e.preventDefault()
        }else
        {
            localStorage.setItem("userName",JSON.stringify( userName))
            console.log(userName);
            
         
            
        }
    }
    else if (e.target==signUpWord) {
        
    }
})

