firebase.initializeApp(config);
const storage = firebase.database();

function uploadVoteData() {
	const databaseRef = database.ref("users/" + dviceId);
	databaseRef.set({
		deviceId: deviceId
	});
}