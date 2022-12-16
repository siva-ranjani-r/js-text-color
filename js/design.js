txt=document.createElement("input");
txt.setAttribute("id", "siva");
document.body.appendChild(txt);

btn=document.createElement("Button");
btn.innerHTML="click";
document.body.appendChild(btn);

flex=document.createElement("p");
flex.setAttribute("id", "ranjani");
document.body.appendChild(flex);
	
btn.onclick=function()
{
	var para = document.getElementById("siva").value;
	document.getElementById("ranjani").innerHTML = para;
	document.getElementById("ranjani").style.color = para;
}
