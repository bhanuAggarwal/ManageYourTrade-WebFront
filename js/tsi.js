$(document).ready(function() {
	$.ajax({
		type 		: 	"GET",
		url			: 	"http://localhost:8080/myt-services/admin/tsi/"+tsi_id+"/details",
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
		url 		: "http://localhost:8080/myt-services/admin/dealers?tsi_id=" + tsi_id ,
		contentType	: "application/json",
		success		: function(data){
						rm_list = data;
						console.log(data.length);
						for(var i = 0; i < data.length; i++) {
							var list = '<div class="listItem shadow" onClick="openDealer('+data[i].id+')">' +
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
	var dealer = {};
		dealer.name 		= 	$("#name").val();
		dealer.email 		= 	$("#email").val();
		dealer.phone_no 	= 	$("#phone_no").val();
		dealer.password 	= 	$("#password").val();
		dealer.address 		= 	$("#address").val();
		dealer.latitude 	= 	$("#latitude").val();
		dealer.longitude 	= 	$("#longitude").val();
		dealer.tin	 		= 	$("#tin").val();
		dealer.pan 			= 	$("#pan").val();
		dealer.bank_name 	= 	$("#bank_name").val();
		dealer.bank_account = 	$("#bank_acc").val();
		dealer.bank_address = 	$("#bank_add").val();
		dealer.bank_ifsc 	= 	$("#bank_ifsc").val();
		dealer.reg_no 		= 	$("#reg_no").val();
		dealer.boss_id 		= 	tsi_id;
		dealer.am_id 		= 	am_id;
		dealer.rm_id 		= 	rm_id;
		dealer.company_admin_id = ca_id;

	$.ajax({
		type 			: 	"POST",
		url				:   "../../myt-services/admin/dealer/add", 
		data 			: 	JSON.stringify(dealer),
		contentType 	: 	"application/json",
		success 		: 	function(data){
								console.log(data);
								var pic = new FormData();
								pic.append("file",picture.files[0]);
								$.ajax({
								    url: '../../myt-services/admin/DEALER/' + data.id + '/picture/company/' + company_id,
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
						//window.location = "dealer.jsp";
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