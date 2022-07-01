function validateNames() {
   let fnameInput = isNaN(document.getElementById("fname").value); 
   let lnameInput = isNaN(document.getElementById("lname").value);

   if (!fnameInput || !lnameInput) {
      alert("Please enter a valid first and/or last name.");
      return false;
   } else {
      return true; 
   }
}

function validateEmail() {
   let emailInput = document.getElementById("email").value;
   let result = emailInput.includes("@");
   let result2 = emailInput.includes(".");

   if (!result || !result2) {
      alert("Please enter a valid email address")
      return false;
   } else {
      return true; 
   }
}

function validatePassword() {
   let passwordInput = document.getElementById("password").value; 
   let passwordlength = passwordInput.length; 
   let numbersList = /\d/; //regex expression for all non-digit characters
  
   let passwordValidity = (passwordlength >=8) ? true : false; 

   passwordValidity = numbersList.test(passwordInput);

   if (!passwordValidity) {
      alert("Please enter a valid password.")
   } 

   return passwordValidity ? true: false; 
}

function validateConfirmPassword() {
   let passwordInput = document.getElementById("password").value; 
   let confirmPasswordInput = document.getElementById("confirm").value; 

   if (passwordInput != confirmPasswordInput) {
      alert ("Password does not match.") 
      return false;
   } else {
      return true; 
   }
}

function showPassword() {
   let x = document.getElementById("password");
   let y = document.getElementById("confirm");

  if (x.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}


