<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Location: temas.php");

if(isset($_POST['insertar']))
{
  $tema = $_POST['tema'];
  require("conexion.inc.php");
  $c = new mysqli($host,$user,$pass,$bd);
  $sql = "INSERT into tema (tema) VALUES ('$tema')";
  $salida = array("error"=>true,"id"=>-1);
  if ($c->query($sql) === TRUE) {
    $salida["error"] = false;
    $salida["id"] = $c->insert_id;
  } else {
    $salida["error"] = true;
  }
  echo json_encode($salida);
}
?>