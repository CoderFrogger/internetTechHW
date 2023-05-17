<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include 'dbConnect.php';

    $objDB = new dbConnect();
    $conn = $objDB->connect();
    $user =file_get_contents('php://input');
    $user = json_decode(file_get_contents('php://input'));

    $query = "INSERT INTO users (id, username, email, password) VALUES (null, :username, :email, :password)";
    $statement = $conn->prepare($query);
    $statement->bindParam(':username', $user->username);
    $statement->bindParam(':email', $user->email);
    $statement->bindParam(':password', $user->password);

    if ($statement->execute()){
        $response = ['status' => 1, 'message' => 'User created successfully'];
    } else{
        $response = ['status' => 0, 'message' => 'User creation failed'];
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>
