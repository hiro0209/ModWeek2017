function changeTabs(tabName){
	document.getElementById("top").style.display="none";
	document.getElementById("overview").style.display="none";
	document.getElementById("rule").style.display="none";
	document.getElementById("progress").style.display="none";
	document.getElementById("other").style.display="none";
	document.getElementById(tabName).style.display="block";
}

function selectHeaderImage(){
	let random=Math.floor(Math.random()*8)+1;
	let path='image/header_'+random+'.png';
	document.write('<img src="'+path+'">');
}