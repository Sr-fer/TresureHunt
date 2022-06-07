<?php
class UserUpload{
    public $Name;
    public $Time;
    public $Clicks;
        function __construct($Name,$Time,$Clicks){
            $this->Name=$Name;
            $this->Time=$Time;
            $this->Clicks=$Clicks;
        }
}
$user1 = new UserUpload($_POST["name"], $_POST["time"], $_POST["clicks"]);
//$user1 = new UserUpload($_GET["name"], $_GET["time"], $_GET["clicks"]);

$serverName = "localhost";
$user = "root";
$password = "";
$database = "ranking";
$conection = new mysqli($serverName,$user,$password,$database);

if($conection->connect_error){
    die("Failed: ". $conection->connect_error);
}   

echo "Conectado correctamente";
echo "<br>";
$insert = "INSERT INTO ranking(name, clicks, time) VALUES('$user1->Name', $user1->Clicks, '$user1->Time')";
if($conection->query($insert) == TRUE){
echo "Inserción realizada con éxito";
}else{
echo "Error al insertar los valores: ".$conection->error;
}
?>