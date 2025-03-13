
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

$pi = M_PI;


$roundedPi = round($pi, 2);


echo "<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Число π</title>
</head>
<body>
    <h1>Значение числа π, округлённое до сотых:</h1>
    <p>$roundedPi</p>
</body>
</html>";
?>
</body>
</html>