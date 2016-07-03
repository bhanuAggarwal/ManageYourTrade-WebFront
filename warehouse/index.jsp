<%@ page import="java.io.*,java.util.*" %>
<%  
  String site = new String();
  if(session.getAttribute("ca_id") != null){
    site = new String("./warehouse.jsp");
    response.setStatus(response.SC_MOVED_TEMPORARILY);
    response.setHeader("Location", site); 
  }
%>
<!DOCTYPE html>
<html>
<head>
  <title>MYT</title>
  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
  <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed' rel='stylesheet' type='text/css'>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 header">
            <div class="text-center">WELCOME TO MYT</div>
        </div>
        <div class="col-md-12 mainContainer">  
          <div class="loginBox">
            <div class="tagLine">Let's get started.</div>

          </div>
          <img src="../media/logo.png" height="80px" class="logo">
          <form class="loginForm">
              <input class="form-control fields" type="text" id="username" name="username" placeholder="Email">
              <input class="form-control fields" type="password" id="password" name="password" placeholder="Password">
              <input type="buttton" id="login" name="login" value="Login" class="submit btn">
            </form>
        </div>
      </div>
  </div>
</body>
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="login.js"></script>
</html>