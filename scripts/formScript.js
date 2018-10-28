// JavaScript for form validation

function validateForm() {
   var uName = document.myForm.name;
   var uEmail = document.myForm.email;

   if (validLength(uName,1))
   {
     if (validateEmail(uEmail))
     {
       return true;
     }
   }
   return false;
}

function validLength(iField, iLen) {
   var field_len = iField.value.length;
   var min_len = iLen + 1;

   if (field_len == 0 || field_len < min_len)
   {
     alert("Please enter a name that is at least " + min_len + " characters long.");
     iField.focus();
     return false;
   }
   return true;
}

function validateEmail(iEmail) {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(iEmail.value.match(mailformat))
   {
      return true;
   }
   else
   {
      alert("Please enter a valid email address.");
      iEmail.focus();
      return false;
   }
}