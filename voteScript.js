firebase.initializeApp(config);
const storage = firebase.database();

function changeContent(id) {
	document.getElementByd("top-content").style.display = "none";
	document.getElementById("warning-content").style.display = "none";
	document.getElementById("vote-content").style.display = "none";
	document.getElementById(id).style.display = "block";
}

function resetContent() {
	document.getElementById("top-content").style.display = "block";
	document.getElementById("warning-content").style.display = "none";
	document.getElementById("vote-content").style.display = "none";
}

function uploadVoteData() {
	const databaseRef = database.ref("users/" + dviceId);
	databaseRef.set({
		deviceId: deviceId
	});
}