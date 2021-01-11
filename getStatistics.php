<?php

require('dbFunctions.php');

$sql = "SELECT * FROM statistics";
$result = mysqli_query($link, $sql);

while ($row = mysqli_fetch_assoc($result)) {
	$response[] = $row;
}

mysqli_close($link);
echo json_encode($response);

?>

