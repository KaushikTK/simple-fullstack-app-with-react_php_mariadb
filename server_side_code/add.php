<?php

$con = mysqli_connect('localhost', 'your_username', 'your_password');
mysqli_select_db($con, 'database_name');


$name = $_POST['name'];
$age = $_POST['age'];

// simple_crud is the table name
$q = "insert into simple_crud values('$name','$age')";
if($res = mysqli_query($con,$q))
{
    echo 'added';
}
else{
    echo 'failed';
}

mysqli_close($con);

?>