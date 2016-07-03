<%
	if(session.getAttribute("ca_id") == null){
		String site = new String("http://localhost:8080/myt-admin/");
		response.setStatus(response.SC_MOVED_TEMPORARILY);
    	response.setHeader("Location", site);
	}
	else{
		String ca_id = (String)session.getAttribute("ca_id");
		String company_id = (String)session.getAttribute("company_id");
	}
%>
<!DOCTYPE html>
<html>
	<head>
		<title>Company Admin</title>
		<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../css/main.css">
		<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12 header whiteBackground shadow">
					<div class="row">
						<div class="col-md-2 dashLogo">
							<strong>MYT</strong>
						</div>
						<div class="col-md-10">
							<button class="btn settings" id="setting" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../media/tool.png" height="30px"></button>
							<ul class="dropdown-menu dropDown" aria-labelledby="setting">
							 	
							 	<li id="logout">Logout</li>
							 </ul>
							<div class="userName">Welcome!</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-9 listContainer">
							<div class="heading">
								List of Regional Manager
							</div>
							<div class="list">
							</div>
						</div>
						<div class="profile col-md-3">
							<div class="designation">
								Company Admin
							</div>
							<br/>
							<div class="profilePic">
								<img src="../media/people.png" height="150px" width="150px">
							</div>
							<div class="name">
								<strong>Bhanu Aggarwal</strong>
							</div>
							<div class="email">
								Email : bhanu@gawds.in
							</div>
							<div class="phone">
								Phone : +91-9468077921
							</div>
							<div class="company">
								Company : GAWDS
							</div>
							<div class="addNew shadow">
								<img src="../media/arrows-1.png" class="plusButton">
								<button class="btn btn-primary shadow" data-toggle="modal" data-target="#myModal">Add New RM</button>	
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">Add New Regional Manager</h4>
		      </div>
		      <div class="modal-body">
		        <form method="POST" enctype="multipart/form-data">
		        	<div class="inputProfilePic col-md-4 col-md-offset-1"></div>
		        	
			        	<input type="text" id = "name" name = "name" placeholder= "Name" class="form-control rightInput" required>
			        	<input type="text" id = "designation" name = "designation" placeholder= "Designation" class="form-control rightInput" required>
			        	<input type="text" id = "area" name = "area" placeholder= "Area" class="form-control rightInput" required>
			        	<input type="text"id = "phone_no" name = "phone_no" placeholder= "Phone No." class="form-control" required>
			        	<input type="text" id = "email" name = "email" placeholder= "Email" class="form-control" required>
			        	<input type="password" id = "password" name = "password" placeholder= "Password" class="form-control" required>
			        	<input type="file" id = "picture" name = "picture" onchange="readURL(this);" required>
		        	
		      </div>
		      <div class="modal-footer">
		        <button type="button" id="submit" class="btn btn-primary">Submit</button>
		        </form>
		      </div>
		    </div>
		  </div>
		</div>
	</body>
	<script type="text/javascript">
		var ca_id = parseInt('${ca_id}');
		var company_id = parseInt('${company_id}');
		console.log(ca_id);
	</script>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/fileInput.js"></script>
	<script type="text/javascript" src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/ca.js"></script>
</html>