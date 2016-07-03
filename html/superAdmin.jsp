<%
	if(session.getAttribute("superAdmin") == null){
		String site = new String("../");
		response.setStatus(response.SC_MOVED_TEMPORARILY);
    	response.setHeader("Location", site);
	}
%>
<!DOCTYPE html>
<html>
	<head>
		<title>Super Admin</title>
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
								List of Company Admin
							</div>
							<div class="list">
							</div>
						</div>
						<div class="profile col-md-3">
							<div class="designation">
								Super Admin
							</div>
							<br/>
							<div class="profilePic">
								<img src="../media/people.png" height="150px" width="150px">
							</div>
							<div class="name">
								<strong>Manage Your Trade</strong>
							</div>
							<div class="addNew shadow">
								<img src="../media/arrows-1.png" class="plusButton">
								<button class="btn btn-primary shadow" data-toggle="modal" data-target="#myModal" >Add New Admin</button>	
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog modal-lg" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title" id="myModalLabel">Add New Company/Company Admin</h4>
		      </div>
		      <div class="modal-body">
		      		<h4> Add Company </h4>
			        <form method="POST" enctype="multipart/form-data">
			        	<input type="text" id = "name" name = "name" placeholder= "Name" class="form-control">
			        	<input type="text" id = "address" name = "address" placeholder= "Address" class="form-control">
			        	<input type="text" id = "description" name = "description" placeholder= "Description" class="form-control">
			        	<input type="text"id = "tin" name = "tin" placeholder= "TIN/TAN" class="form-control">
			        	<input type="text" id = "pan" name = "pan" placeholder= "PAN" class="form-control">
			        	<input type="text" id = "bank_name" name = "bank_name" placeholder= "Bank Name" class="form-control">
			        	<input type="text" id = "bank_acc" name = "bank_acc" placeholder= "Bank A/C" class="form-control">
			        	<input type="text"id = "bank_add" name = "bank_add" placeholder= "Bank Address" class="form-control">
			        	<input type="text" id = "bank_ifsc" name = "bank_ifsc" placeholder= "Bank IFSC" class="form-control">
			        	<input type="text" id = "reg_no" name = "reg_no" placeholder= "Registration Number" class="form-control">
			        	<input type="file" id = "logo" name = "logo" placeholder="Logo">
		      		<h4> Add Company Admin</h4>
			        	<input type="text" id = "username" name = "username" placeholder= "Username" class="form-control">
			        	<input type="text"id = "phone_no" name = "phone_no" placeholder= "Phone No." class="form-control">
			        	<input type="text" id = "email" name = "email" placeholder= "Email" class="form-control">
			        	<input type="password" id = "password" name = "password" placeholder= "Password" class="form-control">
			        	<input type="text" id = "rm_no" name = "rm_no" placeholder= "Allowed number of RMs" class="form-control">
			        	<input type="text" id = "am_no" name = "am_no" placeholder= "Allowed number of AMs" class="form-control">
			        	<input type="text" id = "tsi_no" name = "tsi_no" placeholder= "Allowed number of TSIs" class="form-control">
			        	<input type="text" id = "dealer_no" name = "dealer_no" placeholder= "Allowed number of Dealers" class="form-control">
			        	<input type="file" id = "picture" name = "picture" >
		      </div>
		      <div class="modal-footer">
		        <button type="button" id="submit" class="btn btn-primary">Submit</button>
		        </form>
		      </div>
		    </div>
		  </div>
		</div>
	</body>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/superAdmin.js"></script>
</html>