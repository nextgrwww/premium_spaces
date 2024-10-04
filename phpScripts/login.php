<?php

include_once("connection.php");

// Getting query parameters from JSONData
$JSONData = json_decode($_REQUEST['JSONData']);
$JSONData = (array)$JSONData;
// var_dump($_REQUEST);
// var_dump($JSONData);
$username = $JSONData["username"];
$passwordHash = $JSONData['passwordHash'];

// Creating query string
$dbquery = "SELECT * FROM $dbtable WHERE username = '$username' AND passwordHash = '$passwordHash'";

// Running query string and stroring results
$result = $conn->query($dbquery);

// Create an array to store return values
$return_array = ["query" => $dbquery, "return_title" => "", "return_message" => "", "return_type" => ""];

// Check if result returned any rows
if($result->num_rows > 0){
    // Store results in case of something is returned
    $return_array["return_title"] = "Logged In";
    $return_array["return_message"] = "The username and password are valid.";
    $return_array["return_type"] = "success";
}
else{
    // Store results in case of something is returned
    $return_array["return_title"] = "Operation Failed with $result->num_rows number of rows";
    $return_array["return_message"] = "The username and password did not match.";
    $return_array["return_type"] = "error";
}

// Encoding associative array into JSON for returning
$return_JSON = json_encode($return_array);

// Echo back the $return_JSON
echo $return_JSON;
?>