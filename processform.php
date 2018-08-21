<?php
$name = $_POST['goalName'];
$fp = fopen("formentry.txt","a");
$savestring = $goalName . "n";
fwrite($fp, $savestring);
fclose($fp);
print "<h1>Your data has been saved!"</h1>
?>
