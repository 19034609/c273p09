<?php

include "dbFunctions.php";

$id = $_GET['id'];

$query = "SELECT * FROM statistics where id = $id";
$result = mysqli_query($link, $query);

$response = mysqli_fetch_assoc($result);

mysqli_close($link);
echo json_encode($response);

?>

