<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include 'dbConnect.php';

    $objDB = new dbConnect();
    $conn = $objDB->connect();
    $user =file_get_contents('php://input');
    $user = json_decode(file_get_contents('php://input'));

    $statement = $conn->prepare('SELECT password FROM users WHERE username = :username');
    $statement->bindParam(':username', $user->username);
    $statement->execute();

    $row = $statement->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        if ($user->password === $row['password']) {
            $response = ['status' => 1, 'message' => 'User logged in successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Invalid password'];
            http_response_code(401);
        }
    } else {
        $response = ['status' => 0, 'message' => 'User does not exist', 'data' => $row];
        http_response_code(404);
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>
