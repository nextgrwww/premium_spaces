var reg_form = `{
    "legend": "New User Registration", "class": "reg_info", "submit":"Sign-up", "reset": "Clear" , "method": "post", "actionScript": "./phpScripts/register.php", "errorAlert": "true", "data": {
        "input1": {"type": "text", "id":"username", "label": "Pick a Login ID", "classes": "col-md-12", "regex": "^[a-zA-Z0-9_]{3,100}$", "error": "The username must be between 8 and 100 characters long and without any special characters", "required": "true"},
        "input2": {"type": "password", "id":"password", "label": "Pick a Password", "regex": "^(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()_\\\\+\\\\-=]).{8,}$", "error": "Choose a complex password with atleast one uppercase, lowercase, number and special character", "classes": "col-md-6", "required": "true"},
        "input3": {"type": "password", "id":"confirmpass", "label": "Confirm Password", "classes": "col-md-6", "required": "true", "error": "Password in both fields does not match"},
        "input4": {"type": "text", "id":"firstname", "label": "Enter First Name", "classes": "col-md-6", "regex": "^[a-zA-Z ]{2,16}$", "error": "The name field can only contain capital or small alphabetic characters", "required": "true"},
        "input5": {"type": "text", "id":"lastname", "label": "Enter Last Name", "classes": "col-md-6", "regex": "^[a-zA-Z ]{2,16}$", "error": "The name field can only contain capital or small alphabetic characters", "required": "true"},
        "input6": {"type": "text", "id":"company_name", "label": "Enter Company Name (optional)", "classes": "col-md-12", "regex": "^[a-zA-Z ]{2,100}$", "error": "The company name field can only contain capital or small alphabetic characters and space"},
        "input7": {"type": "radiogroup", "id":"gender", "label": "Select Gender", "values": [{"id": "male", "label": "Male"}, {"id": "female", "label": "Female"}], "classes": "col-md-12", "required": "true"},
        "input8": {"type": "radiogroup", "id":"user_type", "label": "Sign-up As Bidder or Client: ", "values": [{"id": "bidder", "label": "Bidder"}, {"id": "client", "label": "Client"}], "classes": "col-md-12", "required": "true"},
        "input9": {"type": "text", "id":"cnic", "label": "Enter Your CNIC Number", "classes": "col-md-12", "regex": "^[0-9]{13}$", "error": "The CNIC should consist of 13 numeric digits and without a hyphen (-)", "required": "true"},
        "input10": {"type": "date", "id": "dob", "label": "Select your date of birth", "classes": "col-md-12", "required": "true"},
        "input11": {"type": "email", "id": "email", "label": "Enter your email..", "classes": "col-md-12", "regex": "^[a-zA-Z0-9_]{3,100}\\\\@[a-zA-Z0-9\\\\.]{2,20}\\\\.[a-zA-Z0-9]{1,10}$", "error": "The email address should be in the form of johndoe@abc.xyz", "required": "true"},
        "input12": {"type": "text", "id": "cell_no", "label": "Enter your mobile number", "classes": "col-md-12", "regex": "^03[0-4][0-9]{8}$", "error": "The phone number should be in the form of 03121234567", "required": "true"},
        "input13": {"type": "text", "id": "street_address", "label": "Enter your street address and house number (if any)", "classes": "col-md-12", "required": "true"},
        "input14":{"type": "selection", "id":"city", "label": "Select Your City:", "values": [{"label": "Gujranwla", "value":"gujranwala"}, {"label": "Lahore", "value":"lahore"}, {"label": "Karachi", "value":"karachi"}, {"label": "Islamabad", "value":"islamabad"}], "classes": "col-md-6", "required": "true"},
        "input15": {"type": "selection", "id":"country", "label": "Select Your Country: ", "values": [{"label": "Pakistan", "value":"pakistan"}, {"label": "Afghanistan", "value":"afghanistan"}, {"label": "India", "value":"india"}], "classes": "col-md-6", "required": "true"}
    }
}`;

var login_form = `{
    "legend": "Sign-in", "class": "login_credentials", "submit":"Login", "reset": "Clear", "method": "post", "actionScript": "./phpScripts/loginScript.php", "data": {
        "input1": {"type": "text", "id":"username", "label": "Enter Your Username", "classes": "col-md-12", "regex": "^[a-zA-Z0-9_]{3,100}$", "error": "The username is not valid", "required": "true", "localStore":"builders_bid"},
        "input2": {"type": "password", "id": "password", "label": "Enter Password", "classes": "col-md-12", "regex": "^.{8,20}$", "error": "The username and/or password does not match", "required": "true", "localStore":"builders_bid"},
        "input3": {"type": "checkgroup", "id": "remember", "label": "", "values": [{"id": "remember_check", "label": "Remember me"}], "classes": "col-md-12"}
    }
}`;

var navbar_items_visitor = `{
    "brand": "<i class='fas fa-home'></i> Home", "id": "mainNavBar", "data":{
        "item1": {"label": "<i class='fas fa-box-open'> </i>Find a Service", "link":"#!"},
        "item2": {"label": "Login", "link": "login.php"},
        "item3": {"label": "Register", "link": "registration.php"},
        "item4": {"label": "About Us", "link":"#!"}
    }
}`;

var navbar_items_admin = `{
    "brand": "<i class='fas fa-home'></i> Home", "id": "mainNavBar", "data":{
        "item1": {"label": "<i class='fas fa-box-open'></i> Find a Service", "link":"#!"},
        "item3": {"label": "<i class='fas fa-user-shield'></i> Member's Area", "link": "members_area.php"},
        "item4": {"label": "<i class='fas fa-address-card'></i> About Us", "link":"#!"},
        "item5": {"label": "<i class='fas fa-address-card'></i> Logout", "link":"#!", "onclick": "logout('builders_bid')"}
    }
}`;

var navbar_items_bidder = `{
    "brand": "<i class='fas fa-home'></i> Home", "id": "mainNavBar", "data":{
        "item1": {"label": "<i class='fas fa-box-open'></i> Find a Service", "link":"#!"},
        "item3": {"label": "<i class='fas fa-user-shield'></i> Member's Area", "link": "members_area.php"},
        "item4": {"label": "<i class='fas fa-address-card'></i> About Us", "link":"#!"},
        "item5": {"label": "<i class='fas fa-address-card'></i> Logout", "link":"#!", "onclick": "logout('builders_bid')"}
    }
}`;

var navbar_items_client = `{
    "brand": "<i class='fas fa-home'></i> Home", "id": "mainNavBar", "data":{
        "item1": {"label": "<i class='fas fa-box-open'></i> Find a Service", "link":"#!"},
        "item3": {"label": "<i class='fas fa-box-open'></i> My Orders", "link": "my_orders.php"},
        "item4": {"label": "<i class='fas fa-address-card'></i> About Us", "link":"#!"},
        "item5": {"label": "<i class='fas fa-address-card'></i> Logout", "link":"#!", "onclick": "logout('builders_bid')"}
    }
}`;

var carouselItems = `{
    "id": "featuredCarousel", "data":{
        "item1":{"imgUrl": "uploads/postImages/carousel1.png", "title": "Find Building Projects & Services", "textBody": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur optio delectus ipsa dolores accusamus fuga eos, minima beatae error quasi unde ratione quae deleniti natus sapiente nemo, ipsum illum voluptatibus!", "category": "", "link": "#!"},
        "item2":{"imgUrl": "uploads/postImages/carousel2.png", "title": "Find Construction Services", "textBody": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur optio delectus ipsa dolores accusamus fuga eos, minima beatae error quasi unde ratione quae deleniti natus sapiente nemo, ipsum illum voluptatibus!", "category": "", "link": "#!"},
        "item3":{"imgUrl": "uploads/postImages/carousel3.png", "title": "Find Repair Services", "textBody": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur optio delectus ipsa dolores accusamus fuga eos, minima beatae error quasi unde ratione quae deleniti natus sapiente nemo, ipsum illum voluptatibus!", "category": "", "link": "#!"}
    }
}`;

var featuredItems = `{
    "id": "featuredItems", "class": "featuredItem", "data":{
        "item1":{"imgUrl":"uploads/postImages/p1.png", "service_name":"Immel Construction Services", "category":"Building", "details":"With an unwavering focus on quality, our bidders provides general construction, project management, estimating, and skilled craftsmanship to exceed expectations on every job. And, we do this in every industry we serve. Our sustainable construction practices make this platform an easy to work with - and easy to trust - commercial construction company."},
        "item2":{"imgUrl":"uploads/postImages/p2.png", "service_name":"Dawood Constructions", "category":"Construction", "details":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quidem consequuntur quod atque ex molestiae ab non molestias ducimus in saepe ea eligendi, itaque eos odio delectus. Excepturi, facilis vel?"},
        "item3":{"imgUrl":"uploads/postImages/p3.png", "service_name":"Sohail Builders", "category":"Maintenance", "details":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quidem consequuntur quod atque ex molestiae ab non molestias ducimus in saepe ea eligendi, itaque eos odio delectus. Excepturi, facilis vel?"},
        "item4":{"imgUrl":"uploads/postImages/p4.png", "service_name":"Waseem Material & Construction", "category":"Restroration", "details":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quidem consequuntur quod atque ex molestiae ab non molestias ducimus in saepe ea eligendi, itaque eos odio delectus. Excepturi, facilis vel?"},
        "item5":{"imgUrl":"uploads/postImages/p5.png", "service_name":"AK & K Builders", "category":"New Houses", "details":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quidem consequuntur quod atque ex molestiae ab non molestias ducimus in saepe ea eligendi, itaque eos odio delectus. Excepturi, facilis vel?"},
        "item6":{"imgUrl":"uploads/postImages/p6.png", "service_name":"Tie Ed", "category":"Construction & Repair", "details":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quidem consequuntur quod atque ex molestiae ab non molestias ducimus in saepe ea eligendi, itaque eos odio delectus. Excepturi, facilis vel?"}
    }
}`;