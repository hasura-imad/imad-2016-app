console.log('Loaded!');
 
var element=document.getElementById('main-text');
element.innerHTML="my name is khan and I am not a terrorist!";

var img=document.getElementById('madi');

function move_to_right()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
  var interval=setInterval(move_to_right,100); 
};