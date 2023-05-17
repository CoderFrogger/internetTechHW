<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'dbConnect.php';

$objDB = new dbConnect();
$conn = $objDB->connect();

$user =file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO users (id, username, email, password) VALUES (null, :username, :email, :password)";
        $statement = $conn->prepare($sql);
        $statement->bindParam(':username', $user->username);
        $statement->bindParam(':email', $user->email);
        $statement->bindParam(':password', $user->password);

        if ($statement->execute()){
            $response = ['status' => 1, 'message' => 'User created successfully'];
        } else{
            $response = ['status' => 0, 'message' => 'User creation failed'];
        }
        break;
}