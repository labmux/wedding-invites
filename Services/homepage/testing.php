<?php
var_dump($_POST['list']);

$myfile = fopen("testfile.txt", "a") or die ("Just die");
$list = $_POST['list'];

$str = $list . "\r\n";
fwrite($myfile, $str);
fclose($myfile);



?>

