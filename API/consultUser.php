<?php

$nome       = $_GET['nome'];
$email      = $_GET['email'];
$password   = $_GET['senha'];



$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_PORT => "4001",
  CURLOPT_URL => "http://localhost:4001/read",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{
    \n\t\"nome\": \"$nome\",
    \n  \"email\" : \"$email\",
    \n\t\"password\":\"$password\"\n
  }",
  CURLOPT_HTTPHEADER => [
    "Content-Type: application/json"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {

  switch ($response){
      case 'nome incorreto':
        header('location: ../views/login.php?error=nome%20incorreto&email='.$email.'&senha='.$password);
        break;
      case 'Email incorreto':
        header('location: ../views/login.php?error=email%20incorreto&nome='.$nome.'&senha='.$password);        
        break;
      case 'Senha incorreta':
        header('location: ../views/login.php?error=senha%20incorreta&nome='.$nome.'&email='.$email);  
        break;
      default:
      header('location: ../controller/newSession.php?nome='.$nome);
  }

}