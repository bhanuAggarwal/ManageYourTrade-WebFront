<%
	if(session.getAttribute("tsi_id") == null){
		String site = new String("../");
		response.setStatus(response.SC_MOVED_TEMPORARILY);
    	response.setHeader("Location", site);
	}
	else{
		String tsi_id = (String)session.getAttribute("tsi_id");
		String am_id = (String)session.getAttribute("am_id");
		String rm_id = (String)session.getAttribute("rm_id");
		String ca_id = (String)session.getAttribute("ca_id");
		String company_id = (String)session.getAttribute("company_id");
	}
%>
<!DOCTYPE html>
<html>
	<head>
		<title>Area Manager</title>
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
								List of Dealers
							</div>
							<div class="list">
							</div>
						</div>
						<div class="profile col-md-3">
							<div class="designation">
								TSI
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
								<button class="btn btn-primary shadow" data-toggle="modal" data-target="#myModal"><span>Add New Dealer</span></button>	
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
		        <h4 class="modal-title" id="myModalLabel">Add New Dealer</h4>
		      </div>
		      <div class="modal-body">
		        <form method="POST" enctype="multipart/form-data">
		        	<input type="text" id = "name" name = "name" placeholder= "Name" class="form-control">
		        	<input type="text"id = "phone_no" name = "phone_no" placeholder= "Phone No." class="form-control">
		        	<input type="text" id = "email" name = "email" placeholder= "Email" class="form-control">
		        	<input type="password" id = "password" name = "password" placeholder= "Password" class="form-control">
					<input type="text" class="form-control" placeholder="Address" id="address" name ="address"/>
					<input type="text" class="form-control" placeholder="Latitude" id="latitude" name = "latitude"/>
					<input type="text" class="form-control" placeholder="Longitude" id="longitude" name = "longitude"/> 
					<input type="text" class="form-control" placeholder="TIN/TAN" id="tin" name = "tin"/>
					<input type="text" class="form-control" placeholder="Pan" id="pan" name = "pan"/>
					<input type="text" class="form-control" placeholder="Bank Name" id="bank_name" name = "bank_name"/>
					<input type="text" class="form-control" placeholder="Bank A/C" id="bank_acc" name = "bank_acc"/>
					<input type="text" class="form-control" placeholder="Bank Address" id="bank_add" name = "bank_add"/>
					<input type="text" class="form-control" placeholder="Bank IFCS" id="bank_ifsc" name = "bank_ifsc"/>
					<input type="text" class="form-control" placeholder="Registration Number" id="reg_no" name = "reg_no"/>
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
	<script type="text/javascript">
		var tsi_id = parseInt('${tsi_id}');
		var am_id = parseInt('${am_id}');
		var rm_id = parseInt('${rm_id}');
		var ca_id = parseInt('${ca_id}');
		var company_id = parseInt('${company_id}');
	</script>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/tsi.js"></script>
</html>