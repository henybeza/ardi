/*let logo = document.querySelector('.logo');
logo.addEventListener('click', changeHeaderFont);
 function changeHeaderFont(){
document.write('<h1>Welcome to ARDII YOUTH ACADEMY!!!</h1>')
 }

 function validator(){
     
var fullName = document.contactUs.Field1.value;
var email = document.contactUs.Field3.value;
var message = document.contactUs.Field4.value;

     document.write(fullName);
     document.write(email);
     document.write(message);
     

     
      }*/
function validator(){
    
    
if(document.contactUs.Field6.checked)
     {alert('You checked ' + Field6.value);}   
else if(document.contactUs.Field7.checked)
       { alert('You checked ' + Field7.value);}
else if(document.contactUs.Field8.checked)
        alert( 'You checked '+ Field8.value);
else 
      {alert('You better check what applies to you Sir...'); }  
}