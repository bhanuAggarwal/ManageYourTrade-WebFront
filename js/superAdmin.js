$(document).ready(function() {
	console.log("ready");
	$.ajax({
		type		: "GET",
		url 		: "http://localhost:8080/myt-services/super-admin/company-admin",
		contentType	: "application/json",
		success		: function(data){
						rm_list = data;
						console.log(data);
						for(var i = 0; i < data.length; i++) {
							var list = '<div class="listItem shadow">' +
											'<div class="itemPic col-md-2">' +
												'<img src="'+ data[i].profile_pic+'" height="100px" width="100px">' +
											'</div>' + 
											'<div class="itemName col-md-10">' +
												data[i].username +
												'<div class="itemEmail">' +
													data[i].company.name + " <br/>" + data[i].email + " | " + data[i].phone_no+
												'</div>' +
											'</div>' +
										'</div>';
							$(".list").append(list);
					}
		}
	});
})
var company = {};
$(document).ready(function() {
	$("#submit").click(function(){
		company.name = $("#name").val();
		company.address = $("#address").val();
		company.description = $("#desc").val();
		company.tin = $("#tin").val();
		company.pan = $("#pan").val();
		company.bank_name = $("#bank_name").val();
		company.bank_account = $("#bank_acc").val();
		company.bank_address = $("#bank_add").val();
		company.bank_ifsc = $("#bank_ifsc").val();
		company.reg_no = $("#reg_no").val();
		//if()
		$.ajax({
  			type: "POST",
  			url: "http://localhost:8080/myt-services/super-admin/company",
  			data: JSON.stringify(company),
  			success: function(companyResponse) {
  				console.log(companyResponse);
  				var company_id = companyResponse.id;
  				var company_admin = {};
  				company_admin.username  = $("#username").val();
  				company_admin.email  = $("#email").val();
  				company_admin.phone_no  = $("#phone_no").val();
  				company_admin.password  = $("#password").val();
  				company_admin.rm_no  = $("#rm_no").val();
  				company_admin.am_no  = $("#am_no").val();
  				company_admin.tsi_no  = $("#tsi_no").val();
  				company_admin.dealer_no  = $("#dealer_no").val();
  				$.ajax({
  					type: "POST",
  					url: "http://localhost:8080/myt-services/super-admin/company-admin/company/" + company_id,
  					data: JSON.stringify(company_admin),
  					success: function(companyAdminResponse) {
  						var pic = new FormData();
								pic.append("file",picture.files[0]);
								$.ajax({
								    url: '../../myt-services/admin/CA/' + companyAdminResponse.id + '/picture/company/'+ company_id,
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
  						alert("Company Admin and Company added");
  					},
  					dataType : "json",
  					contentType: "application/json",
        		});

        		var pic = new FormData();
								pic.append("file",logo.files[0]);
								$.ajax({
								    url: '../../myt-services/admin/LOGO/' + company_id + '/picture/company/'+ company_id,
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

  			},
  			dataType : "json",
  			contentType: "application/json",
        });
	})
});

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