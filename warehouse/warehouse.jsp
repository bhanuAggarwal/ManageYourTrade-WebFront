<%@ page import="java.io.*,java.util.*" %>
<%
	if(session.getAttribute("ca_id") == null){
		String site = new String("./");
		response.setStatus(response.SC_MOVED_TEMPORARILY);
    	response.setHeader("Location", site);
	}
	else{
		String ca_id = (String)session.getAttribute("ca_id");
		String company_id = (String)session.getAttribute("company_id");
	}
%>
<html>
	<head>
		<title>Warehouse Panel</title>
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
							<select id= "dealerList" class="shadow">
								<option value="-1">Select Dealer</option>
							</select>
							<div class="orders">
								<span>Recent Orders</span>
								<div class="list">
									<div class="listItem shadow">
										No Orders Yet!!
									</div>
								</div>
							</div>
						</div>
						<div class="profile col-md-3">
							<div class="designation">
								Warehouse
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
								<button class="btn btn-primary shadow" data-toggle="modal" data-target="#myModal" id="addNew" disabled="true">Add Bills</button>	
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
		        <h4 class="modal-title" id="myModalLabel">Add New Bill Statements</h4>
		      </div>
		      <div class="modal-body">
	        	<form method = "POST" enctype="multipart/form-data">

					<label for="invoice" style="margin-left:2%"> Invoice</label>
					<input type = "file" name = "invoice" id = "invoice" onchange="readURL(this);"/><br/>
					<label for="collection"> Collection</label>
					<input type = "file" name = "collection" id = "collection" onchange="readURL(this);"/><br/>
					<label for="payment_due"> Payment Due</label>
					<input type = "file" name = "payment_due" id = "payment_due" onchange="readURL(this);"/><br/>
					<label for="account"> Account Statement</label>
					<input type = "file" name = "account" id = "account" onchange="readURL(this);"/><br/>
					<label for="cn"> CN Statement</label>
					<input type = "file" name = "cn" id = "cn" onchange="readURL(this);"/><br/>
					<label for="dn">DN Statement</label>
					<input type = "file" name = "dn" id = "dn" onchange="readURL(this);"/><br/>
					<label for="sales_report">Sales Report</label>
					<input type = "file" name = "sales_report" id = "sales_report" onchange="readURL(this);"/><br/>
					<input type = "text" name = "amount" id = "amount" placeholder = "Total Amount" class="form-control" /><br/>
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
		var companyAdminId = '${ca_id}';
		var company_id ='${company_id}';
		console.log("companyAdminId  : " , companyAdminId);
	</script>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/warehouse.js"></script>
</html>
