$("#login").click(function(){	
	if($('#username').val() == "" || $('#password').val() == ""){
		alert("All Fields are Required");
	}
	else if($('#username').val() == 'admin' && $('#password').val() == 'admin'){
		$.ajax({
			type 	: "GET",
			url 	: "./html/session.jsp?type=superAdmin&value=1",
			success : function(data){
				console.log(data);
				window.location.replace("html/superAdmin.jsp");
			}
		});
	    return false;
	} 
	else {
		var user = {
			"email"		: $('#username').val(),
			"password"	: $('#password').val() 
		}
		$.ajax({
			type		: "POST", 
			url			: "../../myt-services/admin/login", 
			data		: JSON.stringify(user),
			dataType 	: "json",
		  	contentType	: "application/json",
			success		: function(data){
							console.log(data);
							if(data != null){
								if(data.type == "CA"){
									$.ajax({
										type 	: "GET",
										url 	: "./html/session.jsp?type=ca&value=" + data.reference_id,
										success : function(data){
											console.log(data);
										}
									});
									window.location.replace("html/ca.jsp");
								}
								else{
									alert("Service not Available");
								}
							}
							else{
								alert("Wrong Id password");
							}
						} 
		});
	}
});