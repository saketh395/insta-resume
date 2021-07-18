
function save(){
   var fn=document.getElementById('fname').value;
   localStorage.setItem('fname',fn);
   var ln=document.getElementById('lname').value;
   localStorage.setItem('lname',ln);
   var ct=document.getElementById('city').value;
   localStorage.setItem('c',ct);
   var sta=document.getElementById('state').value;
   localStorage.setItem('st',sta);
   var ph=document.getElementById('phno').value;
   localStorage.setItem('p',ph);
   var em=document.getElementById('email').value;
   localStorage.setItem('e',em);
   
}