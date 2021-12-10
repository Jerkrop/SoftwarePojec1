function removeItem(item) {
				item.parentNode.removeChild(item);
				}
				
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
		let itemnum = 20
				$(document).ready(function() {

$("#btn_add").click(function() {
	let newitem = document.getElementById('ItemName').value
	let newprice = document.getElementById('ItemPrice').value
	let newimage = localStorage.getItem('recent-image')
	let node = document.createElement('th');
	itemnum = itemnum+1
	if(itemnum>24){
		$("#menutable").append("<tr><th><div class='item' id="+itemnum+"> <div class='itemtop'><p class='itemtext'>" + newitem +"</p><p class='price'>"+newprice+"</p></div><img src="+newimage+" class='images' /><button class='itembtn' onclick='removeItem("+itemnum+")'>Remove</button></div></th></tr>")
	}
	else{
		$("#menutable").append("<th><div class='item' id="+itemnum+"> <div class='itemtop'><p class='itemtext'>" + newitem +"</p><p class='price'>"+newprice+"</p></div><img src="+newimage+" class='images' /><button class='itembtn' onclick='removeItem("+itemnum+")'>Remove</button></div></th>")
	}
	var elem = document.querySelector('#itemnum');
				elem.parentNode.removeChild(elem);
	console.log(newitem)
	console.log(newprice)
	console.log(itemnum)
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
	
