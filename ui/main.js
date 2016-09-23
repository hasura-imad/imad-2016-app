console.log('loaded');

var element = document.getElementById('main-text');

element.innerHTML = 'Hello :)';


// MOVING MADI

var image = document.getElementById('madi');

image.onclick = function (){
    image.style.marginLeft = '100px';
};