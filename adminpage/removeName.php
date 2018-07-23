<?php

$myfile = fopen("../homepage/testfile.txt", "r") or die("removeName.php failed");
$list = fread($myfile, filesize("../homepage/testfile.txt"));

$jsonlist = json_decode($list);

?>