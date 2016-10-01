var button = document.getElementById('but1');
button.onclick = function(){
var request = new XMLHttpRequest();  
request.onreadystatechange = function(){if(request.readyState===XMLHttpRequest.DONE){if(request.status ===200){var counter = request.responseText;
 var span = document.getElementById('zero');
 span.innerHTML = counter.toString();
    
}}};
request.open('GET','http://luckyman000786.imad.hasura-app.io/counter',true);
request.send(null);
};
console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'Hello !! Welcome to HMG_007 Introduction Page';
var image = document.getElementById('google');
var marginLeft =0;
function moveRight() {
    marginLeft = marginLeft+10;
    image.style.marginLeft =marginLeft + 'px';}

image.onclick = function() {
var interval = setInterval(moveRight,100);};


var submit = document.getElementById('submit-btn');
button.onclick = function(){
var request = new XMLHttpRequest();  
request.onreadystatechange = function(){if(request.readyState===XMLHttpRequest.DONE){if(request.status ===200){
 var span = document.getElementById('zero');
 span.innerHTML = counter.toString();
    
}}};
var nameInput = document.getElementById('name');
var name =  nameInput.value;
request.open('GET','http://luckyman000786.imad.hasura-app.io/submit-btn?name='+name,true);
request.send(null);
};