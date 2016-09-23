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