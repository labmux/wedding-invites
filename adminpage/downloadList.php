<?php
/**
 * Download list from server
 */
$myfile = fopen("../homepage/testfile.txt", "r") or die("Decede");

$list = fread($myfile, filesize("../homepage/testfile.txt"));


echo $list;
fclose($myfile);



?>