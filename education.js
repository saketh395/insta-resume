var eduopt=document.getElementById("education_options");

function save()
{
	var inputs=eduopt.getElementsByTagName('input');
	var a=document.getElementsByClassName('edus');  
     const c=[];
	var i;
	for(i=0;i<inputs.length;i++)
	{
		c[i]=a[i].value;
	}
	sessionStorage.setItem('ed',JSON.stringify(c));
}
