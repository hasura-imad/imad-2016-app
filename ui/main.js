console.log('Loaded!');

var imgo =document.getElementById("madi");
var marginleft=0;
var h=0;
function moveleft(){
    marginleft= marginleft + 10 ;
    h=marginleft + "px";
    imgo.style.marginLeft="h";
}
imgo.addEventListener("click", moveleft);