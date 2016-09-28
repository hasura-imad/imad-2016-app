//counter
var button = document.getElementById('counter');


button.onclick = function() {
    //request to endpoint
    var request = new XMLHttpRequest();
    
    //capture the state
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};