<?php

$nome = $_GET['nome'];
if(!isset($_SESSION)){
    session_start();
    
    $_SESSION['logged'] = true;
    $_SESSION['nome'] = $nome;
    header('location:../views/clima.php');
    
  
}



