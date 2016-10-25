

<html>
<head>
<title>hello
</title>
<link rel="stylesheet" href="neww.css">
</head>
<body>
<?php
include'newcon1.php';
$dbconnection = new dbconnection();
?>
<form  metod ="post" action="corct.php">>
<h1>form<hr></h1>
<table>
<tr>
<td>NAME</td>
<td><input type="text"   name="name"></td>
</tr>
<tr>
  <td>BRANCH</td>
   <td><input type="text" name="branch" ></td>
</tr>
 <tr>
  <td>EMAIL</td>
  <td><input text="email" name="email"></td>
<tr>
   <td>RATE US</td>
   <td><input type="number" min="0" max="10" name="number"></td>
   </tr>
   <tr>
   <td>DATE OF BIRTH</td>
   <td><input  type="DATE" min="2015-01-01" max="2016-01-02"  name="date">
 <tr>
   <td></td>
    <td><input type="submit" ></td>
</tr>
</table>
</form>
<div>
Hi <?php echo htmlspecialchars($_POST['name']); ?>
Your branch <?php echo $_POST['branch']; ?>
email <?php echo $_POST['email'];?>
dob <?php echo $_POST['date'];?>
</body></div>
</html>