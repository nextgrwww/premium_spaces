<?php

// Connection Parameters
$dbserver = "localhost";
$dbname = "premium_spaces";
$dbuser = "root";
$dbtable = "users";
$dbpass = "";
// Connection to Database
$conn = new mysqli($dbserver, $dbuser, $dbpass, $dbname);
if($conn->connect_error){
    die("Connection Failed" . $conn->connect_error);
}

?>