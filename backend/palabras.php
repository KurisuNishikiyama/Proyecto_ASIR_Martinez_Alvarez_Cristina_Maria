<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

if (isset($_GET['tema'])){
    $sql = "SELECT * FROM palabra WHERE tema_id = ".$_GET['tema'];
}else{
    $sql = "select * from PALABRA";
}
$c = new Mysqli("localhost","root","","juego_ahorcado");
$c->query("SET NAMES utf8");
echo json_encode($c->query($sql)->fetch_all(MYSQLI_ASSOC));
?>