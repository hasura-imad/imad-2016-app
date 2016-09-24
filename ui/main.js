console.log('Loaded!');

// Change the displayed text
var element = document.getElementById("main-text");
element.innerHTML = "Hello";

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



