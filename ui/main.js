// counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function () {
    /*// make request to counter enddpoint
    var request = new XMLHttpRequest();
    
    // catch request
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === "200"){
                
            }
        }
    };*/
    // rendering correct count
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
};