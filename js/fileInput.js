$(".inputProfilePic").click(function(){
	$("#picture").click();
});

function readURL(input) {
	console.log("Change");
	if (input.files && input.files[0]) {
		if(input.files[0].size > 204800){
			alert("Sorry !! Size Limit is 200Kb");
			return;
		}
	    var reader = new FileReader();

	    reader.onload = function (e) {
	        $('.inputProfilePic')
	            .css('background-image', 'url(' + e.target.result + ')');
	        $('.inputProfilePic')
	        .css('background-size', 'cover');
	    };

	    reader.readAsDataURL(input.files[0]);
	}
}