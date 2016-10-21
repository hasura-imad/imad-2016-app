console.log('Loaded!');

var img =document.getElementbyId("madi");
var marginleft = 0;
var moveleft= function (){
    marginleft = marginleft + 3;
    img.style.marginleft+"px";
};
img.addEventListener("click",moveleft);