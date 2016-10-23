<html>
<head></head>
<body>
Hi <?php echo htmlspecialchars($_POST['name']); ?>
You are <?php echo (int)$_POST['age']; ?> years old.
</body>
</html>
