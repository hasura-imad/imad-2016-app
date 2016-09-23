// Counter code
var button = document.getElementById('counter');

button.onclick = function (){
    
    // create a request
    var request = new XMLHttpRequest();
    
    // capture the responce and store it in a var
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){ // readyState = CurrentState
            if(request.status === 200){ // 200 means request has been completed.
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // else ignore request
    };
    
    // make the request
    request.open('GET', "http://akshatbhargava123.imad.hasura-app.io/counter", true);
    request.send(null);
    
};

// Submit Name Code
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_button');

submit.onclick = function(){
    // 1. Make a request to the server and send the name
    
    // 2. Capture a list of names and render it as a list
    var names = ["name1", "name2", "name3", "name4"];
    var list = '';
    for(var  i = 0; i < names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};


// PRACTICE AREA
/*//var element = document.getElementById('main-text');

//element.innerHTML = 'Hello :)';


// MOVING MADI

var image = document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft++;
    image.style.marginLeft = marginLeft + 'px';
}

image.onclick = function (){
    var interval = setInterval(moveRight, 40);
    image.style.marginLeft = '100px';
};
*/