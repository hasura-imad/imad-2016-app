console.log('Loaded!');

var imgo =document.getElementById("simg");
var marginleft = 5;
function moveleft(){
    marginleft = marginleft + 3;
    imgo.style.marginLeft="marginleft+'px'";
}
imgo.addEventListener("click", moveleft);