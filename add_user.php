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
    <title>Add New User - Builders Bid</title>
</head>
<!-- This page if for adding new users through the admin interface instead of registration, if require. Only admin and management will have access to it, which can be controlled by the authentication module already built in the backend in PHP Scripts -->
<body class="card col-lg-10 col-md-11 mx-auto p-0">
    <?php include "header.php"; ?>
    <!--Carousel Wrapper-->
    <div id="carouselContainer" class="p-0 m-0"></div>
    <!--/.Carousel Wrapper-->
        <div id="page_body" class="card col-lg-10 mx-auto mt-3 p-0"></div>
    <article class="row p-3" id="featuredItems">
        <!-- Card -->
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card">
                <!-- Card image -->
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
            
                <!-- Card content -->
                <div class="card-body">
            
                <!-- Title -->
                <h4 class="card-title"><a>Card title</a></h4>
                <!-- Text -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <!-- Button -->
                <a href="#" class="btn btn-primary">Button</a>
            
                </div>
            
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card">
                <!-- Card image -->
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
            
                <!-- Card content -->
                <div class="card-body">
            
                <!-- Title -->
                <h4 class="card-title"><a>Card title</a></h4>
                <!-- Text -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <!-- Button -->
                <a href="#" class="btn btn-primary">Button</a>
            
                </div>
            
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card">
                <!-- Card image -->
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
            
                <!-- Card content -->
                <div class="card-body">
            
                <!-- Title -->
                <h4 class="card-title"><a>Card title</a></h4>
                <!-- Text -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <!-- Button -->
                <a href="#" class="btn btn-primary">Button</a>
            
                </div>
            
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card">
                <!-- Card image -->
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
            
                <!-- Card content -->
                <div class="card-body">
            
                <!-- Title -->
                <h4 class="card-title"><a>Card title</a></h4>
                <!-- Text -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <!-- Button -->
                <a href="#" class="btn btn-primary">Button</a>
            
                </div>
            
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card">
                <!-- Card image -->
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
            
                <!-- Card content -->
                <div class="card-body">
            
                <!-- Title -->
                <h4 class="card-title"><a>Card title</a></h4>
                <!-- Text -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <!-- Button -->
                <a href="#" class="btn btn-primary">Button</a>
            
                </div>
            
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card">
                <!-- Card image -->
                <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">
            
                <!-- Card content -->
                <div class="card-body">
            
                <!-- Title -->
                <h4 class="card-title"><a>Card title</a></h4>
                <!-- Text -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <!-- Button -->
                <a href="#" class="btn btn-primary">Button</a>
            
                </div>
            
            </div>
        </div>
        <!-- Card -->

        

    </article>

    <?php include "footer.php"; ?>
    
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.md5.js"></script>
    <script type="text/javascript" src="js/popper.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/mdb.min.js"></script>
    

    <!-- Plugin file -->
    <script src="./js/addons/datatables.min.js"></script>
    <script src="js/JSONData.js"></script>
    <script src="js/functions.js"></script>
    <script>

    var userRole = getUserRole("premium_spaces");
    if(userRole){
        console.log("User role detected");
        if(userRole.user_type=="admin"){
            console.log("User role admin detected");
            JSON2navbar(navbar_items_admin, "#mainNav");
        }
        else if(userRole.user_type=="user"){
            console.log("User role \"user\" detected");
            JSON2navbar(navbar_items_user, "#mainNav");
        }
        else{
            console.log("User role visitor detected as: " + userRole.user_type);
            JSON2navbar(navbar_items_visitor, "#mainNav");
        }
    }
    else{
        console.log("User role something else detected as: " + userRole.user_type);
        JSON2navbar(navbar_items_visitor, "#mainNav");
    }

    JSON2Carousel(carouselItems, "#carouselContainer");
    
    // Material Select Initialization
    $(document).ready(function() {
        // $('.mdb-select').materialSelect();
    });

    featuredListing(featuredItems, "#featuredItems");
    </script>
</body>
</html>


