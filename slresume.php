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
$sql="INSERT INTO resume(email,fname,lname,password,gender,dob,nationality,mobile,address,city,state,country,pincode,curremp,currdes,workmonth,workyear,degree,uniname,clgname) VALUES('".$_POST['email']."','".$_POST['fname']."','".$_POST['lname']."','".$_POST['password']."','".$_POST['gender']."','".$_POST['dob']."','".$_POST['nationality']."','".$_POST['mobile']."','".$_POST['address']."','".$_POST['city']."','".$_POST['state']."','".$_POST['country']."','".$_POST['pincode']."','".$_POST['curremp']."','".$_POST['currdes']."','".$_POST['workmonth']."','".$_POST['workyear']."','".$_POST['degree']."','".$_POST['uniname']."','".$_POST['clgname']."')";
if(!mysqli_query($con,$sql))
{
die('ERROR:'.mysqli_error($con));
}
else
include("final.html");
mysqli_close($con);
?>