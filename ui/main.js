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