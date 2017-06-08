var modder={
	"nikujaga":false,
	"yuyu":false,
	"genboo":false
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

function showModList(listName){
	document.getElementById(listName).style.display="block";
	for(let i=0;i<=name.length;i++){
		if(modder[name[i]]==listName){
			modder[name[i]]=true;
			break;
		}
	}
}

function deleteModList(listName){
	document.getElementById(listName).style.display="none";
	for(let i=0;i<=name.length;i++){
		if(modder[name[i]]==listName){
			modder[name[i]]=false;
			break;
		}
	}
}

function modListAction(listName,buttonName){
	let value=document.getElementById(buttonName).value;
	if(value=="＋"){
		document.getElementById(buttonName).value="－";
		showModList(listName);
	}else if(value=="－"){
		document.getElementById(buttonName).value="＋";
		deleteModList(listName);
	}
}

function modListAllDelete(){
	document.getElementById("nikujaga_list").style.display="none";
	document.getElementById("yuyu_list").style.display="none";
	document.getElementById("genboo_list").style.display="none";
	document.getElementById("hiro0209_list").style.display="none";
	document.getElementById("tirin_list").style.display="none";
}