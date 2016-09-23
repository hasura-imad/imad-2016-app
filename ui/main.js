// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function (){
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
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