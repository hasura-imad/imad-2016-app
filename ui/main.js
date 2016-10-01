var button = document.getElementById('counter');

button.onclick = function(){
    //create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    }
    //Render the variable in the correct span
    request.open('GET', 'http://rajatsarkari.imad.hasura-app.io/counter',true);
    request.send(null);
}

var submit = document.getElementById('submit_btn');
submit.onclick = function(){ //create a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i = 0;i<names.length;i++)
                {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');   
                ul.innerHTML = list;
            }
        }
        
    }
    var nameInput = document.getElementById('name'); 
    var name = nameInput.value;
    //Render the variable in the correct span
    request.open('GET', 'http://rajatsarkari.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
    
}
