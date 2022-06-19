<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$sql = "SELECT * FROM palabra INNER JOIN tema ON palabra.tema_id = tema.id GROUP BY palabra.tema_id";
$c = new Mysqli("localhost","root","","juego_ahorcado");
$c->query("SET NAMES utf8");
$resultado = $c->query($sql);
?>
<h2>Palabras</h2>
<form action="#" method="POST">
<select name="tema_id" > 
<option value="-1" selected='selected' >Elige un tema</option>
<?php
while ($row = $resultado->fetch_assoc()) {
    echo "<option value=\"".$row["tema_id"]."\">".$row["tema"]."</option>";
}
?>
</select>
<button type="submit" name="elegir">Elegir</button>
</form>
<?php
$tema_id = isset($_POST['tema_id']) ? $_POST['tema_id']  : -1;
$c = new Mysqli("localhost","root","","juego_ahorcado");
$sql = "SELECT * FROM palabra WHERE tema_id = $tema_id";
$c->query("SET NAMES utf8");
$resultado = $c->query($sql);
    echo "<table border='1'>
<tr>
<th>Id</th>
<th>Palabra</th>
<th>Descripción</th>
<th>Id Tema</th>
<th>Borrar</th>
</tr>";
while ($row = $resultado->fetch_assoc()) {
 echo "<tr>";
echo "<td>" . $row['id'] . "</td>";
echo "<td>" . $row['palabra'] . "</td>";
echo "<td>" . $row['descripcion'] . "</td>";
echo "<td>" . $row['tema_id'] . "</td>";
echo "<td>";
echo "<a class='btn' href='./borra_palabra.php?id=" .$row['id']."'>Borrar</a>";
echo "</td>";
echo "</tr>";
}
echo "</table>";
?>
</div>
<br>
    <button onclick="document.getElementById('crear').style.display='block'">Añadir nueva palabra</button>
    <div id="crear" style="display:none">
    <h3>Nueva Palabra</h3>
    <form action="./inserta_palabra.php" method="POST">
        Palabra  <input type="text" name="palabra" id="palabra"><br>
        Descripción  <input type="text" name="descripcion" id="descripcion"><br>
        Id tema  <input type="text" name="tema_id" id="tema_id"><br><br>
        <input type="submit" name="insertar" value="Insertar">
    </form>
    </div>