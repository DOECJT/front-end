function runJs(){
	var inputContent=document.getElementById('input-content').value;
	eval(inputContent);
}
function clearJs(){
	document.getElementById('input-content').value="";
}
function inputJs(){
	var request=new XMLHttpRequest();
	request.open("GET","js/practice.js",true);
	request.send();
	request.onreadystatechange=function(){
		if(request.readyState===4 && request.status===200){
			document.getElementById('input-content').value=request.responseText;
		}
	}
}
