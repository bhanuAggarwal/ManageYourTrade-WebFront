$("#login").click(function(){	
	if($('#username').val() == "" || $('#password').val() == ""){
		alert("All Fields are Required");
	}
	else if($('#username').val() == 'admin' && $('#password').val() == 'admin'){
		window.location.href = "html/super_admin.html";
	    return false;
	} 
	else {
		var user = {
			"email"		: $('#username').val(),
			"password"	: $('#password').val() 
		}
		$.ajax({
			type		: "POST", 
			url			: "http://localhost:8080/myt-services/admin/login", 
			data		: JSON.stringify(user),
			dataType 	: "json",
		  	contentType	: "application/json",
			success		: function(data){
							console.log(data);
							if(data != null){
								if(data.type == "CA"){
									window.location.href = "html/ca.html";
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

$("#logout").click(function(){
                  window.location.href = "../index.html";
                   return false;
}); 

$(".circular_add").click(function(){
      window.location.href = "add_compadmin.html";
       return false;
}); 

$("#add_new").click(function(){
/*window.open("add_new.jsp",null,
"height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");;
})*/

  $("#container").css('opacity','0.4');
  $('#popup').css('display','block');

});