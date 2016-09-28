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
    
    request.open('GET','http://vineth17.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit request

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
var request = new XMLHttpRequest();
    //capture the state
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200){
                var names= request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i< names.length; i++){
                     
                    list += '<li>' + names[i] + '</li>';
                }
                alert(list);
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://vineth17.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);

   
    
};