$(document).ready(function() {
	$.ajax({
		type 		: 	"GET",
		url			: 	"../../myt-services/admin/companyAdmin/" + ca_id,
		contentType	: 	"application/json",
		success		:  	function(data){
						console.log(data);
						$(".profile .name").html(data.username);
						$(".profile .email").html("Email : " + data.email);
						$(".profile .phone").html("Phone : " + data.phone_no);
						$(".profile .company").html('Company : ' + data.company.name);
						$(".profilePic img").attr("src", data.profile_pic);
						$.ajax({
							type 	: "GET",
							url 	: "./session.jsp?type=company&value=" + data.company.id,
							success : function(data){
									console.log(data);
							}
						})
		}
	});
	console.log("ready");
	$.ajax({
		type		: "GET",
		url 		: "../../myt-services/admin/rm?companyAdminId=" + ca_id,
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
	var rm = {};
		rm.name 		= 	$("#name").val();
		rm.email 		= 	$("#email").val();
		rm.designation 	= 	$("#designation").val();
		rm.phone_no 	= 	$("#phone_no").val();
		rm.password 	= 	$("#password").val();
		rm.area 		= 	$("#area").val();
		rm.boss_id 		= 	ca_id;
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
								    url: '../../myt-services/admin/RM/' + data.id + '/picture/company/'+ company_id,
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
		url 	: 	"./session.jsp?type=rm&value=" + rm_id,
		success : 	function(data){
					window.location = "rm.jsp";
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