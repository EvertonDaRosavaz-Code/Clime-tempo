<!DOCTYPE html>
<html lang="-pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Fiviicon-->
        <link rel="shortcut icon" href="img/faviicon.png" type="image/x-icon">
        <!--CSS-->
        <link rel="stylesheet" href="css/index.css">
        <!--Bootstrap icon-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
        <title>Login-in</title>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
    </head>
   
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
                <input  type="text" required placeholder="Your name " id="nome" name="nome">
                
                <label for="email">Email</label>
                <input type="email" placeholder="Your best Email" name="email" id="email">
                
                <label for="senha">Password</label>
                <input type="password" placeholder="Password"  required id="senha" name="senha">

                <label for="senha">Confirm Password</label>
                <input type="password" placeholder="Confirm Password"  required id="Confirmsenha" name="Confimsenha">
                
                <div class="social-media">

                </div>
                <a href="views/login.php">Login</a>
                <input type="submit" value="Entrar" id = "inBtn" name="submit">
                <div id="buttonDiv"></div> 
            </form>
        </div>
        <script src="js/google.js"></script>
    </body>
   
</html>