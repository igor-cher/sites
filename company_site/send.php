<?php


if(isset($_POST['submit'])){
$to = "chernobay.6349@gmail.com"; 
//$to = "chernobay.6349@gmail.com";
$from = $_POST['email'];
$first_name = $_POST['first_name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";

$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// $page = "index.html";
// header("Refresh: 5; URL=\\"" . $page . "\\"");
$headers  = "Content-type: text/html; charset=utf-8 \r\n";

}

?>