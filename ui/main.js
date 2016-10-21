console.log('Loaded!');

var img =document.getElementById("madi");
var marginleft = 5;
function moveleft(){
    marginleft = marginleft + 3;
    img.style.marginLeft=marginleft+"px";
}
img.addEventListener("click", moveleft);