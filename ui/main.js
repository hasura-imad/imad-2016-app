console.log('Loaded!');

var img =document.getElementbyId("madi");
function moveleft(){
    marginleft=marginleft+3;
    img.style.marginleft= marginleft+"px";
}
img.onclick = function(){
    var interval = setinterval(moveleft,110);

}