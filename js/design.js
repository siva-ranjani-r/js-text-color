txt=document.createElement("input");
txt.setAttribute("id", "siva");
document.body.appendChild(txt);

document.getElementById("siva").addEventListener("mousedown", mouseDown);


function mouseDown() {
	
	var para=document.getElementById("siva").value;
	document.getElementById("siva").style.color=para;
}

