<?php
$c = new Mysqli("localhost","root","","juego_ahorcado");
$c->query("SET NAMES utf8");
$sql = "SELECT * FROM tema ORDER BY tema";
echo json_encode($c->query($sql)->fetch_all(MYSQLI_ASSOC));
?>