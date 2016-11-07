var users = [];

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        $(document).keypress(function(e) {
            if(e.which == 13) {  // enter pressed

                // *************** FETCHING DATA FROM DATABASE (NOT A GOOD PRACTICE HERE) ***********************

                var request = new XMLHttpRequest();
                var object;
                
                request.onreadystatechange = function() {
                    if(request.readyState === XMLHttpRequest.DONE) {
                        // Take some action
                        if(request.status === 200) {
                            object = JSON.parse(request.responseText);
                            for(var i = 0; i < object.length; i++){
                                users.push(object[i].name.toString());
                            }
                        }
                    }
                };
                
                request.open('GET', 'http://akshatbhargava123.imad.hasura-app.io/users', true);
                request.send(null);
                
                // **********************************************************************************************
                
                validateAll();
            }
        });
    }
};

function validateAll() {

    var inputname, password;
    var statusSpan = document.getElementById('status');
    var temp = document.getElementById('status-message');
    var found = false;
    
    if(document.getElementById("username") !== "")
        inputname = document.getElementById('username').value;
    if(document.getElementById("password") !== "")
        password = document.getElementById('password').value;
    
    // SEARCH FOR USER IN USERS LIST
    for(i = 0; i < users.length; i++) {
        if(inputname == users[i]) {
            found = true;
        }
    }
    
    if(found) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "User Already Exists!!!"; // USER NOT FOUND 
        statusSpan.style.display = 'block';
    }
    else if(password.length < 8 || password.length > 16) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "Password must 8 to 16 characters long!!!"; // USER ENTERED WRONG PASSWORD
        statusSpan.style.display = 'block';
    }
    else if (!found){
        temp.style.color = "#20FF00";
        temp.innerHTML = "Registering you...";
        
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
                    if(request.readyState === XMLHttpRequest.DONE) {
                        // Take some action
                        if(request.status === 200) {
                            object = JSON.parse(request.responseText);
                            for(var i = 0; i < object.length; i++){
                                users.push(object[i].name.toString());
                            }
                        }
                    }
                };
                
        request.open('GET', 'http://akshatbhargava123.imad.hasura-app.io/users', true);
        request.send(null);
        
        setTimeout(window.location.href = "user-work.html",2000);
        statusSpan.style.display = 'block';
    }
}