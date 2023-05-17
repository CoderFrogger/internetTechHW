<?php
    class dbConnect{
        private $server = 'localhost';
        private $dbName = 'react';
        private $user = 'root';
        private $pass = '';

        public function connect(){
            try{
                $conn = new PDO("mysql:host=$this->server;dbname=$this->dbName", $this->user, $this->pass);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            }catch(\Exception $e){
                echo "Connection failed: " . $e->getMessage();
            }
        }
    }