$(document).ready(function() {
	$.ajax({
		type 		: 	"GET",
		url			: 	"http://localhost:8080/myt-services/admin/am/"+am_id+"/details",
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
		url 		: "http://localhost:8080/myt-services/admin/tsi?am_id=" + am_id,
		contentType	: "application/json",
		success		: function(data){
						rm_list = data;
						console.log(data.length);
						for(var i = 0; i < data.length; i++) {
							var list = '<div class="listItem shadow" onClick="openTSI('+data[i].id+')">' +
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
	var tsi = {};
		tsi.name 		= 	$("#name").val();
		tsi.email 		= 	$("#email").val();
		tsi.designation = 	$("#designation").val();
		tsi.phone_no 	= 	$("#phone_no").val();
		tsi.password 	= 	$("#password").val();
		tsi.area 		= 	$("#area").val();
		tsi.boss_id 	= 	am_id;
		tsi.rm_id 		= 	rm_id;
		tsi.company_admin_id = ca_id;
	$.ajax({
		type 			: 	"POST",
		url				:   "../../myt-services/admin/tsi/add", 
		data 			: 	JSON.stringify(tsi),
		contentType 	: 	"application/json",
		success 		: 	function(data){
								console.log(data);
								var pic = new FormData();
								pic.append("file",picture.files[0]);
								$.ajax({
								    url: '../../myt-services/admin/TSI/' + data.id + '/picture/company/' + company_id,
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

function openTSI(tsi_id){
	$.ajax({
		type 	: 	"GET",
		url 	: 	"./session.jsp?type=tsi&value=" + tsi_id,
		success : 	function(data){
						window.location = "tsi.jsp";
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