function changeTabs(tabName){
	document.getElementById("top").style.display="none";
	document.getElementById("overview").style.display="none";
	document.getElementById("rule").style.display="none";
	document.getElementById("progress").style.display="none";
	document.getElementById("other").style.display="none";
	document.getElementById(tabName).style.display="block";
}