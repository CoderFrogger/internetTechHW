<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    include 'dbConnect.php';

    $objDB = new dbConnect();
    $conn = $objDB->connect();

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $statement = $conn->prepare('SELECT * FROM users');
        $statement->execute();
        $users = $statement->fetchAll(PDO::FETCH_ASSOC);
        header('Content-Type: application/json');
        echo json_encode($users);
    }

    else if ($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        $id = $_GET['id'];

        $statement = $conn->prepare('DELETE FROM users WHERE id =:id');
        $statement->bindParam(':id', $id);
        $statement->execute();

        if ($statement->rowCount() > 0) {
            echo "User with ID $id has been deleted.";
        } else {
            echo "User with ID $id was not found.";
        }
    }
?>