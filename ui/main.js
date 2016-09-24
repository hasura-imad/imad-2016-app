console.log('Loaded!');
// Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = '';
// move image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
// Counter code
var button = document.getElementById('counter');
button.onclick = function(){
    //make a request to the counterendpoint
    
    //capture the response and store it in a variable
    
    //render the variable in the correct span
  counter = counter + 1;
  var span = document.getElementById=('count');
};