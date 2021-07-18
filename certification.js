
var certopt=document.getElementById("certificate_options");

    var inputs=certopt.getElementsByTagName('input');
	   if(inputs.length==0){
	      addinput();
	   }
	
	function addinput()
	{
		document.getElementById('head').innerHTML="";
		var inputs=certopt.getElementsByTagName('input');
		var newfield=document.createElement('input');
		newfield.setAttribute('type','text');
		newfield.setAttribute('id','name');
		newfield.setAttribute('name','name');
		newfield.setAttribute('placeholder','Certificate Name');
		newfield.setAttribute('class','certinput');
		newfield.setAttribute('required','');
		var neworg=document.createElement('input');
		neworg.setAttribute('type','text');
		neworg.setAttribute('id','org');
		neworg.setAttribute('class','certinput');
		neworg.setAttribute('name','org');
		neworg.setAttribute('placeholder','Issuing Organisation');
		neworg.setAttribute('required','');
		var newdate=document.createElement('input');
		newdate.setAttribute('type','text');
		newdate.setAttribute('id','date');
		newdate.setAttribute('class','certinput');
		newdate.setAttribute('name','date');
		 newdate.setAttribute('placeholder','Issued Date(MM/YYYY)');
		 newdate.setAttribute('required','');
		 newdate.setAttribute('pattern','(0[1-9]|1[012])/[0-9]{4}');
		var newurl=document.createElement('input');
		newurl.setAttribute('type','URL');
		newurl.setAttribute('id','url');
		newurl.setAttribute('class','certinput');
		newurl.setAttribute('name','url');
		newurl.setAttribute('placeholder','Credential URL');
		newurl.setAttribute('required','');
		
		var text=document.createElement('p');
		text.setAttribute('id','tx');
		var node=document.createTextNode("Certification "+((inputs.length/4)+1));
		text.appendChild(node);
		certopt.appendChild(text);
		const b=document.createElement("br");
		certopt.appendChild(b);
		certopt.appendChild(newfield);
		certopt.appendChild(neworg);
		certopt.appendChild(newdate);
		certopt.appendChild(newurl);
		const be=document.createElement("br");
		certopt.appendChild(be);
		const bre=document.createElement("br");
		certopt.appendChild(bre);
	}
	function removeinput()
	{
		var t=certopt.getElementsByTagName('p');
		var b=certopt.getElementsByTagName('br');
		
		var inputs=certopt.getElementsByTagName('input');
		if(inputs.length>4)
		{
			certopt.removeChild(inputs[(inputs.length)-1]);
			certopt.removeChild(inputs[(inputs.length)-1]);
			certopt.removeChild(inputs[(inputs.length)-1]);
			certopt.removeChild(inputs[(inputs.length)-1]);
			certopt.removeChild(t[(t.length)-1]);
			certopt.removeChild(b[(b.length)-1]);
			certopt.removeChild(b[(b.length)-1]);
			certopt.removeChild(b[(b.length)-1]);
		}
	}
	
    function save()
	{
		
	   var inputs=certopt.getElementsByTagName('input');
	   if(inputs.length!=0)
	   {
	   var c=document.getElementsByClassName('certinput');
	   const d=[];
	   var i;
	   for(i=0;i<inputs.length;i++)
	   {
		   d[i]=c[i].value;
	   }
	   localStorage.setItem('ct',JSON.stringify(d));
	   
	   }
	}