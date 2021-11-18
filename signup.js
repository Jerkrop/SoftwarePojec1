let users = [
	{
		username: "admin",
		password: "admin",
	},
];

localStorage.setItem("users", users);

function updateUser() {
	let usernameInput = document.getElementById("username").value;
	let passwordInput = document.getElementById("email").value;
	if (usernameInput == "" && passwordInput == "") {
		document.getElementById("emptyFields").innerHTML =
			"The username or password box is empty";
	}
}
