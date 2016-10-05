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
var submit = document.getElementById('sumbit_btn');
submit.onclick = function () {
    //make request to get names
    
    // capture names
    var names = ['name1','name2','name3'];
    var list='';
    for(var i=0; i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML = list;
};