<!DOCTYPE html>
<html lang="-pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Faviicon-->
        <link rel="shortcut icon" href="../img/faviicon.png" type="image/x-icon">
        <!--CSS-->
        <link rel="stylesheet" href="../css/index.css">
        <!--Bootstrap icon-->
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
        <title>Login-in</title>
    </head>
    <?php
        if(isset($_POST['submit'])){
            header('location: ../API/consultUser.php?nome='.$_POST['nome'].'&email='.$_POST['email'].'&senha='.$_POST['senha']);            
        }   
    
       
    ?>

    <body>

        <div class="video-background">
            <video autoplay loop muted src="../video/background.mp4">

            </video>

            <form class=formLogin method="post">
                <h3>Login</h3>

                <div class="conteiner-iconUser">
                    <img src="../img/user.png" alt="icon-user">
                </div>

                <hr>
                <label for="nome">Name</label>
                <input type="text" required placeholder="Your name " id="nome" name="nome">

                <label for="email">Email</label>
                <input type="email" required placeholder="Your best Email" name="email" id="email" autocomplete="username">

                <label for="senha">Password</label>
                <input type="password" placeholder="Password" required id="senha" name="senha" autocomplete="new-password"> 

                <div class="social-media">

                </div>
                <a href="../">Create account</a>
                <input type="submit" value="Entrar" name="submit">

                <div class="social-media">
                    <div id="buttonDiv"></div>
                </div>
                
            </form>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="../js/getURLParams.js"></script>
    </body>
</html>