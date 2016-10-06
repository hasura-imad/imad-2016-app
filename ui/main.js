console.log('Loaded!');
var element=document.getElementById('main-text');


element.innerHTML='New doc';
//moving

var img=document.getElementById('main-img');
var marginLeft=0;
function moveright(){
    marginLeft= marginLeft + 10;
img.style.marginLeft= marginLeft + 'px';
}

img.onclick=function(){
    var interval=setInterval(moveright, 100);
    
    
}