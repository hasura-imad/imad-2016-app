//counter
var button = document.getElementById('counter');

button.onClick = function() {
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHtml = counter.toString();
    
};