
// Counter code
var button = document.getElementById('counter');

button.onclick = function(){
    //create a request object
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = rerquest.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
  
            }
        }
        else( console.log("server Error"));
    };
    //make the request
    request.open('GET','http://isaac6171.imad.hasura-app.io/counter' , true);
    request.send(null);
    
    //render the variable in the correct span
 };
 //submit

 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
     var request = new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
     var list = '';
     for(var i=0;i<names.length;i++){
         list += '<li>'+ names[i]+'</li>';
     }
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
     
     
                
  
            }
        }
    };
    //make the request
     var nameInput = document.getElementById('name');
     var name = nameInput.value;
    request.open('GET','http://isaac6171.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
    };
    //Comments
    var comment = document.getElementById('cmnt_btn');
    comment.onclick = function(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readystaechange === XMLHttpRequest.DONE){
                if(request.status === 200){
                    var comments = request.responseText;
                    comments = JSON.parse(comments);
                    var list ='';
                    for(var i=0;i<comments.length;i++){
                        list += '<li>' + comments[i] +'</li>';
                        var ul = document.getElementById('cmnt_list');
                        ul.innerHTML = list;
                    }
                }
            }
            
        };
    };