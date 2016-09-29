console.log('Loaded!');

// Move the image

var img = document.getElementById('madi');
var marginLeft=0;

function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    // img.style.marginLeft='200px';
    var interval = setInterval(moveRight, 100);
};



