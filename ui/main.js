console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};

// Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
  // Make a request to the counter endpoint
  // Capture the response if the request was succesfully completed
  // Render the response in the HTML
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};