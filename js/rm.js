$(document).ready(function() {
	$.ajax({
		type 		: 	"GET",
		url			: 	"../../myt-services/admin/rm/"+ rm_id,
		contentType	: 	"application/json",
		success		:  	function(data){
						console.log(data);
						$(".profile .name").html(data.name);
						$(".profile .email").html("Email : " + data.email);
						$(".profile .phone").html("Phone : " + data.phone_no);
						$(".profile .company").html('Company : ' + data.company.name);
						$(".profilePic img").attr("src", data.profile_pic);
		}
	});
	console.log("ready");
	$.ajax({
		type		: "GET",
		url 		: "../../myt-services/admin/am?rm_id=" + rm_id,
		contentType	: "application/json",
		success		: function(data){
						rm_list = data;
						console.log(data.length);
						for(var i = 0; i < data.length; i++) {
							var list = '<div class="listItem shadow" onClick="openAM('+data[i].id+')">' +
											'<div class="itemPic col-md-2">' +
												'<img src="'+ data[i].profile_pic+'" height="100px" width="100px">' +
											'</div>' + 
											'<div class="itemName col-md-10">' +
												data[i].name +
												'<div class="itemEmail">' +
													data[i].designation + " | " + data[i].area + "<br/>" + data[i].email +
												'</div>' +
											'</div>' +
										'</div>';
							$(".list").append(list);
					}
		}
	});
})

$("#submit").click(function(){
	var am = {};
		am.name 			= 	$("#name").val();
		am.email 			= 	$("#email").val();
		am.designation 		= 	$("#designation").val();
		am.phone_no 		= 	$("#phone_no").val();
		am.password 		= 	$("#password").val();
		am.area 			= 	$("#area").val();
		am.boss_id 			= 	rm_id;
		am.company_admin_id = 	ca_id;
	$.ajax({
		type 			: 	"POST",
		url				:   "../../myt-services/admin/am", 
		data 			: 	JSON.stringify(am),
		contentType 	: 	"application/json",
		success 		: 	function(data){
								console.log(data);
								var pic = new FormData();
								pic.append("file",picture.files[0]);
								$.ajax({
								    url: '../../myt-services/admin/AM/' + data.id + '/picture/company/' + company_id,
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

function openAM(am_id){
	$.ajax({
		type 	: 	"GET",
		url 	: 	"./session.jsp?type=am&value=" + am_id,
		success : 	function(data){
					window.location = "am.jsp";
		}
	});
}

$('#logout').click(function(){
	$.ajax({
		type 	: "GET",
		url  	: "./session.jsp?type=logout",
		success : function(data){
				alert("Logout Successfull");
				window.location = "../";
		}
	});
})