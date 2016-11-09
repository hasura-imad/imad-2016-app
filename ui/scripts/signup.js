var users = [];

// *************** FETCHING DATA FROM DATABASE (NOT A GOOD PRACTICE HERE) ***********************
var ready = false;

var request = new XMLHttpRequest();
var object;

request.onreadystatechange = function() {
    
    if(request.readyState === XMLHttpRequest.DONE) {
        // Take some action
        if(request.status === 200) {
            if(!ready){
                object = JSON.parse(request.responseText);
                for(var i = 0; i < object.length; i++){
                    users.push(object[i].name.toString());
                }
            } else {
                alert(request.responseText);
            }
        }
    }
};

request.open('GET', 'http://akshatbhargava123.imad.hasura-app.io/users', true);
request.send(null);

// **********************************************************************************************

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        
        $(".username").notify(
          "Enter the desired username here.", 
          { position:"right" }
        );
        
        $(".password").notify(
          "Enter the desired password here (8-16 long) .", 
          { position:"right" }
        );
        
        $(document).keypress(function(e) {
            if(e.which == 13) {  // enter pressed

                validateAll();
            }
        });
    }
};

function validateAll() {

    var inputname="", password="";
    var statusSpan = document.getElementById('status');
    var temp = document.getElementById('status-message');
    var found = false;
    
    if(document.getElementById("username") !== "")
        inputname = document.getElementById('username').value.toString();
    if(document.getElementById("password") !== "")
        password = document.getElementById('password').value.toString();
    
    // SEARCH FOR USER IN USERS LIST
    for(i = 0; i < users.length; i++) {
        if(inputname == users[i]) {
            found = true;
            break;
        }
    }
    
    if(found) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "User Already Exists!!!"; // USER NOT FOUND 
        $.notify("User Already Exists!!!", "error");
        statusSpan.style.display = 'block';
    }
    else if(password.length < 8 || password.length > 16) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "Password must 8 to 16 characters long!!!"; // USER ENTERED WRONG PASSWORD
        $.notify("Password must 8 to 16 characters long !!!", "warn");
        statusSpan.style.display = 'block';
    }
    else {
        temp.style.color = "#20FF00";
        var queryToAdd = "http://akshatbhargava123.imad.hasura-app.io/add-" + inputname + "-" + password;
        // TESTING QUERY
        //alert(queryToAdd);
        ready = true;
        request.open('GET', queryToAdd, true);
        request.send(null);
        //setTimeout(window.location.href = "user-work.html",2000);
        temp.style.color = "#FF3408";
        temp.innerHTML = "Registered!!!";
        $.notify(inputname + " has been registered...");
        statusSpan.style.display = 'block';
    }
}