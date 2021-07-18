

	var workopt=document.getElementById("work_options");
	
	var inputs=workopt.getElementsByTagName('input');
	var texts=workopt.getElementsByTagName('textarea');
	   if(inputs.length+texts.length==0){
	      addinput();
	   }
	
	function addinput()
	{
		document.getElementById('head').innerHTML="";
		
		
		var inputs=workopt.getElementsByTagName('input');
		var newfield=document.createElement('input');
		newfield.setAttribute('type','text');
		newfield.setAttribute('id','work');
		newfield.setAttribute('name','work');
		newfield.setAttribute('placeholder','Enter Organization');
		newfield.setAttribute('class','textinput');
		newfield.setAttribute('required','');
		var newtext=document.createElement('textarea');
		newtext.setAttribute('id','des');
		newtext.setAttribute('class','textinput');
		newtext.setAttribute('name','des');
		newtext.setAttribute('rows','4');
		newtext.setAttribute('cols','63');
		newtext.setAttribute('placeholder','Describe your work');
		newtext.setAttribute('required','');
		var newlink=document.createElement('input');
		newlink.setAttribute('type','text');
		newlink.setAttribute('id','text');
		newlink.setAttribute('class','textinput');
		newlink.setAttribute('name','link');
		newlink.setAttribute('placeholder','Enter work Role');
		newlink.setAttribute('required','');
		var newdate1=document.createElement('input');
		newdate1.setAttribute('type','text');
		newdate1.setAttribute('id','date1');
		newdate1.setAttribute('class','textinput');
		newdate1.setAttribute('name','date1');
		newdate1.setAttribute('placeholder','From(MM/YYYY)');
		newdate1.setAttribute('pattern','(0[1-9]|1[012])/[0-9]{4}');
		newdate1.setAttribute('required','');
		var newdate2=document.createElement('input');
		newdate2.setAttribute('type','text');
		newdate2.setAttribute('id','date2');
		newdate2.setAttribute('class','textinput');
		newdate2.setAttribute('name','date2');
		newdate2.setAttribute('placeholder','to(MM/YYYY)');
		newdate2.setAttribute('required','');
	    newdate2.setAttribute('pattern','(0[1-9]|1[012])/[0-9]{4}');
	    var bold = document.createElement('strong');
		var text=document.createElement('p');
		text.setAttribute('id','tx');
		var node=document.createTextNode("EXPERIENCE"+((inputs.length/4)+1));
		text.appendChild(node);
		
		workopt.appendChild(text);
	   
		workopt.appendChild(newfield);
		workopt.appendChild(newlink);
		const br=document.createElement("br");
		workopt.appendChild(br);
		const bre=document.createElement("br");
		workopt.appendChild(bre);
		workopt.appendChild(newdate1);
		workopt.appendChild(newdate2);
		const b=document.createElement("br");
		workopt.appendChild(b);
		const bk=document.createElement("br");
		workopt.appendChild(bk);
		workopt.appendChild(newtext);
		const be=document.createElement("br");
		workopt.appendChild(be);
	}
	function removeinput()
	{
		var t=workopt.getElementsByTagName('p');
		var b=workopt.getElementsByTagName('br');
		var inputs=workopt.getElementsByTagName('input');
		if(inputs.length>4)
		{
			workopt.removeChild(inputs[(inputs.length)-1]);
			workopt.removeChild(inputs[(inputs.length)-1]);
			workopt.removeChild(inputs[(inputs.length)-1]);
			workopt.removeChild(inputs[(inputs.length)-1]);
			workopt.removeChild(t[(t.length)-1]);
			workopt.removeChild(b[(b.length)-1]);
			workopt.removeChild(b[(b.length)-1]);
			workopt.removeChild(b[(b.length)-1]);
			workopt.removeChild(b[(b.length)-1]);
			workopt.removeChild(b[(b.length)-1]);
		}
		var texts=workopt.getElementsByTagName('textarea');
		if(texts.length>1)
		{
			workopt.removeChild(texts[(texts.length)-1]);
		}
	}
	
   function save()
   {
	   if(inputs.length+texts.length!=0){
	   var wr=document.getElementsByClassName('textinput');
	   var i;
	   const g=[];
	   for(i=0;i<(inputs.length+texts.length);i++)
	   {
		   g[i]=wr[i].value;
	   }
	   sessionStorage.setItem('w',JSON.stringify(g));
	   }
	   
   }   