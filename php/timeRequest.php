<?php
class UserRequest{
    public $Name;
    public $Time;
        function __construct($Name,$Time){
            $this->Name=$Name;
            $this->Time=$Time;
        }
}

    $serverName = "localhost";
    $user = "root";
    $password = "";
    $database = "ranking";
    $conection = new mysqli($serverName,$user,$password,$database);

        if($conection->connect_error){
            die("Failed: ". $conection->connect_error);
        }   

    $consult = "SELECT name, time FROM ranking ORDER BY time ASC";
    $result = $conection->query($consult);
    $users = array();
        if($result->num_rows>0){
            while($row = $result->fetch_assoc()){
            $aux_user = new UserRequest($row["name"],$row["time"]);
            array_push($users,$aux_user);
        }
        }else{
            print"Error: ".$conection->error;
        }
        echo json_encode($users);
?>