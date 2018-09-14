<?php
/* DEVELOPER TESTS */
var_dump($_POST["list"]);

//OPEN FILE ang get 'list'
$myfile = fopen("textfile.txt", "r+") or die ("Just die");

//get original list and updated list
$oglist = fread($myfile, filesize("textfile.txt"));
$updatedList = $_POST["list"];

//decode lists, if empty create it to avoid errors
if (empty($oglist))
{
    $jsonOglist = array();
}
else
    $jsonOglist = json_decode($oglist);

$jsonlist = json_decode($updatedList);

//merge updated list to old list
$jsonOglist = array_merge($jsonOglist, $jsonlist);

//encode the list back
$oglist = json_encode($jsonOglist);

//WRITE TO TEXT
file_put_contents("textfile.txt", "$oglist", FILE_USE_INCLUDE_PATH);
fclose($myfile);
?>

