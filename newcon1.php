<html><body><?php 
class dbconnection{
var $conn;
function dbconnection(){
$this->conn = pg_connect("host='localhost' port='5432' dbname='bhanu836' user='bhanu836' password='db-bhanu836-69865'") or die("unable to connect database");
?>
}
</body>
/<html>