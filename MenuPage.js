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
function addToCart(clicked) {
	rewardsPoints = rewardsPoints + items_array[clicked].points;
	let node = document.createElement("li");
	console.log(rewardsPoints);
	//defines variable txt

	//adds the list item to the ul tag
	document.getElementById("cartItems").appendChild(node);

	items_array[clicked].num = items_array[clicked].num + 1;
	console.log(
		items_array[clicked].Name +
			" " +
			items_array[clicked].Price * items_array[clicked].num
	);

	if (items_array[clicked].num > 0) {
		document.getElementById("F").innerHTML =
			items_array[clicked].num +
			" " +
			items_array[clicked].Name +
			" $" +
			items_array[clicked].Price * items_array[clicked].num;
		totalCost = totalCost + items_array[clicked].Price;
		document.getElementById("totalPrice").innerHTML = totalCost;

		if (rewardsPoints >= 100) {
			totalCost = totalCost / 10;
			document.getElementById("totalPrice").innerHTML = totalCost;
			console.log(totalCost);
		}
	}
}

// add id="21" to custom sushi element
