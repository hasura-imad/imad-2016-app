console.log('loaded');

var element = document.getElementById('main-text');

element.innerHTML = 'Hello :)';


// MOVING MADI

var image = document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    if(marginLeft === 400){
        marginLeft = 0;
    }
    marginLeft++;
    image.style.marginLeft = marginLeft + 'px';
}

image.onclick = function (){
    var interval = setInterval(moveRight, 40);
    image.style.marginLeft = '100px';
};