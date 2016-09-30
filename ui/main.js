/*console.log('Loaded!');

var img = document.getElementById("myimage");
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function ()
{
    var interval = setInterval(moveRight, 50);
}
*/

// Counter Code
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function() {
	counter = counter + 1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();
};
