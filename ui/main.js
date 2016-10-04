console.log('Loaded!');

var img =document.getElementbyId("madi");
var marginleft = 0;
function moveleft(){
    marginleft = marginleft + 3;
    img.style.marginleft= marginleft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveleft,10);

}