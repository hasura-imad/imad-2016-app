console.log('Loaded!');
alert('hello there!');

var content = document.getElementById('main-content');
var img = document.getElementById('madi');

content.innerHTML = 'Changing content through javascript';

var marginLeft = 0;
function moveRight(){
	marginLeft = marginLeft + 5;
	img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
	setInterval(moveRight,50);
}