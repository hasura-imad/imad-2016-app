/*console.log('Loaded!');
var element=document.getElementById('main-text');


element.innerHTML='New doc';
//moving

var img=document.getElementById('main-img');
var marginLeft=0;
function moveright(){
    marginLeft= marginLeft + 1;
img.style.marginLeft= marginLeft + 'px';
}

img.onclick=function(){
    var interval=setInterval(moveright, 10);
    
    
}*/

var button=document.getElementById('counter');
var counter=0;
button.onclick = function(){
    counter=counter+1;
    res.send(counter.toString());
};