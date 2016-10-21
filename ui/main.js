console.log('Loaded!');

var imgo =document.getElementById("madi");
var marginleft=0;
var h=0;
var interval = setInterval(moveleft,10);
function moveleft(){
    marginleft= marginleft + 10 ;
   
    imgo.style.marginLeft=marginleft + "px" ;
}
imgo.addEventListener("click", moveleft);