<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<form method="POST" enctype="multipart/form-data">
	<input type="file" name="sample" id="sample">
	<button type="button" name="submit" id="submit">Submit</button>
</form>
</body>
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript">
	$("#submit").click(function(){
		var obj = new FormData();
		obj.append("file",sample.files[0]);
		$.ajax({
			url: '../../myt-services/admin/RM/' + "12" + '/picture/company/'+ "12",
		    data: obj,
		    dataType: 'text',
		    processData: false,
		    contentType: false,
		    type: 'POST',
		    success: function(result){
		      console.log(result);
		    }
		});
	});
</script>
</html>