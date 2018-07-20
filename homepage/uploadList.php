<?php
/* DEVELOPER TESTS */
var_dump($_POST["list"]);

//OPEN FILE ang get 'list'
$myfile = fopen("testfile.txt", "r+") or die ("Just die");

$oglist = fread($myfile, filesize("testfile.txt"));
$list = $_POST["list"];

if (empty($oglist)) {
    $jsonoglist = array();
} else
    $jsonoglist = json_decode($oglist);
$jsonlist = json_decode($list);

$jsonoglist = array_merge($jsonoglist, $jsonlist);

$oglist = json_encode($jsonoglist);

//Display array nicely
//for($i = 0; $i < count($listout); $i++)
//{
//    $str .= $listout[$i]->name . ",";
//    if($listout[$i]->ischild == 1)
//         $str .= $listout[$i]->ischild .";";
//    else
//        $str .= 0 .";";
//
//    $str .= "\r\n";
//}

//WRITE TO TEXT
//fwrite($myfile, $oglist);
file_put_contents("testfile.txt", "$oglist", FILE_USE_INCLUDE_PATH);
fclose($myfile);

?>

