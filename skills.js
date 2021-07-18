

	var skillopt=document.getElementById("skill_options");
	var inputs=skillopt.getElementsByTagName('input');
		var sel=skillopt.getElementsByClassName('selects');
	   if(inputs.length==0)
	   {
		   addinput();
	   }
	   
		   
	function addinput()
	{
		
		var inputs=skillopt.getElementsByTagName('input');
		var newfield=document.createElement('input');
		newfield.setAttribute('type','text');
		newfield.setAttribute('id','skill');
		newfield.setAttribute('name','skill');
		newfield.setAttribute('placeholder','Enter skill');
		newfield.setAttribute('class','textinput');
		newfield.setAttribute('required','');
		skillopt.appendChild(newfield);
		var newselect=document.createElement('SELECT');
		newselect.setAttribute('id','select');
		newselect.setAttribute('class','selects')
		skillopt.appendChild(newselect);
		var s=document.getElementsByTagName('SELECT');
		
		var opt1=document.createElement('option');
		opt1.setAttribute('value','Beginner');
		var t1=document.createTextNode('Beginner');
		opt1.appendChild(t1);
		s[(s.length)-1].appendChild(opt1);
		
		var opt2=document.createElement('option');
		opt2.setAttribute('value','Intermediate');
		var t2=document.createTextNode('Intermediate');
		opt2.appendChild(t2);
		s[(s.length)-1].appendChild(opt2);
		
		var opt3=document.createElement('option');
		opt3.setAttribute('value','Advanced');
		var t3=document.createTextNode('Advanced');
		opt3.appendChild(t3);
		s[(s.length)-1].appendChild(opt3);
		
		const br=document.createElement('br');
		skillopt.appendChild(br);
		const be=document.createElement("br");
		skillopt.appendChild(be);
		
	}
	function removeinput()
	{
		var inputs=skillopt.getElementsByTagName('input');
		var options=skillopt.getElementsByTagName('SELECT');
		var b=skillopt.getElementsByTagName('br');
		if(inputs.length>1)
		{
			skillopt.removeChild(inputs[(inputs.length)-1]);
			skillopt.removeChild(options[(options.length)-1]);
			skillopt.removeChild(b[(b.length)-1]);
			skillopt.removeChild(b[(b.length)-1]);
		}
	}
	function save(){
		
		
		
	var a=document.getElementsByName('skill');
	 const f=[];
	 const b=[];
	 var i;
	 for(i=0;i<inputs.length;i++)
	 {
		  
		  b[i]=a[i].value;
		  f[i]=sel[i].value;
		  
	 }
	  localStorage.setItem('arr',JSON.stringify(b));
	  localStorage.setItem('sel',JSON.stringify(f));
	 
	}
	