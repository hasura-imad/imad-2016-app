<?php
include 'connect.php';

$Name = $_POST['name'];
$Username = $_POST['username'];
$Email = $_POST['email'];
$Password = $_POST['password'];
$PhoneNumber = $_POST['phone'];
$AddressLine1 = $_POST['add1'];
$AddressLine2 = $_POST['add2'];
$City = $_POST['city'];
$State = $_POST['state'];
$PinCode = $_POST['pin'];

$sql_users = "INSERT INTO users(Name,Username,Email,Password,PhoneNumber,AddressLine1,AddressLine2,City,State,PinCode) VALUES ('$Name','$Username','$Email','$Password','$PhoneNumber','$AddressLine1','$AddressLine2','$City','$State','$PinCode')";
if(mysqli_query($connect,$sql_users))
{
	echo "Values successfully inserted in database ";
}
else
{
	echo "Registration unsuccessful, please try again ";
}

?>