console.log('Loaded!');

var img =document.getElementbyId("madi");
var marginleft = 5;
var moveleft= function (){
    marginleft = marginleft + 3;
    img.style.marginLeft+"px";
};
img.addEventListener("click",moveleft);