<html>
<head></head>
<body>
<?php
include('connection.php');
?>
Hi <?php echo htmlspecialchars($_POST['name']); ?>
Your branch <?php echo $_POST['branch']; ?>
email <?php echo $_POST['email'];?>
dob <?php echo $_POST['date'];?>
</body>
</html>
