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
   else {
      for (let i = 0; i < localStorage.getItem("users").length; i++) {
         if (usernameInput == localStorage.getItem("users", users[i].username)) {
            document.getElementById("emptyFields").innerHTML = 'This username is already taken';
         }
         else {
            
         }
      }
   }
}
