$(document).ready(function() {
	$.ajax({
		type 		: 	"GET",
		url			: 	"http://localhost:8080/myt-services/admin/companyAdmin",
		contentType	: 	"application/json",
		success		:  	function(data){
						console.log(data);
						$(".userName").html("Hello " + data.username);
						$(".profile .name").html(data.username);
						$(".profile .email").html("Email : " + data.email);
						$(".profile .phone").html("Phone : " + data.phone_no);
						$(".profile .company").html('Company : ' + data.company.name);
						$(".profilePic img").attr("src", data.profile_pic);
		}
	});
	console.log("ready");
	$.ajax({
		type		: "GET",
		url 		: "http://localhost:8080/myt-services/admin/rm",
		contentType	: "application/json",
		success		: function(data){
						rm_list = data;
						console.log(data);
						for(var i = 0; i < data.length; i++) {
							var list = '<div class="listItem shadow" onClick="openRM('+data[i].id+')">' +
											'<div class="itemPic col-md-2">' +
												'<img src="'+ data[i].profile_pic+'" height="100px" width="100px">' +
											'</div>' + 
											'<div class="itemName col-md-10">' +
												data[i].name +
												'<div class="itemEmail">' +
													data[i].email +
												'</div>' +
											'</div>' +
										'</div>';
							$(".list").append(list);
					}
		}
	});
})

$("#submit").click(function(){
	var rm = {};
		rm.name 		= 	$("#name").val();
		rm.email 		= 	$("#email").val();
		rm.designation 	= 	$("#designation").val();
		rm.phone_no 	= 	$("#phone_no").val();
		rm.password 	= 	$("#password").val();
		rm.area 		= 	$("#area").val();
	$.ajax({
		type 			: 	"POST",
		url				:   "../../myt-services/admin/rm", 
		data 			: 	JSON.stringify(rm),
		contentType 	: 	"application/json",
		success 		: 	function(data){
								console.log(data);
								var pic = new FormData();
								pic.append("file",picture.files[0]);
								$.ajax({
								    url: '../../myt-services/admin/RM/' + data.id + '/picture',
								    data: pic,
								    dataType: 'text',
								    processData: false,
								    contentType: false,
								    type: 'POST',
								    success: function(result){
								      console.log(result);
								      location.reload();
								    }
								});
		}
	});
});

function openRM(rm_id){
	$.ajax({
		type 	: 	"GET",
		url 	: 	"../../myt-services/admin/session/RM/" + rm_id,
		success : 	function(data){
					console.log(data);
					if(data.id > 0){
						window.location = "rm.html";
					}
					else{
						alert("Please Try Again");
					}
		}
	});
}