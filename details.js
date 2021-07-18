
function save(){
   var fn=document.getElementById('fname').value;
   sessionStorage.setItem('fname',fn);
   var ln=document.getElementById('lname').value;
   sessionStorage.setItem('lname',ln);
   var ct=document.getElementById('city').value;
   sessionStorage.setItem('c',ct);
   var sta=document.getElementById('state').value;
   sessionStorage.setItem('st',sta);
   var ph=document.getElementById('phno').value;
   sessionStorage.setItem('p',ph);
   var em=document.getElementById('email').value;
   sessionStorage.setItem('e',em);
   
}