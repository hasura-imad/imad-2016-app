var users = [];
var passwords = [];

var temp = [{"name":"user1","id":1,"password":"123"},{"name":"user2","id":2,"password":"123"},{"name":"user3","id":3,"password":"123\r\n"},{"name":"user4","id":4,"password":"123"}];

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
                                passwords.push(object[i].password.toString());
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
    var userIndex;
    var statusSpan = document.getElementById('status');
    var temp = document.getElementById('status-message');
    var found = false;
    
    if(document.getElementById("username") !== "")
        inputname = document.getElementById('username').value;
    if(document.getElementById("password") !== "")
        password = document.getElementById('password').value;
    
    for(var i = 0; i < users.length; i++){
        console.log(users[i]);
        console.log(passwords[i]);
    }
    
    // SEARCH FOR USER IN USERS LIST
    for(i = 0; i < users.length; i++) {
        if(inputname.toString() === users[i]) {
            userIndex = i;
            found = true;
        }
    }
    
    if(!found) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "Invalid Username Or Password!!!"; // USER NOT FOUND 
        statusSpan.style.display = 'block';
    }
    else if(password !== passwords[userIndex]) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "Invalid Username Or Password!!!"; // USER ENTERED WRONG PASSWORD
        statusSpan.style.display = 'block';
    }
    else if (found){
        temp.style.color = "#20FF00";
        temp.innerHTML = "Logging you back...";
        setTimeout(window.location.href = "user-work.html",2000);
        statusSpan.style.display = 'block';
    }
}