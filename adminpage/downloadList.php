<?php
/**
 * Download list from server
 */

$myfile = fread("homepage/testfile.txt", "testfile.txt") or die ('Decede');

var_dump(json_encode($myfile));
var_dump(json_decode($myfile));


?>