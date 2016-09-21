// Counter code
var button = document.getElementById('counter');

button.onclick = function () {

    // Make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();          
          }
      }  
      // Not done yet
    };
};