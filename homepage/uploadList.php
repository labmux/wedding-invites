<?php
/* DEVELOPER TESTS */
var_dump($_POST['list']);

//OPEN FILE ang get 'list'
$myfile = fopen("testfile.txt", "a") or die ("Just die");
$listout = json_decode($_POST['list'], false);
$str = "";

//Display array nicely
for($i = 0; $i < count($listout); $i++)
{
    $str .= $listout[$i]->name . ",";
    if($listout[$i]->ischild == 1)
         $str .= $listout[$i]->ischild ;
    else
        $str .= 0 ;

    $str .= "\r\n";
}

//WRITE TO TEXT
fwrite($myfile, $str);
fclose($myfile);

?>

