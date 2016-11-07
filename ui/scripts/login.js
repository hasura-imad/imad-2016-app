//var users = ["user1","user2","user3","user4","user5"];
//var passwords = ["123","132","312","213","123"];
//var totalUsers = 4;

var users = [];
var passwords = [];

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        $(document).keypress(function(e) {
            if(e.which == 13) {
                // enter pressed
                
                // *************** FETCHING DATA FROM DATABASE (NOT A GOOD PRACTICE HERE) ***********************
                // create a new object
                var request = new XMLHttpRequest();
                var object;
                
                request.onreadystatechange = function() {
                    if(request.readyState === XMLHttpRequest.DONE) {
                        // Take some action
                        if(request.status === 200) {
                            //alert('recieved');
                            object = request.responseText;
                            for(var i = 0; i < object.size(); i++){
                                users.push(object[i].name);
                                passwords.push(object[i].password);
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

    var inputname;
    var password;
    var statusSpan = document.getElementById('status');
    var temp = document.getElementById('status-message');
    var found = false;
    var userIndex;
    
    if(document.getElementById("username") !== "")
        inputname = document.getElementById('username').value;
    if(document.getElementById("password") !== "")
        password = document.getElementById('password').value;
    
    // SEARCH FOR USER IN USERS LIST
    for(var i = 0; i < users.size(); i++) {
        if(inputname === users[i]) {
            userIndex = i;
            found = true;
        }
    }
    
    if(!found) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "wrong username or password...";
        statusSpan.style.display = 'block';
    }
    else if(password !== passwords[userIndex]) {
        temp.style.color = "#FF3408";
        temp.innerHTML = "wrong username or password...";
        statusSpan.style.display = 'block';
    }
    else if (found){
        temp.style.color = "#20FF00";
        temp.innerHTML = "Logging you back...";
        setTimeout(window.location.href = "user-work.html",2000);
        statusSpan.style.display = 'block';
    }
}


/*$('.message a').click(function(){
$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});*/