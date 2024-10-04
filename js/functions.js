/*======================**
** JSON2form() Function **
**======================*/

 /*
 Function to perform the following functions
    -> Take JSONStr string and convert to JSON
    -> Generate form code according to JSON
    -> Validate form on submissiono
    -> Convert form inputs to JSONData
    -> Send JSONData from form input to specified PHP script in JSON
    -> Receive response from PHP script in JSON form and convert to JSO
    -> Send appropriate sections of response to Console.log and modal dialog
*/

function JSON2form(JSONStr, formSelector){
    // Select form element
    var formElement = document.querySelector(formSelector);
    // Parse JSON string passed
    var JSO = JSON.parse(JSONStr);
    // Initialize an innerHTML String to pass to the form later as innerHTML
    var innerHTMLString = "";

    // Add initial form code to string
    innerHTMLString = `<fieldset>`;
    innerHTMLString += `<div class="card-header col-12">`;
        innerHTMLString += `<legend>${JSO.legend}</legend>`;
    innerHTMLString += `</div>`;
    innerHTMLString += `<div class="card-body row p-5">`;

    // Loop through form elements calling each element inPut
    for(inPut in JSO.data){
        // Routine for generating text field if input type is text
        if(JSO.data[inPut].type=="text"){
            innerHTMLString += (`
            <div class="md-form ${(JSO.data[inPut].classes)?JSO.data[inPut].classes:""}">
                <label for="${JSO.data[inPut].id}" id="${JSO.data[inPut].id}Lbl" class="${JSO.class}Lbl">${JSO.data[inPut].label}</label>
                <input type="${JSO.data[inPut].type}" id="${JSO.data[inPut].id}" ${(JSO.data[inPut].regex)? "aria-regex=\"" + JSO.data[inPut].regex + "\"":""} ${(JSO.data[inPut].localStore)?"aria-localStore=\"" + JSO.data[inPut].localStore + "\"":""} class="${JSO.class} form-control" ${(JSO.data[inPut].required)?"required":""}>
                <small style="display: none;" class="text-danger error">${(JSO.data[inPut].error)?(JSO.data[inPut].error):""}</small>
            </div>
            `);
        }
        // Routine for generating password field if input type is password
        else if(JSO.data[inPut].type=="password"){
            innerHTMLString += (`
            <div class="md-form ${(JSO.data[inPut].classes)?JSO.data[inPut].classes:""}">
                <label for="${JSO.data[inPut].id}" id="${JSO.data[inPut].id}Lbl" class="${JSO.class}Lbl">${JSO.data[inPut].label}</label>
                <input type="${JSO.data[inPut].type}" id="${JSO.data[inPut].id}" ${(JSO.data[inPut].regex)? "aria-regex=\"" + JSO.data[inPut].regex + "\"":""} ${(JSO.data[inPut].localStore)?"aria-localStore=\"" + JSO.data[inPut].localStore + "\"":""} class="${JSO.class} form-control" ${(JSO.data[inPut].required)?"required":""}>
                <small style="display: none;" class="text-danger error">${(JSO.data[inPut].error)?(JSO.data[inPut].error):""}</small>
            </div>
            `);
        }
        // Routine for generating radio groups if input type is radiogroup
        else if(JSO.data[inPut].type=="radiogroup"){
            innerHTMLString += `
            <div class="${JSO.data[inPut].classes} row my-3">
            <label id="${JSO.data[inPut].id}Lbl col" class="${JSO.class}Lbl">${JSO.data[inPut].label}</label>
            `;
            JSO.data[inPut].values.forEach((thisRadio)=>{
                innerHTMLString += `
                <div class="form-check-inline col justify-content-center">
                    <input type="radio" id="${thisRadio.id}" name="${JSO.data[inPut].id}" class="form-check-input col" ${(JSO.data[inPut].required)?"required":""}/>
                    <label for="${thisRadio.id}" id="${thisRadio.id}Lbl" class="${JSO.class}Lbl form-check-label">${thisRadio.label}</label>
                </div>`;
            });
            innerHTMLString += `</div>`;
        }
        // Routine for generating checkbox groups if input type is checkgroup
        else if(JSO.data[inPut].type=="checkgroup"){
            innerHTMLString += `
            <div class="${JSO.data[inPut].classes} row my-3">
            <label id="${JSO.data[inPut].id}Lbl col" class="${JSO.class}Lbl">${JSO.data[inPut].label}</label>
            `;
            JSO.data[inPut].values.forEach((thisCheck)=>{
                innerHTMLString += `
                <div class="form-check-inline col justify-content-center">
                    <input type="checkbox" id="${thisCheck.id}" name="${JSO.data[inPut].id}" class="form-check-input" ${(JSO.data[inPut].required)?"required":""}/>
                    <label for="${thisCheck.id}" id="${thisCheck.id}Lbl" class="${JSO.class}Lbl form-check-label">${thisCheck.label}</label>
                </div>`;
            });
            innerHTMLString += "</div>";
        }
        // Routine for generating select dropdown if input type is selection
        else if(JSO.data[inPut].type=="selection"){
                innerHTMLString += `
                <div class="${JSO.data[inPut].classes}">
                <label style="display: none;" for= "${JSO.data[inPut].id}" id="${JSO.data[inPut].id}Lbl" class="${JSO.class}Lbl">${JSO.data[inPut].label}</label>    
                `;
                innerHTMLString += `<select id="${JSO.data[inPut].id}" name="${JSO.data[inPut].id}" class="mdb-select md-form col" ${(JSO.data[inPut].required)?"required":""}>`;
                innerHTMLString += `<option value="" disabled selected>${JSO.data[inPut].label}</option>`;
                JSO.data[inPut].values.forEach((thisValue)=>{
                    innerHTMLString += `
                        <option value="${thisValue.value}">${thisValue.label}</option>
                    `;
                });
                innerHTMLString += `</select>`;
                innerHTMLString += `</div>`;
        }
        else{
            innerHTMLString += (`
            <div class="md-form ${(JSO.data[inPut].classes)?JSO.data[inPut].classes:""}">
                <label for="${JSO.data[inPut].id}" id="${JSO.data[inPut].id}Lbl" class="${JSO.class}Lbl">${JSO.data[inPut].label}</label>
                <input type="${JSO.data[inPut].type}" id="${JSO.data[inPut].id}" ${(JSO.data[inPut].regex)? "aria-regex=\"" + JSO.data[inPut].regex + "\"":""} ${(JSO.data[inPut].localStore)?"aria-localStore=\"" + JSO.data[inPut].localStore + "\"":""} class="${JSO.class} form-control" ${(JSO.data[inPut].required)?"required":""}>
                <small style="display: none;" class="text-danger error">${(JSO.data[inPut].error)?(JSO.data[inPut].error):""}</small>
            </div>
            `);
        }
    } // End of form generating loop

    // Ending code for generating form
    innerHTMLString += "</fieldset>";
    innerHTMLString += `</div>`;
    innerHTMLString += `<div class="card-footer">`;
        innerHTMLString += `<div class="btn-group">`;
        // Adding reset and submit buttons to form footer
            innerHTMLString += `<button type='reset' class='btn btn-md btn-danger' id='${JSO.class}_cancel'>${JSO.reset}</button>`;
            innerHTMLString += `<button type='submit' class='btn btn-md btn-primary' id='${JSO.class}_submit'>${JSO.submit}</button>`;
        innerHTMLString += `</div>`;
    innerHTMLString += `</div">`;

    // Putting all the generated form innerHTML code in the form
    formElement.innerHTML = innerHTMLString;

    // Initially setting the form validation to true before checking for validation
    var formValid = true;

    // Adding an on submit routine
    formElement.addEventListener("submit", (event)=>{
        // Initially setting form validation variable to true before checking for validation
        formValid = true;

        // Initialize variable for JSON that will contain all the inputs fetched from the form
        var returnJSON = "{";
        
        // Prevent default submit behavior to allow ajax to process information
        event.preventDefault();

        // Loop through all inputs and select elements, getting and storing each value to JSON
        document.querySelectorAll("input, select").forEach((thisInput)=>{
            
            // Routine for getting all the radio inputs and storing in JSON string
            if(thisInput.getAttribute("type")=="radio"){
                if(thisInput.checked)
                returnJSON += "\"" + thisInput.name + "\": \"" + thisInput.id + "\", ";
            }
            // Routine for getting all the checkbox inputs and storing in JSON string
            else if(thisInput.getAttribute("type")=="checkbox"){
                // Select all checkboxes with current name
                var checkedBoxes = [];
                // iterate through each checkbox, check if it is checked and then add to array
                document.getElementsByName(thisInput.name).forEach((thisCheckbox)=>{
                    if(thisCheckbox.checked){
                        checkedBoxes.push(thisCheckbox.id);
                    }
                });
                // stringify array
                checkedBoxes = JSON.stringify(checkedBoxes);
                
                returnJSON += `"${thisInput.name}": ${checkedBoxes}, `;
            }
            // Routine for getting all the text and password inputs, validating and storing it into JSON string
            else if(thisInput.getAttribute("type")=="text" || thisInput.getAttribute("type")=="password"){
                // If input type is text store it into JSON as simple text
                if(thisInput.getAttribute("type")=="text") {
                    returnJSON += "\"" + thisInput.id + "\": \"" + thisInput.value + "\", ";
                    if(thisInput.getAttribute("aria-localStore")) {
                        localStorage.setItem(thisInput.getAttribute("aria-localStore") + "/" + thisInput.id, thisInput.value);
                        
                        
                    };
                }
                // If input type is password, store it into JSON as md5 hash of password
                if(thisInput.getAttribute("type")=="password") {
                    returnJSON += "\"" + thisInput.id + "Hash" + "\": \"" + $.md5(thisInput.value) + "\", ";
                    if(thisInput.getAttribute("aria-localStore")) {
                        localStorage.setItem(thisInput.getAttribute("aria-localStore") + "/" + thisInput.id + "Hash", $.md5(thisInput.value));
                        
                        
                    }
                }
                // Creating a regex variable from input aria-regex for validation
                var thisRegex = new RegExp(thisInput.getAttribute("aria-regex"));
                // Checking if validation aria-regex exist and if the value matches, if so hide error
                if(thisInput.getAttribute("aria-regex") && thisInput.value.match(thisRegex)){
                    
                    $(thisInput.parentElement.querySelector("small.error")).hide();
                }
                // Checking if validation aria-regex exists and if the value does not match, if so show error and set validation to false
                else if(thisInput.getAttribute("aria-regex") && !thisInput.value.match(thisRegex)){
                    formValid = false;
                    
                    $(thisInput.parentElement.querySelector("small.error")).show(500);
                }
            }
            // General Routine for all the other input types
            else{
                returnJSON += "\"" + thisInput.id + "\": \"" + thisInput.value + "\", ";
            }
        }); // End of validation and input collection routine

        // Getting rid of trailing comma in JSON
        returnJSON = returnJSON.replace(/,.?$/mi,"");
        // Closing off JSON string
        returnJSON += "}";

        // If there are two password fields in form, compare both. If both don't match set validation to false and show error on second password field, otherwise hide error
        if(formElement.querySelectorAll("input[type=password]").length==2){
            
            
            if(formElement.querySelectorAll("input[type=password]")[0].value != formElement.querySelectorAll("input[type=password]")[1].value) {
                $(formElement.querySelectorAll("input[type=password]")[1].parentElement.querySelector(".error")).show(500);
                formValid = false;
            }
            else{
                $(formElement.querySelectorAll("input[type=password]")[1].parentElement.querySelector(".error")).hide(500);
            }
        }

        
        
        // If form is valid then process form accordint to the process() function
        if(formValid) process(returnJSON, JSO.actionScript);
        // If form is not valid. Show modal with error messages
        else {
                console.error("Invalid information entered. Please check and correct errors");
                if(JSO.errorAlert==true){
                document.querySelector("#alertModal").querySelector(".modal-title").innerText = "Error!!!";
                document.querySelector("#alertModal").querySelector(".modal-title").classList.add("text-danger");
                document.querySelector("#alertModal").querySelector(".modal-body").innerText = "Invalid information entered. Please check and correct errors";
                $("#alertModal").modal("show");
            }
        }
        
    }); // End of submit event routies

    // Form process() routine that: 
        // takes JSONData from form inputs
        // sends JSONData to php scripts
        // receive response from php scripts
        // decodes JSON resopnse
        // takes appropriate sections of response and inserts them into modal dialogs and console.log messages
    var process = (JSONData, phpScript)=>{
        
        // Create an XMLHttpRequest() object
        var XHR = new XMLHttpRequest();
        // Open the XHR with POST method and for the relevant php script
        XHR.open("POST", phpScript);
        // Check for state change
        XHR.onreadystatechange = ()=>{
            // If response is ready then parse it
            if(XHR.readyState == 4 && XHR.status == 200){
                console.log(XHR.responseText);
                
                var responseJSO = JSON.parse(XHR.responseText);
                
                // if return message exists set it into the modal and console.log it
                if (responseJSO.return_message && responseJSO.return_message!=""){
                    document.querySelector("#alertModal").querySelector(".modal-title").innerText = responseJSO.return_title;
                    if(responseJSO.return_type=="success") {
                        document.querySelector("#alertModal").querySelector(".modal-title").classList.add("text-success");
                    }
                    else if(responseJSO.return_type) document.querySelector("#alertModal").querySelector(".modal-title").classList.add("text-danger");
                    else document.querySelector("#alertModal").querySelector(".modal-title").classList.add("text-primary");

                    document.querySelector("#alertModal").querySelector(".modal-body").innerText = responseJSO.return_message;

                    $(document.querySelector("#alertModal")).modal("show");

                    if (responseJSO.return_type=="success" && responseJSO.return_title=="Logged In") window.location.reload();
                }
            }
        }
        // Set XHR's request header
        XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // Send JSON data to the PHP script
        XHR.send("JSONData=" + JSONData);

    } // End of form process() script

} // End of JSON2form() routine

/*======================================**
** Authentication for already logged in **
**======================================*/
var onLoadAuthentication = (domainName)=>{
    var returnValue = true;
    if(localStorage.getItem(domainName + "/email") && localStorage.getItem(domainName + "/passwordHash")){
        var email = localStorage.getItem(domainName + "/email");
        var passwordHash = localStorage.getItem(domainName + "/passwordHash");
        
        var JSONData = `{"email": "${email}", "passwordHash": "${passwordHash}"}`;
        var XHR = new XMLHttpRequest();
        XHR.open("POST", "./phpScripts/loginScript.php", false);
        XHR.onreadystatechange = ()=>{
            if(XHR.readyState == 4 && XHR.status == 200){
                
                
                var JSO = JSON.parse(XHR.responseText);
                
                if(JSO.return_type=="success") {
                    
                    localStorage.setItem(domainName + "/email", email);
                    localStorage.setItem(domainName + "/passwordHash", passwordHash);
                    returnValue = true;
                }
                if(JSO.return_type=="error") {
                    localStorage.removeItem(domainName + "/email");
                    localStorage.removeItem(domainName + "/passwordHash");
                    
                    returnValue = false;
                }
            }
        }
        XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XHR.send("JSONData=" + JSONData);
    }
    else{
        
        returnValue = false;
    }
    return returnValue;
}


/*************************
** Simple Logout Module **
*************************/

var logout = (domainName)=>{
    localStorage.removeItem(domainName + "/email");
    localStorage.removeItem(domainName + "/passwordHash");
    window.location.reload();
}

/************************
** Post Listing Module **
************************/

var generateListings = (JSONStr, containerSelector) => {
    var JSO = JSON.parse(JSONStr);
    
    var containerElement = document.querySelector(containerSelector);
    var innerHTMLString = "";
    for(post in JSO){
        innerHTMLString += `
        <div class="p-3 col-12">
            
            <div class="card col-12 flex-row flex-wrap p-0">
                <div class="card-header border-0 p-0" style="width: 25vh;">
                    <img src="${JSO[post].img}" width="100%" alt="">
                </div>
                <div class="card-block p-2">
                    <h4 class="card-title">${JSO[post].title}</h4>
                    <div class="text-link text-primary"><a href="?category=${JSO[post].category_id}">${JSO[post].category}</a></div>
                    <p class="card-text">${JSO[post].description}</p>
                </div>
                <div class="w-100"></div>
                <div class="card-footer w-100 text-muted p-1 justify-content-end text-right">
                    <a href="post_details?postid=${JSO[post].id}" class="btn btn-outline-primary btn-sm">Details</a>
                </div>
            </div>
        </div>
        `;
    }
    containerElement.innerHTML += innerHTMLString;
    
}

/*==================**
** Navbar Generator **
**==================*/

var JSON2navbar = (JSONStr, navSelector)=>{
    var navItem = document.querySelector(navSelector);
    var JSO = JSON.parse(JSONStr);
    var innerHTMLString = "";
    
    innerHTMLString += `<a class="navbar-brand" href="index.php">${JSO.brand}</a>`;

    innerHTMLString += `
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#${JSO.id}" aria-controls="${JSO.id}" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="${JSO.id}">
    <ul class="navbar-nav mr-auto">
    `;
    for(item in JSO.data){
        if(JSO.data[item].submenu){
            innerHTMLString += `
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="${JSO.data[item].id}" href="${JSO.data[item].link}" data-toggle="dropdown">${JSO.data[item].label}</a>
                <div class="dropdown-menu dropdown-primary">`;

                for(subitem in JSO.data[item].submenu){
                    innerHTMLString += `<a class="dropdown-item" href="${JSO.data[item].submenu[subitem].link}">${JSO.data[item].submenu[subitem].label}</a>`;
                }

            innerHTMLString +=`
                </div>
            </li>
            `;
        }
        else{
            innerHTMLString += `
            <li class="nav-item">
                <a class="nav-link" href="${JSO.data[item].link}" ${(JSO.data[item].onclick)?"onclick=\"" + JSO.data[item].onclick + "\"":""}>${JSO.data[item].label}</a>
            </li>
            `;
        }
    }
    innerHTMLString += `
    </ul>
    </div>
    `;
    
    navItem.innerHTML = innerHTMLString;
    navItem.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");
    
}

/*==================**
** User Roll Getter **
**==================*/

var getUserRole = (domainName)=>{
    var returnValue;
    var email = localStorage.getItem(domainName + "/email");
    var passwordHash = localStorage.getItem(domainName + "/passwordHash");
    if(!email) returnValue = {email: "visitor", user_type: 0, user_type_title: "visitor"};
    else{
        var XHR = new XMLHttpRequest();
        XHR.open("POST", "./phpScripts/getRole.php", false);
        XHR.onreadystatechange = ()=>{
            if(XHR.readyState == 4 && XHR.status == 200){
                
                var JSO = JSON.parse(XHR.responseText);
                returnValue = JSO;
            }
        }
        XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XHR.send("email=" + email + "&passwordHash=" + passwordHash);
    }
    return returnValue;
}

/*====================**
** Carousel Generator **
**====================*/

var JSON2Carousel = (JSONStr, carouselContainerSelector)=>{
    var carouselContainer = document.querySelector(carouselContainerSelector);
    JSO = JSON.parse(JSONStr);
    var innerHTMLString = "";
    innerHTMLString += `
    
    <!--Carousel Wrapper-->
    <div id="${JSO.id}" class="carousel slide carousel-fade" data-ride="carousel">
        <!--Indicators-->
        <ol class="carousel-indicators">`;
        var carouselIndex = 0;
        for(item in JSO.data){
            innerHTMLString += `<li data-target="#${JSO.id}" data-slide-to="${carouselIndex}" ${(carouselIndex==0)?"class=\"active\"":""}></li>`;
            carouselIndex++;
        }

        innerHTMLString += `</ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">`;

        carouselIndex = 0;
        for(item in JSO.data){
            innerHTMLString += `
            
            <div class="carousel-item ${(carouselIndex==0)?"active":""}">
                <div class="view">
                <img class="d-block w-100" src="${JSO.data[item].imgUrl}"
                    alt="${JSO.data[item].title}">
                <div class="mask rgba-black-light"></div>
                </div>
                <div class="carousel-caption">
                <h4>${JSO.data[item].title}</h4>
                <a class="btn btn-primary" href="serviceDetails.php?${JSO.data[item].link}">Service Details</a>
                
                </div>
            </div>
            
            `;
            carouselIndex++;
        }

            /*<div class="carousel-item active">
                <div class="view">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide">
                <div class="mask rgba-black-light"></div>
                </div>
                <div class="carousel-caption">
                <h3 class="h3-responsive">Light mask</h3>
                <p>First text</p>
                </div>
            </div>

            </div><div class="carousel-item">
                <!--Mask color-->
                <div class="view">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide">
                <div class="mask rgba-black-strong"></div>
                </div>
                <div class="carousel-caption">
                <h3 class="h3-responsive">Strong mask</h3>
                <p>Secondary text</p>
                </div>
            </div>

            <div class="carousel-item">
                <!--Mask color-->
                <div class="view">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Third slide">
                <div class="mask rgba-black-slight"></div>
                </div>
                <div class="carousel-caption">
                <h3 class="h3-responsive">Slight mask</h3>
                <p>Third text</p>
                </div>
            </div> */
        innerHTMLString += `
        </div>
        <!--/.Slides-->

        <!--Controls-->
        <a class="carousel-control-prev" href="#${JSO.id}" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#${JSO.id}" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->
    
    `;
    carouselContainer.innerHTML = innerHTMLString;
}


/*========================
** Add User Search Form **
========================*/
var addUserSearch = ()=>{
    var innerHTMLString = "";
    innerHTMLString += `
    
    
        <div class="md-form bg-dark my-0">
        <input class="form-control mr-sm-2 px-3" type="text" placeholder="Search Users" aria-label="Search" id="search_term">

        <!--Accordion wrapper-->
        <div class="accordion md-accordion" id="sortFilter" role="tablist" aria-multiselectable="true">

        <!-- Accordion card -->
        <div class="card">

        <!-- Card header -->
        <div class="card-header py-1 bg-dark mt-0" role="tab" id="headingOne1">
            <a data-toggle="collapse" data-parent="#sortFilter" href="#collapseOne1" aria-expanded="true"
            aria-controls="collapseOne1">
            <div class="m-0 p-0 text-light text-sm">
                Sort & Filter <i class="fas fa-angle-down rotate-icon"></i>
            </div>
            </a>
        </div>

        <!-- Card body -->
        <div id="collapseOne1" class="collapse" role="tabpanel" aria-labelledby="headingOne1"
            data-parent="#sortFilter">
            <div class="card-body row">
                <select id="user_type_title" name="user_type_title" class="browser-default custom-select mdb-select md-form col-lg">
                    <option disabled selected value="">Filter by User Type</option>
                    <option value="">All</option>
                    <option value="admin">Administrator</option>
                    <option value="client">Client</option>
                    <option value="bidder">Bidder</option>
                </select>
                <select id="sort" name="sort" class="browser-default custom-select mdb-select md-form col-lg">
                    <option disabled selected value="email">Sort Users By</option>
                    <option value="email">email</option>
                    <option value="full_name">Full Name</option>
                    <option value="join_on">Date joined</option>
                    <option value="user_type_title">User Type</option>

                </select>
                <select id="sortDirection" name="sortDirection" class="browser-default custom-select mdb-select md-form col-lg">
                    <option disabled selected value="asc">Sort Direction</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <button type="submit" class="btn btn-default btn-sm">Search</button>
        </div>
        </div>
        <!-- Accordion card -->
        
        </div>
        <!-- Accordion wrapper -->

        </div>

    `;

    
    document.querySelector(".searchForm").setAttribute("id", "searchUser");
    document.querySelector(".searchForm").innerHTML = innerHTMLString;


    document.querySelector("#searchUser").addEventListener("submit", (event)=>{
        event.preventDefault();
        console.log("Search function ran");
        var search_term = document.querySelector("#search_term").value;
        var user_type = document.querySelector("#user_type_title").value;
        var sort = document.querySelector("#sort").value;
        var direction = document.querySelector("#sortDirection").value;
        XHR = new XMLHttpRequest();
        XHR.open("POST", "./phpScripts/list_users.php");
    
    
    
        XHR.onreadystatechange = ()=>{
                if(XHR.readyState == 4 && XHR.status == 200){
                console.log("Response Text of user search: ", XHR.responseText);
                var JSO = JSON.parse(XHR.responseText);
                console.log("After Parsing: ", JSO);
                var innerHTMLString = "";
                if(JSO.error) {
                    innerHTMLString += "<h4>No Records Found</h4>";
                }
                else{
                    for(user in JSO){
                        innerHTMLString += `
                        <div class="p-3 col-12">
                            
                            <div class="card col-12 flex-row flex-wrap p-0">
                                <div class="card-header border-0 p-0" style="width: 25vh;">
                                    <img src="${(JSO[user].display_pic_url)?JSO[user].display_pic_url:"./img/svg/user-solid.svg"}" width="100%" alt="">
                                </div>
                                <div class="card-block p-2">
                                    <h4 class="card-title">${JSO[user].full_name}</h4>
                                    <div class="text-link text-primary"><a href="user_details.php?email=${JSO[user].email}">@${JSO[user].email}</a></div>
                                    <p class="card-text">${JSO[user].user_type_title}</p>
                                </div>
                                <div class="w-100"></div>
                                <div class="card-footer w-100 text-muted p-1 justify-content-end text-right">
                                    <a href="user_details.php?email=${JSO[user].email}" class="btn btn-outline-primary btn-sm">Details</a>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
                document.querySelector("#userList").innerHTML = innerHTMLString;
            }
        }
        XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XHR.send("search_term=" + search_term + "&user_type_title=" + user_type + "&sort=" + sort + "&direction=" + direction);
    });

}


var featuredListing = (JSONStr, containerSelector)=>{
    var JSO = JSON.parse(JSONStr);
    var container = document.querySelector(containerSelector);
    var innerHTMLString = "";
    for(item in JSO.data){
        innerHTMLString += `
    
        <!-- Card -->
            <div class="col-lg-4 col-md-6 col-sm-12 p-3 ${(JSO.class)?"class=\"" + JSO.class + "\"":""}">
                <div class="card">
                    <!-- Card image -->
                    <img class="card-img-top" src="${JSO.data[item].imgUrl}" alt="Card image cap">
                
                    <!-- Card content -->
                    <div class="card-body">
                
                    <!-- Title -->
                    <h4 class="card-title"><a>${JSO.data[item].service_name}</a></h4>
                    <!-- Text -->
                    <p class="card-text">Category: ${JSO.data[item].category}</p>
                    <p class="card-text">Price per unit: ${JSO.data[item].details}</p>
                    <!-- Button -->
                    <a href="service.php?${JSO.data[item].link}" class="btn btn-primary">Details</a>
                
                    </div>
                
                </div>
            </div>
        <!-- Card -->
    
        `;
    }
    container.innerHTML = innerHTMLString;
}

/*==================================**
** User Search $ Listings Generator **
**==================================*/

