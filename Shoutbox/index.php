<?php include 'database.php'; ?>
<?php 
	$query = "SELECT * FROM shouts ORDER BY id DESC";
	$shouts = mysqli_query($con,$query);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>jQuery Ajax Shoutbox</title>
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
			<!--[if lt IE 9]>
			  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script src="js/script.js"></script>
		<link rel="stylesheet" href="css/style.css">
	</head>

	<body>
		<div id="container">	
			<header>
				<h1>Shoutbox</h1>
			</header>
			<div id="shouts">
				<ul>
					<?php while($row = mysqli_fetch_assoc($shouts)) : ?>
						<li><?php echo $row['name'];?>: <?php echo $row['shout'];?> [<?php echo $row['date'];?>]</li>
					<?php endwhile; ?>
					<li></li>
				</ul>
			</div>
			<footer>
				<form>
					<label>Name: </label>
					<input type="text" id="name">
					<label>Shout Text: </label>
					<input type="text" id="shout">
					<input type="submit" id="submit" value="SHOUT!">
				</form>
			</footer>
		</div>
	</body>
</html>
