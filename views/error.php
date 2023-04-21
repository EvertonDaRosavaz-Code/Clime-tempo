<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>

</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    *{
        font-family: 'Poppins', sans-serif;
    }
    
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        flex-direction: column;
        gap :50px;
    }


    section img{
        width: 100%;
        height: 100%;
    }

    section{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>


<?php

    $erro = $_GET['cod'];
?>
<body>
    <header>
        <h2>Error <?php echo $erro; ?> City not found</h2>
    </header>
    <section>
        <img src="../img/computer-troubleshooting-animate.svg" alt="">
    </section>
</body>
</html>