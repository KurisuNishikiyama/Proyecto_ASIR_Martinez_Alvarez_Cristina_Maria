<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$c = new Mysqli("localhost","root","","juego_ahorcado");
$c->query("SET NAMES utf8");
$resultado = mysqli_query($c,"SELECT * FROM tema ORDER BY tema");
echo "<h1>Temas<h1>
<table border='1'>
<tr>
<th>Id</th>
<th>Tema</th>
<th>Borrar</th>
</tr>";

while($row = mysqli_fetch_array($resultado))
{
echo "<tr>";
echo "<td>" . $row['id'] . "</td>";
echo "<td>" . $row['tema'] . "</td>";
echo "<td>";
echo "<a class='btn' href='./borra_tema.php?id=" .$row['id']."'>Borrar</a>";
echo "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($c);
?>
    <br>
    <button onclick="document.getElementById('crear').style.display='block'">Añadir nuevo tema</button>
    <div id="crear" style="display:none">
    <h3>Nuevo Tema</h3>
    <form action="./inserta_tema.php" method="POST">
        Tema <input type="text" name="tema" id="tema"><br><br>
        <input type="submit" name="insertar" value="Insertar">
    </form>
    </div>