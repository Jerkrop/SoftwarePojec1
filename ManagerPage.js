let itemnum = 20
function clearStorage(){
	localStorage.clear();
}
function removeItem(y) {
			let z = y+"+1"
			document.getElementById(z).remove()
			itemnum = itemnum-1
			localStorage.setItem(y, 'hide');
			if(localStorage.getItem(y) === 'hide') {
				$(y).hide();
				console.log(y)
			}
				}
				// $(function() {

				// 	// When sign-up-but clicked, use localStorage to remember to hide
				// 	// the missing-information div by using localStorage.setItem()
				// 	$('#itembtn').click(function() {
				// 	  localStorage.setItem(this.id, 'hide');  
				// 	  console.log(y)
				// 	});  
				  
				// 	// When the page is loaded and this script is run, check if 
				// 	// "missing-information" has "hide" in localStorage
				// 	if(localStorage.getItem(this.id) === 'hide') {
				  
				// 	  // If "hide" is in local storage, then hide() any element with
				// 	  // id of missing-information that exists on the page
				// 	  $(this.id).hide();
				// 	}
				  
				//   });
				// function removeNewItem(y){
				
				// y.remove()
				// }
				

				
		// 		function readURL(input) {
        //     if (input.files && input.files[0]) {
        //         var reader = new FileReader();

        //         reader.onload = function (e) {
        //             $('#addimage')
        //                 .attr('src', e.target.result)
        //                 .width(150)
        //                 .height(200);
        //         };

        //         reader.readAsDataURL(input.files[0]);
        //     }
        // }
		document.querySelector("#myFileInput").addEventListener("change", function(){
			const reader = new FileReader();

			reader.addEventListener("load", () => {
				localStorage.setItem("recent-image",reader.result)
			})

			reader.readAsDataURL(this.files[0])
		})

		document.addEventListener("DOMContentLoaded", () =>{
			const recentImageDataUrl = localStorage.getItem("recent-image")

			// if(recentImageDataUrl) {
			// 	document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
			// }
		})
		
				$(document).ready(function() {

$("#btn_add").click(function() {
	let newitem = document.getElementById('ItemName').value
	let newprice = document.getElementById('ItemPrice').value
	let newimage = localStorage.getItem('recent-image')
	let node = document.createElement('th');
	itemnum = itemnum+1
	let newid = 'item'+itemnum
	if(itemnum===25||itemnum===29||itemnum===33){
		$("#menutable").append("<tr><th><div class='item' id="+newid+"> <div class='itemtop'><p class='itemtext'>" + newitem +"</p><p class='price'>"+newprice+"</p></div><img src="+newimage+" class='images' /><button class='itembtn' id="+newid+" >Remove</button></div></th></tr>")
		
	}
	else{
		$("#menutable").append("<th><div class='item' id="+newid+"> <div class='itemtop'><p class='itemtext'>" + newitem +"</p><p class='price'>"+newprice+"</p></div><img src="+newimage+" class='images' /><button class='itembtn' id="+newid+" >Remove</button></div></th>")
		
	}
	
	console.log(newitem)
	console.log(newprice)
	console.log(itemnum)
	console.log(newid)
   //gives new list item the id of text
   //node.setAttribute('id', "text")
   //adds the list item to the ul tag
   //document.querySelector('table').appendChild(node);

	//document.getElementById("text").innerHTML = newitem
});	



})

;
	// $("#menutable").append(
	// 	"<th><div class='item' id='item21'> <div class='itemtop'><p class='itemtext'>" +
	// 	newitem +
	// 	"</p><p class='price'>" +
	// 	newprice +
	// 	"</p></div><img src='' class='images' /><button class='itembtn' onclick='removeItem(item21)'>Remove</button></div></th>"
	// 	);
	
