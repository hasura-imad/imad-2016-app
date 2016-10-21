console.log('Loaded!');

var imgo =document.getElementById("simg");
var h = 5;
function moveleft(){
h = h + 30;
    imgo.style.marginLeft="h+'px'";
}
imgo.addEventListener("click", moveleft);