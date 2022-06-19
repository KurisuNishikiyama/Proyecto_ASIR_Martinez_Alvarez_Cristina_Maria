<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Location: temas.php");

if (isset($_GET['id'])){
    $id = $_GET['id'];
    require("conexion.inc.php");
    $c = new mysqli($host,$user,$pass,$bd);
    $sql = "DELETE FROM tema WHERE id = $id";
    $salida = array("error"=>true);
    $c->query($sql);
    if ($c->affected_rows > 0){
        $salida['error'] = false;
    }
    echo json_encode($salida);
}
?>