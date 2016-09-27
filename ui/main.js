console.log('Loaded!');
//move the image
var img = document.getElementById('logo');
function moveRight() {
    marginLeft = marginLeft = 1;
    pmg.style.marginLeft = marginLeft = 'px';
}
img.onClick = function() {
    img.style.marginLeft = '100px';
    var interval = setInterval(moveRight,5) ;
};