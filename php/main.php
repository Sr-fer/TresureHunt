<?php
class UserRequest{
    public $Name;
    public $Time;
    public $Clicks;
        function __construct($Name,$Time,$Clicks){
            $this->Name=$Name;
            $this->Time=$Time;
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

    $consult = "SELECT * FROM ranking";
    $result = $conection->query($consult);
    $users = array();
        if($result->num_rows>0){
            while($row = $result->fetch_assoc()){
            $aux_user = new UserRequest($row["name"],$row["time"],$row["clicks"]);
            array_push($users,$aux_user);
        }
        }else{
            print"Error: ".$conection->error;
        }
        echo json_encode($users);
?>