<?php

include_once("connection.php");

// Store local variables
$search_term = $_REQUEST["search_term"];
$user_type = $_REQUEST["user_type"];
$sort = $_REQUEST["sort"];
$direction = $_REQUEST["direction"];

// Build query
$dbquery = "SELECT * FROM user_list";
if($search_term != "" && $user_type != ""){
    $dbquery .=  " WHERE (username RLIKE '$search_term' OR full_name RLIKE '$search_term')";
    $dbquery .=  " AND user_type = '$user_type'";
}
else if($search_term != "" && $user_type == ""){
    $dbquery .=  " WHERE (username RLIKE '$search_term' OR full_name RLIKE '$search_term')";
}
else if($search_term == "" && $user_type != ""){
    $dbquery .=  " WHERE user_type = \"$user_type\"";
}
else{
    $dbquery .= "";
}

$dbquery .= " ORDER BY $sort $direction;";

// echo $dbquery;

// Run Query
$result = $conn->query($dbquery);

// Get array from results
$resultArray = array();
if($result){
    while ($row = mysqli_fetch_assoc($result)){
        $resultArray[$row['username']] = $row;
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