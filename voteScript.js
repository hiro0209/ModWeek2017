function changeContent(id) {
	document.getElementById("top-content").style.display = "none";
	document.getElementById("login-content").style.display = "none";
	document.getElementById(id).style.display = "block";
}

function resetContent() {
	document.getElementById("top-content").style.display = "block";
	document.getElementById("login-content").style.display = "none";
}