var company_admin_id;
$(document).ready(function(){
	$.ajax({
		type 		: "GET",
		url 		: "../../myt-services/admin/companyAdmin/dealer",
		contentType : "application/json",
		success  	: function(dealerList){
						for(var i = 0; i < dealerList.length; i++){
							$("#dealerList").append("<option value = '"+dealerList[i].id+"'>"+dealerList[i].name+"</option>");	
						}
		}
	});
	$.ajax({
		type 		: "GET",
		url 		: "../../myt-services/admin/companyAdmin",
		contentType	: "application/json",
		success 	: function(data){
						$(".userName").html("Hello " + data.username);
						company_admin_id = data.id;
		}

	});
});


$("#dealerList").on('change', function(){
	var dealerId = $("#dealerList").val();
	$.ajax({
		type 		: "GET",
		url 		: "../../myt-services/admin/dealer/" + dealerId,
		contentType : "application/json",
		success		: function(data){
						$(".designation").html("Dealer");
						$(".profile .name").html(data.name);
						$(".profile .email").html("Email : " + data.email);
						$(".profile .phone").html("Phone : " + data.phone_no);
						$(".profile .company").html('Company : ' + data.company.name);
						$(".profilePic img").attr("src", data.profile_pic);
		} 
	});
});

$('#submit').click(function(){
	var invoiceData = new FormData();
	var collectionData = new FormData();
	var paymentData = new FormData();
	var accountData = new FormData();
	var cnData = new FormData();
	var dnData = new FormData();
	var sales_reportData = new FormData();

	invoiceData.append("invoice" , invoice.files[0]);
	collectionData.append("collection" , collection.files[0]);
	paymentData.append("payment" , payment.files[0]);
	accountData.append("account" , account.files[0]);
	cnData.append("cn" , cn.files[0]);
	dnData.append("dn" , dn.files[0]);
	sales_reportData.append("sales_report" , sales_report.files[0]);

	// var warehouse = {};
	// $.ajax({
	// 	type 		: "POST",
	// 	url 		: "http://localhost:8080/myt-services/admin/warehouse/bill",
	// 	contentType : "application/json",
	// 	data 		: 
	// });

	$.ajax({
		type 		: "POST",
		url 		: "someUrl",
		dataType	: "text",
		processData : false,
		contentData : false,
		data 		: invoiceData,
		success 	: function (data) {
													
		}
	});
});

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#invoice").change(function(){
    readURL(this);
});