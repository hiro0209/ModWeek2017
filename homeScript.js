var modder={
	"nikujaga_list":false,
	"yuyu_list":false,
	"genboo_list":false,
	"hiro0209_list":false,
	"tirin_list":false
};
var name=Object.keys(modder);

function changeTabs(tabName){
	document.getElementById("top").style.display="none";
	document.getElementById("overview").style.display="none";
	document.getElementById("rule").style.display="none";
	document.getElementById("progress").style.display="none";
	document.getElementById("modlist").style.display="none";
	document.getElementById("other").style.display="none";
	document.getElementById(tabName).style.display="block";
}

function selectHeaderImage(){
	let random=Math.floor(Math.random()*8)+1;
	let path='image/header_'+random+'.png';
	document.write('<img src="'+path+'">');
}

function modListAction(listName,buttonName){
	let value=document.getElementById(buttonName).value;
	if(value=="＋"){
		document.getElementById(buttonName).value="－";
		document.getElementById(listName).style.display="block";
	}else if(value=="－"){
		document.getElementById(buttonName).value="＋";
		document.getElementById(listName).style.display="none";
	}
}

function modListAllDelete(){
	document.getElementById("nikujaga_list").style.display="none";
	document.getElementById("yuyu_list").style.display="none";
	document.getElementById("genboo_list").style.display="none";
	document.getElementById("hiro0209_list").style.display="none";
	document.getElementById("tirin_list").style.display="none";
}