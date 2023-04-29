<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <!--CSS-->
    <link rel="stylesheet" href="../css/estilo.css">
    <!--icon-->
    <link rel="shortcut icon" href="../img/faviicon.png" type="image">
    <title>Clima</title>
</head>

<?php

include('../controller/getSessino.php');

?>
<body>
    <header>
        <nav>
            <h2>Hello, <?php echo $_SESSION['nome'] ?></h2>
            
            <div class="time">
                <span id="hrs">00</span>
                <span>:</span>
                <span id="min">00</span>
            </div>
            
            <div class="user">
                <img src="../img/user.png" alt="icon-user">
                <a href="../controller/endSession.php">Exit</a>
            </div>
        </nav>
    </header>

    <section class="main">
    
        <form>
             <input type="text" placeholder="City" name="cidade" id="cidade" >
             <input type="text" placeholder="State" name="estado" id="estado">
             <input type="text" placeholder="Country" name="pais" id="pais">

             <input type="button" value="Search" id="Btn">
        </form>
    </section>

    <section class="info" id="conteinetInfo">

        <div class="conteinerLoader" id="conteinerLoader"> 
            <div class="c-loader"></div>
        </div>

        <div class="temperatura" id="box">
            <span>
                <i class="bi bi-thermometer-half"></i>:
                <span id="temperatura"></span>
             </span>

        </div>

        <div class="humidade" id="box">
            <span>
                <i class="bi bi-moisture"></i>:
                <span id="humidade" ></span>
            </span>
        </div>

        <div class="descriTemperatura " id="box">
            <span>
                <i class="bi bi-pencil-square"></i>:
               <span id="descriTemperatura" ></span>
            </span>
        </div>

        <div class="velocidadeVento" id="box">
         <span>
            <i class="bi bi-wind"></i>:
            <span id="velocidadeVento"></span>
        </span>
        </div>

        <div class="dayWeew" id="box">
            <span>
                <i class="bi bi-calendar-week"></i>:
               <span id="week"></span>
            </span>
        </div>

        <div class="contry" id="box">
            <span>
                <i class="bi bi-globe-europe-africa"></i>:
               <span id="country" ></span>
            </span>
        </div>

    </section>

    
    <script src="../js/time.js"></script>
    <script src="../js/clima.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>