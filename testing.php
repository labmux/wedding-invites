<?php
var_dump($_POST['list']);

$myfile = fopen("testfile.txt", "w") or die ("Just die");
$txt = $_POST['list'];
fwrite($myfile, $txt);
fclose($myfile);
?>
