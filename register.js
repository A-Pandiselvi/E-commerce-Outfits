var forms = document.getElementById("form")
var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var password2 = document.getElementById("conform-password")

//checking for e-mail
String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

function checkrequired(inputs){
    inputs.forEach(input => {
        if(input.value.trim() === ""){
            //Error message 
            errormessage(input,`${getName(input)} is required`)
        }
        else{
            //success
            successmessage(input)
            
        }
    });
}

//input la irukura id name - error message ku pass panurom  (or) data-name attribute vachum pass panalam athe naama wish tha
function getName(input){
    return input.id;  
   //(or)
    //return input.getAttribute("data-name")
}

//error message
function errormessage(input,message){
    const FormGroup =input.parentElement
    FormGroup.className="form-group error"
    const para =FormGroup.querySelector("p");
    para.innerHTML = message
}

//success message
function successmessage(input){
   const FormGroup = input.parentElement
    FormGroup.className="form-group success"
    const para =FormGroup.querySelector("p");
    para.innerHTML = ""
}

//username lenght 5 to 10
function checklength(input,min,max){
    const datalength = input.value.trim().length
    //  if(input.value.trim() === ""){
    //      //Error message 
    //      errormessage(input,`${getName(input)} is a required`)
    //  }
     if(datalength<min){
         //Error message 
         errormessage(input,`${getName(input)} must be atleast greater than ${min} characters`)
    }
    else if(datalength>max){
         //Error message 
         errormessage(input,`${getName(input)} must be atleast lesser than ${max} characters`)
    }
  

}

//conform password check
function checkconformpassword(password,password2){
//      if(password2.value.trim() === ""){
//  //Error message 
//  errormessage(password2,`${getName(input)} is a required`)
   
//      }

     if(password.value != password2.value){
         //Error message 
         errormessage(password2,`${getName(password2)} does not match`)
    }
  

}

//check email
function checkemail(input){
    if(input.value.trim() === ""){
      //Error message 
      errormessage(input,`${getName(input)} is a required`)    
    }
    else if(!input.value.trim().isEmail()){
       //Error message 
       errormessage(input,`This is not valid `)  
    }
}

//submit event
forms.addEventListener('submit',function(e){
    e.preventDefault()
    checkrequired([username,email,password,password2])
    checklength(username,5,10)
    checklength(password,5,10)
    checkconformpassword (password,password2)
    checkemail(email)
})



