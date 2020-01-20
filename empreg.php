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
$sql="INSERT INTO empreg(name,companydes,best,website,phone,address,city,state,country,postalcode,fname,lname,contactno,account,email,newuserid,password,hear) VALUES('".$_POST['name']."','".$_POST['companydes']."','".$_POST['best']."','".$_POST['website']."','".$_POST['phone']."','".$_POST['address']."','".$_POST['city']."','".$_POST['state']."','".$_POST['country']."','".$_POST['postalcode']."','".$_POST['fname']."','".$_POST['lname']."','".$_POST['contactno']."','".$_POST['account']."','".$_POST['email']."','".$_POST['newuserid']."','".$_POST['password']."','".$_POST['hear']."')";
if(!mysqli_query($con,$sql))
{
die('ERROR:'.mysqli_error($con));
}
else
include("final.html");
mysqli_close($con);
?>