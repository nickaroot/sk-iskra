<?php

header('Content-Type: text/html; charset=utf-8;');

include_once 'Classes/PHPExcel/IOFactory.php';

// загружаем документ excel.xls 
$objPHPExcel = PHPExcel_IOFactory::load("mk.xlsx");
 
// выбираем активный лист для работы (начинаются с нуля)
$objPHPExcel->setActiveSheetIndex(0);
$aSheet = $objPHPExcel->getActiveSheet();
 
echo '<table cellpadding="0" cellspacing="0">';

$k = 0;
 
// получаем итератор строки и проходим по нему циклом
foreach($aSheet->getRowIterator() as $row){
    echo "<tr>";

    $k++;
 
    // получаем итератор ячеек текущей строки
   $cellIterator = $row->getCellIterator();
 	
 	$i = 0;

   // проходим циклом по ячейкам строки
   foreach($cellIterator as $cell){

   		$i++;
         // выводим значения

   		$c = '';

   		if ($i == 6 && $k == 18) {
   			$c = $cell->getCalculatedValue();

   			 if (!empty($c)) {
   			 	echo 'OK';

   			 	$dbh = new pdo( 'mysql:host=89.253.236.103;dbname=admin_temp;charset=utf8',
                        'user_base',
                        'ygi657egs',
                        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

   			 	$sth2 = $dbh->prepare("INSERT INTO `cards` (`uid`, `table_id`, `column_id`, `row_id`, `value`) VALUES (:uid, :table_id, :column_id, :row_id, :value)");
	            try {
	                $sth2->execute(array(
	                    ":uid" => intval("1"),
	                    ":table_id" => intval("1"),
	                    ":column_id" => intval("6"),
	                    ":row_id" => intval("18"),
	                    ":value" => intval($c)
	                ));
	                die(json_encode(array('success' => true, 'message' => 'Current item is inserted')));
	            } catch (PDOException $ex) {
	                die(json_encode(array('success' => false, 'message' => 'Unable to insert item')));
	            }
   			 }
   		}
   }
 
   echo "</tr>";
}
 
echo '</table>';
