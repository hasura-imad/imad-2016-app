console.log('Loaded!');

var imgo =document.getElementsByClassName("img-medium");
var marginleft = 5;
function moveleft(){
    marginleft = marginleft + 3;
    img.style.marginLeft="marginleft";
}
imgo.addEventListener("click", moveleft);