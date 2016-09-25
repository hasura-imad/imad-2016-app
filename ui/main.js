// counter code
var button = getElementById('counter');
var counter=0;
button.onclick = function () {
    // rendering correct count
    counter++;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
};