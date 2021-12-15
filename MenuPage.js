let rewardsPoints = 0;

let dragonSushi = { Name: "dragon Sushi", Price: 9.99, num: 0, points: 10 };
let CheeseburgerSushi = {
	Name: "Cheeseburger Sushi",
	Price: 7.99,
	num: 0,
	points: 8,
};
let Maki = { Name: "Maki", Price: 8.99, num: 0, points: 9 };
let Temaki = { Name: "Temaki", Price: 9.99, num: 0, points: 10 };
let Uramaki = { Name: "Uramaki", Price: 10.99, num: 0, points: 11 };
let TigerRoll = { Name: "Tiger Roll", Price: 7.99, num: 0, points: 8 };
let PhiladelphiaRoll = {
	Name: "Philadelphia Roll",
	Price: 6.99,
	num: 0,
	points: 7,
};
let CrunchRoll = { Name: "Crunch Roll", Price: 9.99, num: 0, points: 10 };
let DynamiteRoll = { Name: "Dynamite Roll", Price: 8.99, num: 0, points: 9 };
let RainbowRoll = { Name: "Rainbow Roll", Price: 9.99, num: 0, points: 10 };
let SurfandTurf = { Name: "Surf and Turf", Price: 11.99, num: 0, points: 12 };
let VolcanoRoll = { Name: "Volcano Roll", Price: 7.99, num: 0, points: 8 };
let SushiTaco = { Name: "Sushi Taco", Price: 10.99, num: 0, points: 11 };
let SpicyTunaRoll = { Name: "Spicy Tuna Roll", Price: 8.99, num: 0, points: 9 };
let ShrimpRoll = { Name: "Shrimp Roll", Price: 11.99, num: 0, points: 12 };
let SpiderRoll = { Name: "Spider Roll", Price: 9.99, num: 0, points: 10 };
let LobsterRoll = { Name: "Lobster Roll", Price: 10.99, num: 0, points: 11 };
let BlobFishRoll = { Name: "BlobFish Roll", Price: 12.99, num: 0, points: 13 };
let JellyFishRoll = { Name: "JellyFish Roll", Price: 6.99, num: 0, points: 7 };
let VeganRoll = { Name: "Vegan Roll", Price: 15.99, num: 0, points: 16 };
let customsushi = { Name: "custom Sushi", Price: 8.99, num: 0, points: 9 };

let items_array = [
	dragonSushi,
	CheeseburgerSushi,
	Maki,
	Temaki,
	Uramaki,
	TigerRoll,
	PhiladelphiaRoll,
	CrunchRoll,
	DynamiteRoll,
	RainbowRoll,
	SurfandTurf,
	VolcanoRoll,
	SushiTaco,
	SpicyTunaRoll,
	ShrimpRoll,
	SpiderRoll,
	LobsterRoll,
	BlobFishRoll,
	JellyFishRoll,
	VeganRoll,
	customsushi,
];

let cart = [];

/*
"dragonSushi",
"CheeseburgerSushi",
"Maki",
"Temaki",
"Uramaki",
"TigerRoll",
" ",
" ",
" ",

*/
if (localStorage.getItem("item1") === "hide") {
	$("#item1").hide();
}
if (localStorage.getItem("item2") === "hide") {
	$("#item2").hide();
}
if (localStorage.getItem("item3") === "hide") {
	$("#item3").hide();
}
if (localStorage.getItem("item4") === "hide") {
	$("#item4").hide();
}
if (localStorage.getItem("item5") === "hide") {
	$("#item5").hide();
}
if (localStorage.getItem("item6") === "hide") {
	$("#item6").hide();
}
if (localStorage.getItem("item7") === "hide") {
	$("#item7").hide();
}
if (localStorage.getItem("item8") === "hide") {
	$("#item8").hide();
}
if (localStorage.getItem("item9") === "hide") {
	$("#item9").hide();
}
if (localStorage.getItem("item10") === "hide") {
	$("#item10").hide();
}
if (localStorage.getItem("item11") === "hide") {
	$("#item11").hide();
}
if (localStorage.getItem("item12") === "hide") {
	$("#item12").hide();
}
if (localStorage.getItem("item13") === "hide") {
	$("#item13").hide();
}
if (localStorage.getItem("item14") === "hide") {
	$("#item14").hide();
}
if (localStorage.getItem("item15") === "hide") {
	$("#item15").hide();
}
if (localStorage.getItem("item16") === "hide") {
	$("#item16").hide();
}
if (localStorage.getItem("item17") === "hide") {
	$("#item17").hide();
}
if (localStorage.getItem("item18") === "hide") {
	$("#item18").hide();
}
if (localStorage.getItem("item19") === "hide") {
	$("#item19").hide();
}
if (localStorage.getItem("item20") === "hide") {
	$("#item20").hide();
}

let counter = 0;
let P = 0;
let oldCounter = 0;
let totalCost = 0;
let itemId = 0;

function addToCart(clicked) {
	items_array[clicked].num = items_array[clicked].num + 1;
	console.log(items_array[clicked].num)
	let itemPrice = items_array[clicked].Price * items_array[clicked].num;
	let txt =
		items_array[clicked].num +
		" " +
		items_array[clicked].Name +
		" $" +
		itemPrice.toFixed(2);
	//checking to see if the item already exist in the cart and adding it if it doesn't
	if (cart.indexOf(items_array[clicked]) == -1) {
		itemId = parseInt(itemId);
		itemId = itemId + 1;
		itemId = itemId.toString();
		console.log(cart);
		cart.push(items_array[clicked]);
		console.log("The item doesnt exist in the cart");
		rewardsPoints = rewardsPoints + items_array[clicked].points;
		let node = document.createElement("li");
		node.setAttribute("id", "text");
		document.getElementById("cartItems").appendChild(node);
		document.getElementById("text").innerHTML = txt;
		document.getElementById("text").removeAttribute("id");
		node.setAttribute("id", "cartItem" + itemId);
		totalCost = totalCost + items_array[clicked].Price;
		document.getElementById("totalPrice").innerHTML = "$" + totalCost.toFixed(2);
		document.getElementById("checkoutTotal").innerHTML = "$" + totalCost.toFixed(2);
	}
	//changing the quantity of an item if it's already in the cart
	else {
		for (var i = 0; i < cart.length; i++) {
			console.log("test")
			if (cart[i] == items_array[clicked]) {
				// let stringI = toString(i)
				// console.log(i)
				let test = document.getElementById("cartItem" + (i + 1))
				console.log(test)
				txt =
					items_array[clicked].num +
					" " +
					items_array[clicked].Name +
					" $" +
					itemPrice.toFixed(2);
				// console.log(document.getElementsByClassName(stringI).innerHTML)
				document.getElementById("cartItem" + (i +1)).innerHTML = txt;
				console.log(document.getElementById("cartItem" + (i +1)).innerHTML)
				totalCost = totalCost + items_array[clicked].Price;
				document.getElementById("totalPrice").innerHTML = "$" + totalCost.toFixed(2);
				document.getElementById("checkoutTotal").innerHTML = "$" + totalCost.toFixed(2);
			}
		}
	}

	var completedOrder = false;
}

function rewardsDiscount(orderPrice) {
	if (completedOrder == true) {
		orderPrice = orderPrice * 0.9;
		rewardsPoints = rewardsPoints - 100;
	}
}
