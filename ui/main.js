console.log('Loaded!');
 


var img=document.getElementById('madi');
var marginLeft=0;
function move_to_right()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}

img.onclick=function(){
  var interval=setInterval(move_to_right,100); 
};