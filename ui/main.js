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
        
        // Submit name
        
        var nameInput = document.getElementById('name');
        var name = nameInput.value;
        var submit = document.getElementById('sibmit_btn');
        submit.onclick = function () {
            
            
                    
            // Make a request to the server and send the name
            
            // Capture a list of names and render it as a list.
            
            var names = ['name1','name2','name3','name4'];
            var list ='';
            for (var i=0; i<names.length; i++){
            list += '<liv' + names[i] + '</liv';
            }
            
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
            
            
            
            
            
        };
        
            
            
        
        }
        
        