[console.log('Loaded!');
// Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = '';
// move image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,10);
};
]
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
    };
    //make the request
    request.open('GET','http://isaac6171.imad.hasura-app.io/counter' , true);
    request.send(null);
    
    //render the variable in the correct span
 };
 //submit
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
     
     
     
     //example
     var names =['name1','name2','name3'];
     var list = '';
     for(var i=0;i<names.length;i++){
         list += '<li>'+ names[i]+'</li>';
     }
     var ul = document.getElementById('namelist ');
     ul.innerHtml = list;
     
     
     
 };