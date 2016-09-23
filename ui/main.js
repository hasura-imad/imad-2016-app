// Counter code
var button = document.getElementById('counter');

button.onclick = function (){
    
    // make a request
    var request = new XMLHttpRequest();
    
    // capture the responce and store it in a var
    request.onstatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){ // 200 means request has been completed.
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // else ignore request
    };
    
    // create the request
    request.open('GET', "http://akshatbhargava123.imad.hasura-app.io/", true);
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