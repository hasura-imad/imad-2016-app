//Counter Code
 var button = document.getElementById('counter');
 var counter = 1;
 button.onclick=function() {
     
     //Create a request object
    var request = new XMLHttpRequwst();
    
     //Capture the response and store it in a variable
       request.onreadystatechange = function (){
           if(request.readyState === XMLHttpRequest.DONE){
               //Take some action
               if(request.states === 200){
                   var counter = request.responseTest;
                   var span = document.getElementById('count');
                   span.innerHTML = counter.toString();
               }
           }
           
          
        
     //Not done yet
       };
       //Make the request
       request.open('GET', 'http://suryan123.imad.hasura-app.io/counter' ,  true);
       request.send (null);
          
        };
        