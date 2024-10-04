<?php

    include_once("connection.php");

    // Getting query parameters from JSONData
    $username = $_REQUEST['username'];
    $passwordHash = $_REQUEST['passwordHash'];

    // Create query string
    $dbquery = "SELECT * from `users` WHERE `users`.`username` = \"$username\" AND `users`.`passwordHash` = \"$passwordHash\";";
    
    // Run query and get result set
    $result = $conn->query($dbquery);

    if($result){
        $resultArray = mysqli_fetch_assoc($result);
        $returnJSON = json_encode($resultArray);
        echo $returnJSON;
    }
    else{
        var_dump($result);
    }
    
?>