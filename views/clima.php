<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Faviicon -->
        <link rel="shortcut icon" href="../img/faviicon.png" type="image/x-icon">
        <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
        <!--CSS-->
        <link rel="stylesheet" href="../css/tempo.css">
        <title>Tempo</title>
    </head>
<?php

/*include getSession*/
//include('../controller/getSessino.php');

?>

    <body>
        <header>
            <div class="conteiner">
                <input type="text" placeholder="Your City" id="input" required>
                <input type="button" value="Search" id="buscar" onclick="ClickBtn()">
            </div>

            <div class="conteinerUser">
                <span><i class="bi bi-person"></i></span>
                <span> Hello, user</span>
                <a href="../controller/endSession.php">Sair</a>
            </div>
        </header>

       
        <section>
            <div class="conteiner" id="infoTempoConteiner">
                <!--Loader-->
                    <div class="conteinerLoader" id="conteinerLoader"> 
                        <div class="c-loader"></div>
                    </div>
                <!--Loader-->
                <div class="Conteinercity" id="nameCity">
                    <h3 id="nameCity">Name of City</h3>
                </div>

                <div class="conteinerIMG" id="conteinerIMG">
                   <img id="iconClima" alt="icon-clima">
                </div>
               
                <div class="conteiterInfo" id="conteiterInfo">
                    
                    <div class="temperatura Weather">
                        <span><i class="bi bi-thermometer-half"></i></span>
                        <h4 id="nameTemperatura"></h4>
                    </div>


                    <div class="humidade Weather ">
                        <span><i class="bi bi-moisture"></i></span>
                        <h4 id="nameHumidade"></h4>
                    </div>

                    <div class="descricaoTemperatura Weather">
                        <span><i class="bi bi-cloud"></i></span>
                        <h4 id="nameDescription"></h4>
                    </div>

                    <div class="VelodoVento Weather">
                        <span><i class="bi bi-wind"></i></span>
                        <h4 id="nameSpeedWind"></h4>
                    </div>

                    <div class="Dayofweek Weather">
                        <span><i class="bi bi-calendar"></i></span>
                        <h4 id="DayofWeek" ></h4>
                    </div>

                    <div class="pais Weather">
                        <span><i class="bi bi-geo-alt"></i></span>
                        <h4 id="nameContry"></h4>
                    </div>
                </div>
            </div>
        </section>
    </body>
    <script src="../js/clima.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</html>
