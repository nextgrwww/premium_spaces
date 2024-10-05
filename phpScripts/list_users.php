<?php

include_once("connection.php");

// Store local variables
// if($_REQUEST["search_term"]) $search_term = $_REQUEST["search_term"];
// if($_REQUEST["user_type"]) $user_type = $_REQUEST["user_type"];
// if($_REQUEST["sort"]) $sort = $_REQUEST["sort"];
// if($_REQUEST["direction"]) $direction = $_REQUEST["direction"];

extract($_REQUEST);

// Build query
$dbquery = "SELECT * FROM users";
if((isset($search_term) && $search_term != "") && (isset($user_type) && $user_type != "")){
    $dbquery .=  " WHERE (email RLIKE '$search_term' OR full_name RLIKE '$search_term')";
    $dbquery .=  " AND user_type = '$user_type'";
}
else if((isset($search_term) && $search_term != "") && (!isset($user_type) || $user_type == "")){
    $dbquery .=  " WHERE (email RLIKE '$search_term' OR full_name RLIKE '$search_term')";
}
else if((!isset($search_term) || $search_term == "") && (isset($user_type) && $user_type != "")){
    $dbquery .=  " WHERE user_type = \"$user_type\"";
}
else{
    $dbquery .= "";
}

if((isset($sort) && $sort!="") && (isset($direction) && $direction!=""))
$dbquery .= " ORDER BY $sort $direction;";

// echo $dbquery;

// Run Query
$result = $conn->query($dbquery);

// Get array from results
$resultArray = array();
if($result){
    while ($row = mysqli_fetch_assoc($result)){
        $resultArray[$row['email']] = $row;
        // array_push($resultArray[], $row);
        // print_r($row);
    }
}
else{
    $resultArray["error"] = "Nothing returned";
    $returnJSON = json_encode($resultArray);
    echo $returnJSON;
}


// $resultArray["dbquery"] = $dbquery;

// Convert Array to JSON & Echo
if($resultArray){
$returnJSON = json_encode($resultArray);
echo $returnJSON;
}
else{
    $resultArray["error"] = "Nothing returned";
    $returnJSON = json_encode($resultArray);
    echo $returnJSON;
}

?>