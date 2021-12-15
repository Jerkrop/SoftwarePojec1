let rewardsPoints = 0;

const dragonSushi = { Name: "dragon Sushi", Price: 9.99, num: 0, points: 10 };
const CheeseburgerSushi = {
	Name: "Cheeseburger Sushi",
	Price: 7.99,
	num: 0,
	points: 8,
};
const Maki = { Name: "Maki", Price: 8.99, num: 0, points: 9 };
const Temaki = { Name: "Temaki", Price: 9.99, num: 0, points: 10 };
const Uramaki = { Name: "Uramaki", Price: 10.99, num: 0, points: 11 };
const TigerRoll = { Name: "Tiger Roll", Price: 7.99, num: 0, points: 8 };
const PhiladelphiaRoll = {
	Name: "Philadelphia Roll",
	Price: 6.99,
	num: 0,
	points: 7,
};
const CrunchRoll = { Name: "Crunch Roll", Price: 9.99, num: 0, points: 10 };
const DynamiteRoll = { Name: "Dynamite Roll", Price: 8.99, num: 0, points: 9 };
const RainbowRoll = { Name: "Rainbow Roll", Price: 9.99, num: 0, points: 10 };
const SurfandTurf = { Name: "Surf and Turf", Price: 11.99, num: 0, points: 12 };
const VolcanoRoll = { Name: "Volcano Roll", Price: 7.99, num: 0, points: 8 };
const SushiTaco = { Name: "Sushi Taco", Price: 10.99, num: 0, points: 11 };
const SpicyTunaRoll = {
	Name: "Spicy Tuna Roll",
	Price: 8.99,
	num: 0,
	points: 9,
};
const ShrimpRoll = { Name: "Shrimp Roll", Price: 11.99, num: 0, points: 12 };
const SpiderRoll = { Name: "Spider Roll", Price: 9.99, num: 0, points: 10 };
const LobsterRoll = { Name: "Lobster Roll", Price: 10.99, num: 0, points: 11 };
const BlobFishRoll = {
	Name: "BlobFish Roll",
	Price: 12.99,
	num: 0,
	points: 13,
};
const JellyFishRoll = {
	Name: "JellyFish Roll",
	Price: 6.99,
	num: 0,
	points: 7,
};
const VeganRoll = { Name: "Vegan Roll", Price: 15.99, num: 0, points: 16 };
const customsushi = { Name: "custom Sushi", Price: 8.99, num: 0, points: 9 };

const items_array = [
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

let counter = 0;
let P = 0;
let oldCounter = 0;
let totalCost = 0;
let itemId = 0;

function addToCart(clicked) {
	items_array[clicked].num = items_array[clicked].num + 1;
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
		itemId = itemId + 1
		itemId = itemId.toString();
		console.log(cart)
		cart.push(items_array[clicked])
		console.log("The item doesnt exist in the cart")
		rewardsPoints = rewardsPoints + items_array[clicked].points;
		let node = document.createElement("li");
		node.setAttribute("id", "text");
		document.getElementById("cartItems").appendChild(node);
		document.getElementById("text").innerHTML = txt;
		document.getElementById("text").removeAttribute("id");
		node.setAttribute("id", itemId);
		totalCost = totalCost + items_array[clicked].Price;
		document.getElementById("totalPrice").innerHTML = totalCost.toFixed(2);
	}
	//changing the quantity of an item if it's already in the cart
	else {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i] == items_array[clicked]) {
				let stringI = toString(i)
				let test = document.getElementById(stringI)
				console.log(test)
				txt = items_array[clicked].num +
				" " +
				items_array[clicked].Name +
				" $" +
				itemPrice.toFixed(2);
				// console.log(document.getElementsByClassName(stringI).innerHTML)
				document.getElementById(stringI).innerHTML = txt
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

// add id="21" to custom sushi element
