<?php
/**
 * Download list from server
 */
$myfile = fopen("../homepage/testfile.txt", "r") or die("Decede");

$list = fread($myfile, filesize("../homepage/testfile.txt"));

//$mylist = json_decode($list, false);
//$str = "";

echo $list;
fclose($myfile);



?>