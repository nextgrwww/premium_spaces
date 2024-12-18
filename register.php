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
    <title>Signup - Builders Bid</title>
</head>
<!-- This page allows visitors to get registered to be able to sign-up for newsletters and notifications through email. It also offers ways to recover password through email, if required. Back-end code for recovery is also complete and implemented using PHPMailer library -->
<body>
    <?php include "header.php"; ?>
    <aside></aside>
    <article class="">
        <form id="registration_form" class="card col-lg-10 mx-auto mt-3 p-0"></form>
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
            JSON2form(reg_form, "#registration_form");
        }
        // Material Select Initialization
        $(document).ready(function() {
            // $('.mdb-select').materialSelect();
        });
        JSON2navbar(navbar_items_visitor, "#mainNav");
    </script>
</body>
</html>


