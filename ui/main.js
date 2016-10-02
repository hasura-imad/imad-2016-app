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