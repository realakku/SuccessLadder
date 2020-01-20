<?php
include("include/connection.php");
$msg="";
if(array_key_exists("msg",$_REQUEST))	
{
$msg=$_REQUEST['msg'];
}
if(array_key_exists("login",$_REQUEST))	
{
$sql="select * from newuserreg where newuserid='$_REQUEST[newuserid]'";
$rs=mysql_query($sql);
if(mysql_num_rows($rs)>0)
{
 	$data=mysql_fetch_assoc($rs);
	if($_REQUEST['password']==$data['password'])
  {       $_SESSION['newuserid']=$_REQUEST['newuserid'];
  
		header("Location:final.html");
  }
	else
	{
	$msg="wrong password";
	echo $msg;
		header("Location:login.html?msg=$msg");
	}
}
else{
	$msg="wrong password";
	header("Location:login.html?msg=$msg");
}
}
?>	
<tr><td><?php echo $msg;?></td></tr>

