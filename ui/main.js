console.log('Loaded!');
//move the image
var img = document.getElementById('logo');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft = 1;
    pmg.style.marginLeft = marginLeft = 'px';
}
img.onClick = function() {
    var interval = setInterval(moveRight,5) ;
};