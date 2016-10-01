console.log('Loaded!');
 
var element = getElementById('anita');
var marginleft=0;

function moveRight()
{
    marginleft=marginleft+100;
    element.style.marginleft= marginleft +'px';
}
element.onclick=function(){
   var interval=setInterval(moveRight,100);
};