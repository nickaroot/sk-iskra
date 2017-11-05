<?php

//
//
//  Изменение данных на отображение
//
//

header('Content-Type: text/html; charset=utf-8;');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');

$data = json_decode($json);

var_dump($json);

if (isset($data->uid)) {

    try {

        $dbh = new pdo( 'mysql:host=89.253.236.103;dbname=admin_temp;charset=utf8',
                        'user_base',
                        'ygi657egs',
                        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        // $sth = $dbh->prepare("SELECT id FROM cards WHERE uid = :uid AND table_id = :table_id AND row_id = :row_id AND column_id = :column_id"); // Достаем карточку пользователя

        // $dataArr = array(
        //     ":uid" => intval($data->uid),
        //     ":table_id" => intval($data->values->table_id),
        //     ":row_id" => intval($data->values->row_id),
        //     ":column_id" => intval($data->values->column_id)
        // );

        // if ($sth->execute($dataArr)) {
        //     $res = $sth->fetchAll();
        //     $cards_id = intval($res[0]["id"]);
        // }

        if ($data->values->checked == true) {
            $sth2 = $dbh->prepare("INSERT INTO `items` (`uid`, `table_id`, `row_id`) VALUES (:uid, :table_id, :row_id)");
            try {
                $sth2->execute(array(
                    ":uid" => intval($data->uid),
                    ":table_id" => intval($data->values->table_id),
                    ":row_id" => intval($data->values->row_id)
                ));
                die(json_encode(array('success' => true, 'message' => 'Current item is inserted')));
            } catch (PDOException $ex) {
                die(json_encode(array('success' => false, 'message' => 'Unable to insert item')));
            }

        } elseif ($data->values->checked == false) {
            $sth2 = $dbh->prepare("DELETE FROM `items` WHERE `table_id` = :table_id AND `row_id` = :row_id");
            try {
                $sth2->execute(array(
                    ":table_id" => intval($data->values->table_id),
                    ":row_id" => intval($data->values->row_id)
                ));
                die(json_encode(array('success' => true, 'message' => 'Current item is deleted')));
            } catch (PDOException $ex) {
                die(json_encode(array('success' => false, 'message' => 'Unable to delete item')));
            }
        }

    } catch (PDOException $ex) {
        die(json_encode(array('success' => false, 'message' => 'Unable to connect')));
    } 
} else {
    die(json_encode(array('success' => false, 'message' => 'Parameter uid not isset')));
}

?>