<?php
//User login information
$realusername = "admin";
$realpassword = "admin";

$username = $_POST['username'];
$password = $_POST['password'];

$login = 0;

if($realusername == $username && $realpassword == $password)
{
    $login = 1;

}
else
{
    $login = 0;
}

echo $login;