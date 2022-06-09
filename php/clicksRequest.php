<?php
class UserRequestClicks{
    public $Name;
    public $Clicks;
        function __construct($Name,$Clicks){
            $this->Name=$Name;
            $this->Clicks=$Clicks;
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

    $consult = "SELECT name, clicks FROM ranking ORDER BY clicks ASC";
    $result = $conection->query($consult);
    $users = array();
        if($result->num_rows>0){
            while($row = $result->fetch_assoc()){
            $aux_user = new UserRequestClicks($row["name"],$row["clicks"]);
            array_push($users,$aux_user);
        }
        }else{
            print"Error: ".$conection->error;
        }
        echo json_encode($users);
?>