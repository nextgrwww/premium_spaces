<?php

include_once("connection.php");

// Create an array to store return values
$return_array = ["query" => "", "return_title" => "", "return_message" => "", "return_type" => ""];

// Getting query parameters from JSONData
$JSONData = json_decode($_REQUEST['JSONData']);
$JSONData = (array)$JSONData;

$email = $JSONData['email'];
$full_name = $JSONData['full_name'];
$passwordHash = $JSONData['passwordHash'];
$user_type = $JSONData['user_type'];
$mob_no = $JSONData['mob_no'];
$address = $JSONData['address'];
$county = $JSONData['county'];
$zip_code = $JSONData['zip_code'];
$status = $JSONData['enabled'];

// Create pre-query string to check if the email is already registered
$dbprequery = "SELECT * FROM users WHERE `email` = \"$email\"";
$pre_result = $conn->query($dbprequery1);

if($pre_result1->num_rows || $pre_result2->num_rows){
    $return_array["return_title"] = "Error";
    $return_array["return_message"] = "Email already registered. \nIf you've lost password, try to recover using the \"forgot password\" option";
    $return_array["query"] = $dbprequery;
    $return_array["return_type"] = "error";
}
else{
    // Create query string 1
    $dbquery = "INSERT INTO `users` (`email`, `full_name`, `passwordHash`, `user_type`, `mob_no`, `address`, `county`, `zip_code`, `status`) VALUES (\"$email\", \"$full_name\", \"$passwordHash\", \"$user_type\", \"$mob_no\", \"$address\", \"$county\", \"$zip_code\", \"$status\");";

    // Running query string and stroring results
    $result = $conn->query($dbquery);

    
    if($result) {
        // Check results and update $return_array accordingly
        $return_array = ["query" => $dbquery, "return_title" => "Registration successful", "return_message" => "Registration successful. ", "return_type" => "success"];
    }
    else {
        $return_array["return_title"] = "error";
        $return_array["return_message"] = "Something went wrong";
        $return_array["return_type"] = "error";
        $return_array["query"] = $dbquery;
    }
}

// Encoding associative array into JSON for returning
$return_JSON = json_encode($return_array);

// Echo back the $return_JSON
echo $return_JSON;
?>