<?php
$dbconn3 = pg_pconnect("host=db.imad.hasura-app.io port=5432 dbname=blog user=ramit0402 password=process.env.DB_PASSWORD");
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="icon" type="image/png" href="images/logo.png" sizes="16x16">
	<link rel="icon" type="image/png" href="images/logo.png" sizes="32x32">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Home-Radio</title>

	<!--BOOTSTRAP CSS-->
	<link href="css/bootstrap.css" rel="stylesheet">

	<!--CUSTOM CSS-->
	<link href="css/style-signup.css" rel="stylesheet">

	<!--JQUERY JAVASCRIPT-->
	<script src="js/jquery.js"></script>

	<!--BOOTSTRAP JAVASCRIPT-->
	<script src="js/bootstrap.js"></script>
</head>
<body>
	<div class="col-md-4 col-md-offset-4">
		<form class="form-horizontal">
			<h3 class="col-sm-offset-4">SIGN UP</h3>
			<div class="form-group">
		    	<label for="Name" class="col-sm-3 control-label">Name</label>
		    	<div class="col-sm-9">
		      		<input type="text" class="form-control" id="Name" placeholder="Name">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label for="Username" class="col-sm-3 control-label">Username</label>
		    	<div class="col-sm-9">
		      		<input type="text" class="form-control" id="Username" placeholder="Username">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label for="Email" class="col-sm-3 control-label">Email</label>
		    	<div class="col-sm-9">
		      		<input type="email" class="form-control" id="Email" placeholder="Email">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label for="Password" class="col-sm-3 control-label">Password</label>
		    	<div class="col-sm-9">
		      		<input type="password" class="form-control" id="Password" placeholder="Password">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label for="Dob" class="col-sm-3 control-label">DOB</label>
		    	<div class="col-sm-9">
		      		<input type="date" class="form-control" id="Dob" placeholder="Dob">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label for="Gender" class="col-sm-3 control-label">Gender</label>
		    	<div class="col-sm-9">
		      		<input type="radio" class="Gender" name="gender" id="Gender" value="male"> Male
					<input type="radio" class="Gender" name="gender" id="Gender" value="female"> Female
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label for="City" class="col-sm-3 control-label">City</label>
		    	<div class="col-sm-9">
		      		<input type="text" class="form-control" id="City" placeholder="City">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<div class="col-sm-offset-2 col-sm-10">
		      		<button type="submit" class="btn btn-default">Sign Up</button>
		    	</div>
		  	</div>
		</form>
	</div>
</body>
</html>