var reg_form = `{
    "legend": "Get Started..", "class": "reg_info", "submit":"Sign-up", "reset": "Clear" , "method": "post", "actionScript": "./phpScripts/register.php", "errorAlert": "true", "data": {
        "input1": {"id": "email", "type": "text", "label": "Email", "classes": "col-md-12", "regex": "^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$", "error": "Invalid email: Must start with a letter, only contain letters, numbers, dots (.), underscores (_), and have a valid domain (e.g., 'abc.com')", "required": "true"},
        "input2": {"id": "full_name", "type": "text", "label": "Full Name", "classes": "col-md-12", "regex": "^[a-zA-Z]+([ '-][a-zA-Z]+)*$", "error": "Invalid name: Only letters, spaces, and hyphens are allowed.", "required": "true"},
        "input3": {"id": "password", "type": "password", "label": "Choose Password", "classes": "col-md-12", "regex": "^(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*()_\\\\+\\\\-=]).{8,}$", "error": "Choose a complex password with atleast one uppercase, lowercase, number and special character.", "required": "true"},
        "input4": {"id": "confirmpass", "type": "password", "label": "Confirm Password", "classes": "col-md-12", "error": "Password in both fields does not match", "required": "true"},
        "input5": {"id": "mob_no", "type": "text", "label": "Mobile No", "classes": "col-md-12", "regex": "^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$", "error": "Invalid phone number: Enter a valid UK number starting with '+44' or '07'", "required": "true"},
        "input6": {"id": "address", "type": "text", "label": "Street & City Address", "classes": "col-md-12", "regex": "", "error": "Invalid input. Please check and try again. ", "required": "true"},
        "input7": {"id": "county", "type": "text", "label": "County", "classes": "col-md-12", "regex": "^(Bedfordshire|Berkshire|Buckinghamshire|Cambridgeshire|Cheshire|Cornwall|County Durham|Cumbria|Derbyshire|Devon|Dorset|East Sussex|Essex|Gloucestershire|Hampshire|Herefordshire|Hertfordshire|Kent|Lancashire|Leicestershire|Lincolnshire|Middlesex|Norfolk|Northamptonshire|Northumberland|Nottinghamshire|Oxfordshire|Rutland|Shropshire|Somerset|South Yorkshire|Staffordshire|Suffolk|Surrey|Sussex|Warwickshire|West Midlands|West Sussex|Wiltshire|Worcestershire|Yorkshire|Aberdeenshire|Angus|Argyll and Bute|Ayrshire|Banffshire|Berwickshire|Bute|Caithness|Clackmannanshire|Dumfries and Galloway|Dundee|East Lothian|Falkirk|Fife|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney|Perth and Kinross|Renfrewshire|Scottish Borders|Shetland|South Ayrshire|South Lanarkshire|Stirling|West Dunbartonshire|West Lothian|Western Isles|Anglesey|Brecknockshire|Caernarfonshire|Cardiganshire|Carmarthenshire|Clwyd|Denbighshire|Flintshire|Glamorgan|Merionethshire|Monmouthshire|Pembrokeshire|Powys|Radnorshire|South Glamorgan|Wrexham|Antrim|Armagh|Down|Fermanagh|Londonderry|Tyrone)$", "error": "Invalid input: Please enter a valid UK county name", "required": "true"},
        "input8": {"id": "zip_code", "type": "text", "label": "Zip Code", "classes": "col-md-12", "regex": "^([A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2})$", "error": "Invalid postal code: Please enter a valid UK zip code (e.g., 'SW1A 1AA')", "required": "true"}
    }
}`;

var login_form = `{
    "legend": "Sign-in", "class": "login_credentials", "submit":"Login", "reset": "Clear", "method": "post", "actionScript": "./phpScripts/loginScript.php", "data": {
        "input1": {"type": "text", "id":"email", "label": "Enter Your Email", "classes": "col-md-12", "regex": "^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$", "error": "Invalid email: Must start with a letter, only contain letters, numbers, dots (.), underscores (_), and have a valid domain (e.g., 'abc.com')", "required": "true", "localStore":"premium_spaces"},
        "input2": {"type": "password", "id": "password", "label": "Enter Password", "classes": "col-md-12", "regex": "^.{8,20}$", "error": "The username and/or password does not match", "required": "true", "localStore":"premium_spaces"},
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
        "item5": {"label": "<i class='fas fa-address-card'></i> Logout", "link":"#!", "onclick": "logout('premium_spaces')"}
    }
}`;

var navbar_items_bidder = `{
    "brand": "<i class='fas fa-home'></i> Home", "id": "mainNavBar", "data":{
        "item1": {"label": "<i class='fas fa-box-open'></i> Find a Service", "link":"#!"},
        "item3": {"label": "<i class='fas fa-user-shield'></i> Member's Area", "link": "members_area.php"},
        "item4": {"label": "<i class='fas fa-address-card'></i> About Us", "link":"#!"},
        "item5": {"label": "<i class='fas fa-address-card'></i> Logout", "link":"#!", "onclick": "logout('premium_spaces')"}
    }
}`;

var navbar_items_client = `{
    "brand": "<i class='fas fa-home'></i> Home", "id": "mainNavBar", "data":{
        "item1": {"label": "<i class='fas fa-box-open'></i> Find a Service", "link":"#!"},
        "item3": {"label": "<i class='fas fa-box-open'></i> My Orders", "link": "my_orders.php"},
        "item4": {"label": "<i class='fas fa-address-card'></i> About Us", "link":"#!"},
        "item5": {"label": "<i class='fas fa-address-card'></i> Logout", "link":"#!", "onclick": "logout('premium_spaces')"}
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