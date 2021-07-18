

	var projectopt=document.getElementById("project_options");
	  
	  var inputs=projectopt.getElementsByTagName('input');
	var texts=projectopt.getElementsByTagName('textarea');
	   if(inputs.length+texts.length==0){
	      addinput();
	   }
	
	function addinput()
	{
		document.getElementById('head').innerHTML="";
		var inputs=projectopt.getElementsByTagName('input');
		var newfield=document.createElement('input');
		newfield.setAttribute('type','text');
		newfield.setAttribute('id','project');
		newfield.setAttribute('name','project');
		newfield.setAttribute('placeholder','Enter Project Title');
		newfield.setAttribute('class','textinput');
		newfield.setAttribute('required','');
		var newtext=document.createElement('textarea');
		newtext.setAttribute('id','des');
		newtext.setAttribute('class','textinput');
		newtext.setAttribute('name','des');
		newtext.setAttribute('rows','4');
		newtext.setAttribute('cols','63');
		newtext.setAttribute('placeholder','Enter Project Description');
		newtext.setAttribute('required','');
		var newdate1=document.createElement('input');
		newdate1.setAttribute('type','text');
		newdate1.setAttribute('id','sdate');
		newdate1.setAttribute('class','textinput');
		newdate1.setAttribute('name','sdate');
		newdate1.setAttribute('placeholder','Starting Date(MM/YYYY)');
		newdate1.setAttribute('required','');
		newdate1.setAttribute('pattern','(0[1-9]|1[012])/[0-9]{4}');
		var newdate2=document.createElement('input');
		newdate2.setAttribute('type','text');
		newdate2.setAttribute('id','fdate');
		newdate2.setAttribute('class','textinput');
		newdate2.setAttribute('name','fdate');
		newdate2.setAttribute('placeholder','Finishing Date(MM/YYYY)');
		newdate2.setAttribute('required','');
		newdate2.setAttribute('pattern','(0[1-9]|1[012])/[0-9]{4}');
		
		var text=document.createElement('p');
		text.setAttribute('id','tx');
		var node=document.createTextNode("Project "+((inputs.length/3)+1));
		text.appendChild(node);
		projectopt.appendChild(text);
		
		projectopt.appendChild(newfield);
		const bk=document.createElement("br");
		projectopt.appendChild(bk);
		const brk=document.createElement("br");
		projectopt.appendChild(brk);
		projectopt.appendChild(newdate1);
		projectopt.appendChild(newdate2);
		const bak=document.createElement("br");
		projectopt.appendChild(bak);
		const bek=document.createElement("br");
		projectopt.appendChild(bek);
		projectopt.appendChild(newtext);
		const be=document.createElement("br");
		projectopt.appendChild(be);
		
	}
	function removeinput()
	{
		var t=projectopt.getElementsByTagName('p');
		var b=projectopt.getElementsByTagName('br');
		var inputs=projectopt.getElementsByTagName('input');
		if(inputs.length>3)
		{
			projectopt.removeChild(inputs[(inputs.length)-1]);
			projectopt.removeChild(inputs[(inputs.length)-1]);
			projectopt.removeChild(inputs[(inputs.length)-1]);
			projectopt.removeChild(t[(t.length)-1]);
			projectopt.removeChild(b[(b.length)-1]);
			projectopt.removeChild(b[(b.length)-1]);
			projectopt.removeChild(b[(b.length)-1]);
			projectopt.removeChild(b[(b.length)-1]);
			projectopt.removeChild(b[(b.length)-1]);
		}
		var texts=projectopt.getElementsByTagName('textarea');
		if(texts.length>1)
		{
			projectopt.removeChild(texts[(texts.length)-1]);
		}
	}
	
   function save()
   {
	   var inputs=projectopt.getElementsByTagName('input');
	   var texts=projectopt.getElementsByTagName('textarea');
	   if(inputs.length+texts.length!=0){
	   var p=document.getElementsByClassName('textinput');
	   var i;
	   const e=[];
	   for(i=0;i<(inputs.length+texts.length);i++)
	   {
		   e[i]=p[i].value;
	   }
	   sessionStorage.setItem('as',JSON.stringify(e));
	   }
   }   