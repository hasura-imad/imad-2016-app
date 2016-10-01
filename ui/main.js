var button = document.getElementById('counter');

button.onclick = function(){
    
    //Make a request to the counter endpoint
    var request = new XMLhttprequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.raedystate === XMLhttprequest.DONE){
            if(request.ststus === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    }
    //Render the variable in the correct span
}