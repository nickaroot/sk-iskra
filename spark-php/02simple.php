<?php

header('Content-Type: text/html; charset=utf-8;');

include_once 'Classes/PHPExcel/IOFactory.php';

// загружаем документ excel.xls 
$objPHPExcel = PHPExcel_IOFactory::load("mk.xlsx");
 
for ($z=0; $z < 4; $z++) { 
  // выбираем активный лист для работы (начинаются с нуля)
  $objPHPExcel->setActiveSheetIndex($z);
  $aSheet = $objPHPExcel->getActiveSheet();

  $k = 0;
   
  // получаем итератор строки и проходим по нему циклом
  foreach($aSheet->getRowIterator() as $row){

      $k++;
   
      // получаем итератор ячеек текущей строки
     $cellIterator = $row->getCellIterator();
    
    $i = 0;

     // проходим циклом по ячейкам строки
     foreach($cellIterator as $cell){

        $i++;
           // выводим значения

        $c = '';

        if (true) {
          $c = $cell->getValue();

           if (true) {

            $dbh = new pdo( 'mysql:host=89.253.236.103;dbname=admin_temp;charset=utf8',
                          'user_base',
                          'ygi657egs',
                          array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

            $sth2 = $dbh->prepare("INSERT INTO `cards` (`uid`, `table_id`, `column_id`, `row_id`, `value`) VALUES (:uid, :table_id, :column_id, :row_id, :value)");
            try {
                $sth2->execute(array(
                    ":uid" => intval("1"),
                    ":table_id" => (intval($z)+1),
                    ":column_id" => intval($i),
                    ":row_id" => intval($k),
                    ":value" => $c
                ));
                print_r(json_encode(array('success' => true, 'message' => 'Current item is inserted')));
            } catch (PDOException $ex) {
                print_r(json_encode(array('success' => false, 'message' => 'Unable to insert item')));
            }

            $sth2 = $dbh->prepare("UPDATE `cards` SET `value` = :value WHERE `uid` = :uid AND `table_id` = :table_id AND `column_id` = :column_id AND `row_id` = :row_id");
            try {
                $sth2->execute(array(
                    ":uid" => intval("1"),
                    ":table_id" => (intval($z)+1),
                    ":column_id" => intval($i),
                    ":row_id" => intval($k),
                    ":value" => $c
                ));
                print_r(json_encode(array('success' => true, 'message' => 'Current item is updated')));
            } catch (PDOException $ex) {
                print_r(json_encode(array('success' => false, 'message' => 'Unable to update item')));
            }
          }
        }
     }
  }
}
