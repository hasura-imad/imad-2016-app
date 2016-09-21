console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'Hello !! Welcome to HMG_007 Introduction Page';
var image = document.getElementById('google');
var marginLeft =0;
function moveRight(){
    marginLeft = marginLeft+10;
    image.style.marginLeft =marginLeft + 'px';}

image.onClick = function() {
var interval = setInterval(moveRight,100);};