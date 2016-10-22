

<html>
<head>
<title>hello
</title>
<link rel="stylesheet" href="neww.css">
</head>
<body>
<?php
include('connection.php');
?>
<form metod ="post" action="new.php">>
<h1>form<hr></h1>
<table>
<tr>
<td>NAME</td>
<td><input type="text"></td>
</tr>
<tr>
  <td>BRANCH</td>
   <td><input type="text" name="fname" ></td>
</tr>
 <tr>
  <td>EMAIL</td>
  <td><input text="email"></td>
<tr>
   <td>RATE US</td>
   <td><input type="number" min="0" max="10"></td>
   </tr>
   <tr>
   <td>DATE OF BIRTH</td>
   <td><input  type="DATE" min="2015-01-01" max="2016-01-02" >
 <tr>
   <td></td>
    <td><input type="submit" ></td>
</tr>
</table>
</form>

</body>
</html>