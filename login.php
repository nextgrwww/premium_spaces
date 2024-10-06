<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/mdb.min.css">
    <link rel="shortcut icon" href="./img/mono.png" type="image/png">
    <!-- Plugin file -->
    <link rel="stylesheet" href="./css/addons/datatables.min.css">
    <link rel="stylesheet" href="css/compiled-4.19.2.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Login - Builders Bid</title>
</head>
<body>
    <?php include "header.php"; ?>
    <article class="">
        <form id="login_form" class="card col-lg-5 mx-auto mt-3 p-0 mb-5">

        </form>
        
    </article>
    
    <?php include "footer.php"; ?>
    
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.md5.js"></script>
    <script type="text/javascript" src="js/popper.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <!-- <script type="module" src="js/material-design-bootstrap.js"></script> -->
    <!-- Plugin file -->
    <script src="./js/addons/datatables.min.js"></script>
    <script src="js/JSONData.js"></script>
    <script src="js/functions.js"></script>
    <script>
        var login_result = onLoadAuthentication("premium_spaces");
        console.log("Login result: " + login_result);
        if(login_result == true) {
            console.log("Already Logged in");
            if(window.location.href.match(/\?(.*?)=(.*?)$/)){
                if(window.location.href.match(/\?(.*?)=(.*?)$/)[1]=='redirect') var redirect = (window.location.href.match(/\?(.*?)=(.*?)$/)[2]);
            }
            if(redirect) window.location.href=redirect;
            else window.location.href="index.php";
        }
        else {
            JSON2form(login_form, "#login_form");
        }
        JSON2navbar(navbar_items_visitor, "#mainNav");
        // Material Select Initialization
        $(document).ready(function() {
            // $('.mdb-select').materialSelect();
        });
    </script>
</body>
</html>
