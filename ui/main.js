// counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function () {
    
   var request = new XMLHttpRequest(); 
   
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){  //DO NOT COMPARE WITH "200" INSTEAD WITH 200
                var counter=request.responseText; //Should be request.responseText
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
    };

    request.open("GET", document.URL+"counter", true);
    request.send(null);
};

// Get Name

var nameInput = document.getElementById('name');
var name=nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //make request to get names
     var request = new XMLHttpRequest(); 
   
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){  
                var names = request.responseText;
                names = JSON.parse(names);
                var list='';
                for(var i=0; i<names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                    var ul=document.getElementById('namelist');
                    ul.innerHTML = list;
                }
            }
        }
    };

    request.open("GET", document.URL+"submit-name?name="+name, true);
    request.send(null);
    // capture names
   
    
    
};