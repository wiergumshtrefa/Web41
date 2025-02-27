<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $number1 = $_POST['number1'];
    $number2 = $_POST['number2'];
    $number3 = $_POST['number3'];
    $number4 = $_POST['number4'];

    echo "$number1<br>";
    echo "$number2<br>";
    echo "$number3<br>";
    echo "$number4<br>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Ввод чисел</title>
</head>
<body>
    <form method="post">
        <label for="number1">Введите первое число:</label>
        <input type="text" id="number1" name="number1" required><br>

        <label for="number2">Введите второе число:</label>
        <input type="text" id="number2" name="number2" required><br>

        <label for="number3">Введите третье число:</label>
        <input type="text" id="number3" name="number3" required><br>

        <label for="number4">Введите четвертое число:</label>
        <input type="text" id="number4" name="number4" required><br>

        <input type="submit" value="Отправить">
    </form>
</body>
</html>