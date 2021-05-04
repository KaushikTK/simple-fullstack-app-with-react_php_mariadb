<?php

$con = mysqli_connect('localhost', 'your_username', 'your_password');
mysqli_select_db($con, 'database_name');
// simple_crud is the table name

$type = $_POST['type'];

if($type == 'view_one')
{
    $name = $_POST['name'];
    $q = "select * from simple_crud where name='$name'";
    if($res = mysqli_query($con,$q))
    {
        $r = mysqli_fetch_assoc($res);
        $name = $r['name'];
        $age = $r['age'];
        echo "$name,$age";
    }
    else{
        echo 'error';
    }
}
else if($type == 'view_all')
{
    $r = '';
    $q = "select * from simple_crud";
    if($res = mysqli_query($con,$q))
    {
        while($t = mysqli_fetch_assoc($res))
        {
            $r = $r.$t['name'].','.$t['age'].'//';
            //$r = $r."'$name','$age'//";
        }
    
        echo $r;
    }
    else{
        echo 'error';
    }

}

mysqli_close($con);

?>