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
$sql="INSERT INTO apply(name,email,subject,reshead,skill,workexpyear,workexpmonth,currsal,empstatus,curremp,currdes,currloc,prejobloc,qualification,mobile,cover) VALUES('".$_POST['name']."','".$_POST['email']."','".$_POST['subject']."','".$_POST['reshead']."','".$_POST['skill']."','".$_POST['workexpyear']."','".$_POST['workexpmonth']."','".$_POST['currsal']."','".$_POST['empstatus']."','".$_POST['curremp']."','".$_POST['currdes']."','".$_POST['currloc']."','".$_POST['prejobloc']."','".$_POST['qualification']."','".$_POST['mobile']."','".$_POST['cover']."')";
if(!mysqli_query($con,$sql))
{
die('ERROR:'.mysqli_error($con));
}
else
include("final.html");
mysqli_close($con);
?>