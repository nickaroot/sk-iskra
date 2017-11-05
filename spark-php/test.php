<?php

header('Content-Type: text/html; charset=utf-8');

try{
    $dbh = new pdo( 'mysql:host=89.253.236.103;dbname=admin_temp;charset=utf8',
                    'user_base',
                    'ygi657egs',
                    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    $sth = $dbh->prepare("SELECT * FROM MK WHERE uid = 1");
    $sth->execute();

    $tables = array();

    /* Извлечение всех оставшихся строк результирующего набора */
    $result = $sth->fetchAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<table border="1">
<?
    foreach ($result as $rowId => $row) {
        $tables[intval($row['table_id'])][intval($row['row_id'])][intval($row['column_id'])] = $row['value'];
    }

    echo "<h1>".$tables[1][0][0]."</h1>"."<br>";

    foreach ($tables[1] as $rKey => $row) {
?>
<tr>
<?
        foreach ($row as $cKey => $column) {
            if ($rKey != 0 && $cKey != 0) {
                echo "<td>".$column."</td>";
            }
        }
?>
</tr>
<?
    }
?>
</table>
</body>
</html>
<?
}
catch(PDOException $ex){
    die(json_encode(array('outcome' => false, 'message' => 'Unable to connect')));
}

?>