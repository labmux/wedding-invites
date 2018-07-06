<?php
//User login information
$realusername = "admin";
$realpassword = "admin";

$username = $_POST['username'];
$password = $_POST['password'];

if($realusername == $username && $realpassword == $password)
{
    echo '1';

}
else
{
    echo '0';
}