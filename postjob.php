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
$sql="INSERT INTO postjob(name,email,post,qualification,skill,workexpyear,workexpmonth,salary,curremp,jobdes,jobloc) VALUES('".$_POST['name']."','".$_POST['email']."','".$_POST['post']."','".$_POST['qualification']."','".$_POST['skill']."','".$_POST['workexpyear']."','".$_POST['workexpmonth']."','".$_POST['salary']."','".$_POST['curremp']."','".$_POST['jobdes']."','".$_POST['jobloc']."')";
if(!mysqli_query($con,$sql))
{
die('ERROR:'.mysqli_error($con));
}
else
include("final.html");
mysqli_close($con);
?>