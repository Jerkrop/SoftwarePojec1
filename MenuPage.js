



const dragonSushi ={Name:"dragon Sushi", Price:9.99, num:0}
const CheeseburgerSushi  = {Name:"Cheeseburger Sushi", Price:7.99 , num:0}
const Maki = {Name:"Maki", Price:8.99, num:0}
const Temaki =  {Name:"Temaki", Price:9.99, num:0}
const  Uramaki = {Name:"Uramaki", Price:10.99, num:0}
const  TigerRoll = {Name:"Tiger Roll", Price:7.99,num:0}
const PhiladelphiaRoll={Name:"Philadelphia Roll", Price:6.99, num:0}
const CrunchRoll=  {Name:"Crunch Roll", Price:9.99, num:0}
const DynamiteRoll= {Name:"Dynamite Roll", Price:8.99, num:0}
const RainbowRoll= {Name:"Rainbow Roll", Price:9.99, num:0}
const SurfandTurf= {Name:"Surf and Turf", Price:11.99, num:0}
const VolcanoRoll ={Name:"Volcano Roll", Price:7.99, num:0}
const SushiTaco= {Name:"Sushi Taco", Price:10.99, num:0}
const SpicyTunaRoll= {Name:"Spicy Tuna Roll", Price:8.99, num:0}
const ShrimpRoll= {Name:"Shrimp Roll", Price:11.99, num:0}
const SpiderRoll= {Name:"Spider Roll", Price:9.99, num:0}
const LobsterRoll= {Name:"Lobster Roll", Price:10.99, num:0}
const BlobFishRoll= {Name:"BlobFish Roll", Price:12.99, num:0}
const JellyFishRoll={Name:"JellyFish Roll", Price:6.99, num:0}
const VeganRoll= {Name:"Vegan Roll", Price:15.99, num:0}
const customsushi = {Name:"custom Sushi", Price:8.99, num:0}



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
    customsushi





];





let cart = [ ];




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


let counter = 0
let P = 0
let oldCounter= 0
function addToCart(clicked)
{


   
   items_array[clicked].num = items_array[clicked].num + 1
   console.log(items_array[clicked].num)
       console.log( items_array[clicked].Name + " " + (items_array[clicked].Price*items_array[clicked].num) )
 

     

       if(items_array[clicked].num > 0)
       {

       document.getElementById("F").innerHTML = items_array[clicked].num +" "+items_array[clicked].Name + " $" + (items_array[clicked].Price*items_array[clicked].num)

       }

}


   

     

    // add id="21" to custom sushi element