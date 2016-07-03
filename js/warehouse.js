var companyAdminDetails;
$(document).ready(function(){
	$.ajax({
		type 		: "GET",
		url 		: "../../myt-services/admin/companyAdmin/"+companyAdminId+"/dealer",
		contentType : "application/json",
		success  	: function(dealerList){
						console.log(dealerList);
						for(var i = 0; i < dealerList.length; i++){
							$("#dealerList").append("<option value = '"+dealerList[i].id+"'>"+dealerList[i].name+"</option>");	
						}
		}
	});
	$.ajax({
		type 		: 	"GET",
		url			: 	"http://localhost:8080/myt-services/admin/companyAdmin/" + companyAdminId,
		contentType	: 	"application/json",
		success		:  	function(data){
						console.log(data);
						companyAdminDetails = data;
						putCompanyAdminDetails();
						$.ajax({
							type 	: "GET",
							url 	: "../html/session.jsp?type=company&value=" + data.company.id,
							success : function(data){
									console.log(data);
							}
						})
		}
	});
	$.ajax({
		type 		: 	"GET",
		url			: 	"http://localhost:8080/myt-services/order/list/warehouse?company_id=" + company_id,
		contentType	: 	"application/json",
		success		:  	function(data){
						console.log(data);
						if(data.length > 0 ){
							$(".list").html("");
						}
						for(var i = 0; i < data.length; i++) {
							var list = '<div class="listItem shadow">' +
											'<div class="dealerName col-md-10">' +
												data[i].dealer_name +
											'</div>' +
											'<div class="orderList">' +
												data[i].order_list.replaceAll("\\n","<br/>") +
											'</div>' +
										'</div>';
							$(".list").append(list);
						}
		}
	});
});
function putCompanyAdminDetails(){
	var data = companyAdminDetails;
	$(".profile .name").html(data.username);
	$(".profile .email").html("Email : " + data.email);
	$(".profile .phone").html("Phone : " + data.phone_no);
	$(".profile .company").html('Company : ' + data.company.name);
	$(".profilePic img").attr("src", data.profile_pic);
	$(".designation").html("Warehouse");
}

$("#dealerList").on('change', function(){
	var dealerId = $("#dealerList").val();
	if(dealerId == -1){
		$("#addNew").attr("disabled",true);
		putCompanyAdminDetails();
	}
	else{
		$("#addNew").attr("disabled",false);
			$.ajax({
			type 		: "GET",
			url 		: "../../myt-services/admin/dealer/" + dealerId,
			contentType : "application/json",
			success		: function(data){
							console.log(data);
							$(".designation").html("Dealer");
							$(".profile .name").html(data.name);
							$(".profile .email").html("Email : " + data.email);
							$(".profile .phone").html("Phone : " + data.phone_no);
							$(".profile .company").html('Company : ' + data.company.name);
							$(".profilePic img").attr("src", data.profile_pic);
			} 
		});
	}
});
$('#submit').click(function(){
	var invoiceData = new FormData();
	var collectionData = new FormData();
	var paymentData = new FormData();
	var accountData = new FormData();
	var cnData = new FormData();
	var dnData = new FormData();
	var sales_reportData = new FormData();
	var amount = $("#amount").val();

	invoiceData.append("invoice",invoice.files[0]);
	collectionData.append("collection" , collection.files[0]);
	paymentData.append("payment" , payment_due.files[0]);
	accountData.append("account" , account.files[0]);
	cnData.append("cn" , cn.files[0]);
	dnData.append("dn" , dn.files[0]);
	sales_reportData.append("sales_report" , sales_report.files[0]);
	var billType = ['invoice','collection','payment','account','cn','dn','sales_report'];
	var billTypeData = [invoiceData,collectionData,paymentData,accountData,cnData,dnData,sales_reportData];
	console.log(billTypeData[1]);
	var warehouse = {};
	warehouse.company_admin_id = companyAdminId;
	warehouse.amount = amount;
	warehouse.dealer_id = $("#dealerList").val();
	warehouse.company_id = company_id;
	console.log(JSON.stringify(warehouse));
	$.ajax({
		type 		: "POST",
		url 		: "http://localhost:8080/myt-services/admin/warehouse/bill",
		contentType : "application/json",
		data 		: JSON.stringify(warehouse),
		success 	: function(data){
						var bill_id = data.id;
						if(bill_id > 0){
							for(var i = 0; i < billTypeData.length; i++){
								console.log(billTypeData[i]);
								//if(billTypeData[i].get(billType[i]) != null ){
									
									$.ajax({
										type 		: "POST",
										url 		: "http://localhost:8080/myt-services/admin/warehouse/bill/" + bill_id+ "/" + billType[i],
										dataType	: "text",
										processData : false,
										contentType : false,
										data 		: billTypeData[i],
										success 	: function (data) {
													console.log(data);
										}
									});
								}
								// else{
								// 	console.log(billType[i] + " is null");
								// }
							//}
						}
						else{
							alert("Please Try Again");
						}
		}
	});

	// $.ajax({
	// 	type 		: "POST",
	// 	url 		: "someUrl",
	// 	dataType	: "text",
	// 	processData : false,
	// 	contentData : false,
	// 	data 		: invoiceData,
	// 	success 	: function (data) {
													
	// 	}
	// });
});


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

$('#logout').click(function(){
	$.ajax({
		type 	: "GET",
		url  	: "../html/session.jsp?type=logout",
		success : function(data){
				alert("Logout Successfull");
				window.location = "./";
		}
	});
})