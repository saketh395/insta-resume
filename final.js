



var name=localStorage.getItem('fname');
name+=" "+localStorage.getItem('lname');
document.getElementById('fullname').innerHTML=name.toUpperCase();
document.getElementById('phno').innerHTML=localStorage.getItem('p');
document.getElementById('email').innerHTML=localStorage.getItem('e');
document.getElementById('address').innerHTML=localStorage.getItem('c')+","+localStorage.getItem('st');









var e1=localStorage.getItem('ed');
var bd1=JSON.parse(e1);
console.log(bd1);
var br=document.getElementsByTagName("br");
document.getElementById('X').innerHTML=bd1[0]+"<br>"+"Year of completion:"+bd1[1]+"<br>"+"Percentage:"+bd1[2]+"%";
document.getElementById('XII').innerHTML=bd1[3]+"<br>"+"Year of completion:"+bd1[4]+"<br>"+"Percentage:"+bd1[5]+"%";
if(bd1[6].length!=0){
document.getElementById('UG').innerHTML=bd1[7]+", "+bd1[8];
document.getElementById('U').innerHTML=bd1[6]+"<br>"+bd1[10]+"-"+bd1[11]+"<br>"+"CGPA:"+bd1[9]+"/10";}
else
{
var ug=document.getElementById('UG');
ug.remove();
br[br.length-4].remove();
br[br.length-5].remove();
br[br.length-6].remove();
var u=document.getElementById('U');
u.remove();
}
if(bd1[12].length!=0){
document.getElementById('PG').innerHTML=bd1[13]+", "+bd1[14];
document.getElementById('P').innerHTML=bd1[12]+"<br>"+bd1[16]+"-"+bd1[17]+"<br>"+"CGPA:"+bd1[15];}
else
{
var pg=document.getElementById('PG');
pg.remove();
br[br.length-1].remove();
br[br.length-2].remove();
br[br.length-3].remove();
var p=document.getElementById('P');
p.remove();
}






var sr=localStorage.getItem('arr');
var se=localStorage.getItem('sel');
var ar=JSON.parse(sr);
var s=JSON.parse(se);
console.log(ar);
console.log(s);
var i;
var t1=document.getElementById("table1");
var br=document.createElement('break');
if(ar[0].length!=0){
for(i=0;i<ar.length;i++)
{
   if(ar[i].length!=0)
   {
	   
	   var r=t1.insertRow(-1);
	   var c1=r.insertCell(0);
	   var c2=r.insertCell(1);
	   c1.innerHTML=ar[i];
	   c2.innerHTML=s[i];
   }
   
}}
else
{
	t1.remove();
}





function month(m)
{
	var mon
	switch(m.substring(0,2))
		{
			case '01':mon='Jan '+m.substring(3,m.length);
			          break;
			case '02':mon='Feb '+m.substring(3,m.length);
			          break;
            case '03':mon='Mar '+m.substring(3,m.length);
			          break;
			case '04':mon='Apr '+m.substring(3,m.length);
			          break;
			case '05':mon='May '+m.substring(3,m.length);
			          break;
			case '06':mon='Jun '+m.substring(3,m.length);
			          break;
			case '07':mon='Jul '+m.substring(3,m.length);
			          break;
			case '08':mon='Aug '+m.substring(3,m.length);
			          break;
			case '09':mon='Sep '+m.substring(3,m.length);
			          break;
			case '10':mon='Oct '+m.substring(3,m.length);
			          break;
			case '11':mon='Nov '+m.substring(3,m.length);
			          break;
			case '12':mon='Dec '+m.substring(3,m.length);
			          break;
			
		}
		return mon;
}




var divy=document.getElementById('div51');
var w1=localStorage.getItem('w');
var w2=JSON.parse(w1);
console.log(w2);
var i;
var t3=document.getElementById('table3');


if(w2[0].length!=0){
for(i=0;i<w2.length;i=i+5)
{
	if(w2[i].length!=0)
	{
	   var r31=t3.insertRow(-1);
	   var r32=t3.insertRow(-1);
	   var r33=t3.insertRow(-1);
	   var r34=t3.insertRow(-1);
	   var c31=r31.insertCell(0);
	   var c32=r32.insertCell(0);
	   var c33=r33.insertCell(0);
	   var c34=r34.insertCell(0);
	   c31.innerHTML=w2[i+1].bold();
	   c32.innerHTML="Organization - "+w2[i];
	   c33.innerHTML=month(w2[i+2])+" - "+month(w2[i+3]); 
       c34.innerHTML=w2[i+4];
	}
}}
else
{
	t3.remove();
	
}



var ce1=localStorage.getItem('ct');
var ce2=JSON.parse(ce1);
console.log(ce2);
var i;
var t4=document.getElementById('table4');
if(ce2[0].length!=0){
for(i=0;i<ce2.length;i=i+4)
{
	if(w2[i].length!=0)
	{
	   var r41=t4.insertRow(-1);
	   var r42=t4.insertRow(-1);
	   var r43=t4.insertRow(-1);
	   var r44=t4.insertRow(-1);
	   var c41=r41.insertCell(0);
	   var c42=r42.insertCell(0);
	   var c43=r43.insertCell(0);
	   var c44=r44.insertCell(0);
	   c41.innerHTML=ce2[i].bold();
	   c42.innerHTML=ce2[i+1];
	   c43.innerHTML=month(ce2[i+2]);
	   c44.innerHTML=ce2[i+3];
	}
}}
else
{
	t4.remove();
}


var p1=localStorage.getItem('as');
var p2=JSON.parse(p1);
console.log(p2);
var t2=document.getElementById('table2');
var i;
if(p2[0].length!=0){
for(i=0;i<p2.length;i=i+4)
{
	if(p2[i].length!=0)
	{
		
		var r21=t2.insertRow(-1);
		var r22=t2.insertRow(-1);
		var r23=t2.insertRow(-1);
		var c21=r21.insertCell(0);
		var c22=r22.insertCell(0);
		var c23=r23.insertCell(0);
		c21.innerHTML=p2[i].bold();
		c22.innerHTML=month(p2[i+1])+" - "+month(p2[i+2]);
		c23.innerHTML=p2[i+3];
	}  
}}
else
{
	t2.remove();
}




function generatepdf()
{
	const pdf=document.getElementById('page2');
	
   html2pdf()
  .set({
  margin:       10,
  filename:     name+' Resume.pdf',
  images:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
})
   .from(pdf)
   .save();
	
}