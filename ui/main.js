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
    var request= new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState == XMLHttpRequest.DONE){
            
            if(request.state == 200){
                var counter= request.responseText;
                var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
        }
    };
   
   request.open('GET', 'https://cloud.imad.hasura.io/counter', true);
   request.send(null);
   
};