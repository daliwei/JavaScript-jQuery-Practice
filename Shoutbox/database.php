<?php 
	//Connect to MySQL
	$con = mysqli_connect("localhost","root","1987115","shoutbox");
	if(mysqli_connect_errno()) {
		echo 'Failed to connect: '.mysqli_connect_error();
	}
?>