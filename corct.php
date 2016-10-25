

<html>
<head>
<title>hello
</title>

</head>
<body>
<?php
include'newcon1.php';
$dbconnection = new dbconnection();
?>
<form  metod ="post" action=""<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);">>
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

<?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }
    
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>PHP Form Validation Example</h2>
<p><span class="error">* required field.</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Name: <input type="text" name="name">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  Website: <input type="text" name="website">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Comment: <textarea name="comment" rows="5" cols="40"></textarea>
  <br><br>
  Gender:
  <input type="radio" name="gender" value="female">Female
  <input type="radio" name="gender" value="male">Male
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">  
</form>

<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
?>
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $stat = pg_connection_status($dbconn);
  if ($stat === PGSQL_CONNECTION_OK) {
      echo 'Connection status ok';
  } else {
      echo 'Connection status bad';
  }    
?>
</html>