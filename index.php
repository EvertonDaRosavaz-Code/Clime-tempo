<!DOCTYPE html>
<html lang="-pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Faviicon-->
        <link rel="shortcut icon" href="img/faviicon.png" type="image/x-icon">
        <!--CSS-->
        <link rel="stylesheet" href="css/index.css">
        <title>Login-in</title>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
    </head>
   
    <?php
        if(isset($_POST['submit'])){
            header('location: ./API/createUser.php?nome='.$_POST['nome'].'&email='.$_POST['email'].'&senha='.$_POST['senha'].'&confirmSenha='.$_POST['Confimsenha'] );            
        }

    ?>

    <body>

        <div class="video-background">
           <video autoplay loop muted src="video/background.mp4">

           </video>

            <form class=formLogin method="post" >
                <h3>Create acoont</h3>

                <div class="conteiner-iconUser">
                   <img src="img/user.png" alt="icon-user">
                </div>
                <hr>
                <label for="nome">Name</label>
                <input  type="text" required placeholder="Your name" id="nome" name="nome" value="<?php echo $nomeGoogle ?? '' ?>">
                
                <label for="email">Email</label>
                <input type="email" autocomplete="username" placeholder="Your best Email" name="email" id="email" value=" <?php echo $emailGoogle ?? ''  ?>">
                
                <label for="senha">Password</label>
                <input type="password" placeholder="Password" autocomplete="new-password"  required id="senha" name="senha">

                <label for="senha">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" autocomplete="new-password"  required id="Confirmsenha" name="Confimsenha">
                
                <a href="views/login.php">Login</a>
                <input type="submit" value="Register" id = "inBtn" name="submit">
            </form>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="js/createAcoont.js" ></script>
    
    </body>
   
</html>
