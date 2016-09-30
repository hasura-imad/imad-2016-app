//counter code
var button= documnet.getElementById('counter');
var counter=0;
button.onclick =function() {
    counter=counter+1;
    var span= document.getElemenById('count');
    span.innerHTML = counter.toString();
};
