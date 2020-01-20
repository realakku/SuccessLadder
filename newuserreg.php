<?php
// Create connection
$hostName ="localhost";
$userName ="root";
$password ="vertrigo";
$dbName="successladder";
$con = mysqli_connect($hostName,$userName ,$password,$dbName);
//Check connection
if (mysqli_connect_error())
{
echo "Failed to connect to MySQL".mysqli_connect_error();
}
else
{
echo "";
}
//make sql query
$sql="INSERT INTO newuserreg(name,email,phone,newuserid,password,hear) VALUES('".$_POST['name']."','".$_POST['email']."','".$_POST['phone']."','".$_POST['newuserid']."','".$_POST['password']."','".$_POST['hear']."')";
if(!mysqli_query($con,$sql))
{
die('ERROR:'.mysqli_error($con));
}
else
include("final.html");
mysqli_close($con);
?>