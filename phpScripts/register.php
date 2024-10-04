<?php

include_once("connection.php");

// Create an array to store return values
$return_array = ["query" => "", "return_title" => "", "return_message" => "", "return_type" => ""];

// Getting query parameters from JSONData
$JSONData = json_decode($_POST['JSONData']);
$JSONData = (array)$JSONData;
$username = $JSONData['username'];
$passwordHash = $JSONData['passwordHash'];
$user_type = ($JSONData['user_type']=="admin")?1:($JSONData['user_type']=="client")?2:3;
$approval = 1;

$firstname = $JSONData['firstname'];
$lastname = $JSONData['lastname'];
$company_name = $JSONData['company_name'];
$gender = $JSONData['gender'];
$date_of_birth = $JSONData['dob'];
$email = $JSONData['email'];
$cell_no = $JSONData['cell_no'];
$cnic = $JSONData['cnic'];
$street_address = $JSONData['street_address'];
$city = $JSONData['city'];
$country = $JSONData['country'];

// Create pre-query string
$dbprequery1 = "SELECT * FROM users WHERE `username` = \"$username\"";
$pre_result1 = $conn->query($dbprequery1);
$dbprequery2 = "SELECT * FROM user_info WHERE `username` = \"$username\"";
$pre_result2 = $conn->query($dbprequery2);

if($pre_result1->num_rows || $pre_result2->num_rows){
    $return_array["return_title"] = "Error";
    $return_array["return_message"] = "Username already exists";
    $return_array["query"] = $dbprequery1 . " and " . $dbprequery2;
    $return_array["return_type"] = "error";
}
else{
    // Create query string 1
    $dbquery1 = "INSERT INTO users (`username`, `passwordHash`, `user_type`, `approval`) VALUES (\"$username\", \"$passwordHash\", $user_type, $approval)";

    // Running query string and stroring results
    $result1 = $conn->query($dbquery1);

    // Create query string 2
    $dbquery2 = "INSERT INTO user_info (`username`, `firstname`, `lastname`, `company_name`, `gender`, `date_of_birth`, `email`, `cell_no`, `cnic`, `street_address`, `city`, `country`) VALUES (\"$username\", \"$firstname\", \"$lastname\", \"$company_name\", \"$gender\", \"$date_of_birth\", \"$email\", \"$cell_no\", \"$cnic\", \"$street_address\", \"$city\", \"$country\")";

    // Running query string and stroring results
    $result2 = $conn->query($dbquery2);

    // Check results and update $return_array accordingly
    $return_array = ["query" => $dbquery1 . "\n" . $dbquery2, "return_title" => "print_r", "return_message" => "Query Generated Successfully", "return_type" => "success"];

    if($result1 && $result2) {
        $return_array["return_title"] = "Success";
        $return_array["return_type"] = "success";
    }
    else $return_array["return_title"] = "error";

    // if($result1) $return_array["return_message"] = "Query1 executed successfully ";
    // else $return_array["return_message"] = "Query1 failed to execute ";

    // if($result2) $return_array["return_message"] .= "and Query2 executed successfully.";
    // else $return_array["return_message"] .= "and Query2 failed to execute";

    if($result1 && $result2) $return_array["return_message"] = "User registered successfully";
}

// Encoding associative array into JSON for returning
$return_JSON = json_encode($return_array);

// Echo back the $return_JSON
echo $return_JSON;
?>