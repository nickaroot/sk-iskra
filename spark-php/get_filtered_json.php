<?php

header('Content-Type: text/html; charset=utf-8;');
header('Access-Control-Allow-Origin: *');

if (isset($_GET['uid'])) {

    $uid = intval($_GET['uid']);

    try {
        $dbh = new pdo( 'mysql:host=89.253.236.103;dbname=admin_temp;charset=utf8',
                        'user_base',
                        'ygi657egs',
                        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        $sth = $dbh->prepare("SELECT * FROM items WHERE uid = ?"); // Достаем карточку пользователя

        $items = array();

        if ($sth->execute(array($uid))) {
            while ($row = $sth->fetch()) {
                $items[$row['uid']][$row['table_id']][$row['row_id']] = true;
            }
        }

        $sth2 = $dbh->prepare("SELECT * FROM cards WHERE uid = ?"); // Достаем карточку пользователя

        $tables = array();

        if ($sth2->execute(array($uid))) {
            while ($row = $sth2->fetch()) {

                if (isset($items[$row['uid']][$row['table_id']][$row['row_id']]) OR ($row['row_id'] == 0 AND $row['column_id'] == 0)) {
                    $tables[intval($row['table_id'])][intval($row['row_id'])][intval($row['column_id'])] = $row['value'];
                }
            }
        }

        if (empty($tables)) {
            die(json_encode(array('success' => false, 'message' => 'Database response is empty')));
        }

        $newTables = array();

        foreach ($tables as $tKey => $table) {
            $tName = $table[0][0];
            unset($table[0]);

            $newTable = array();

            foreach ($table as $rKey => $row) {

                $rName = "";
                $newRows = array();

                foreach ($row as $cKey => $column) {

                    if ($cKey == 1) {
                        $rName = $column;
                    } else {
                        $newRows[] = $column;
                    }

                }

                $newTable[$rKey]["name"] = $rName;
                $newTable[$rKey]["values"] = $newRows;
            }

            $newTables[$tKey]["name"] = $tName;
            $newTables[$tKey]["values"] = $newTable;
        }

        echo json_encode(array('success' => true, 'cards' => $newTables));

    }
    catch(PDOException $ex){
        die(json_encode(array('success' => false, 'message' => 'Unable to connect')));
    }
} else {
    die(json_encode(array('success' => false, 'message' => 'Parameter uid not isset')));
}

?>