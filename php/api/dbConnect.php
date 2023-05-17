<?php
    class dbConnect{
        private $server = 'localhost';
        private $dbName = 'react';
        private $user = 'root';
        private $pass = '';
        private $conn;

        public function connect(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=$this->server;dbname=$this->dbName", $this->user, $this->pass);
                $this->conn ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(\Exception $e){
                echo "Connection failed: " . $e->getMessage();
            }

            return $this->conn;
        }
    }