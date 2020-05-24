<?php

if(isset($_POST['submit'])){
$to = "your@rmail"; 

$from = $_POST['email'];
$first_name = $_POST['name'];
$tel = $_POST['tel'];


$message = "Имя: $first_name" . "\n\n" . "Имейл: $from" . "\n\n" . "Телефон: $tel";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// $page = "index.html";
// header("Refresh: 5; URL=\\"" . $page . "\\"");
header("Location:http://portfolio.com/");

}

?>