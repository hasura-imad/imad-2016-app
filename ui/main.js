var submit=document.getElementById('submit-btn');
 var nameInput=document.getElementById('name');
var name=nameInput.value;
submit.onclick=function(){
  
  //create a reqest object
  var request=new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
      if(request.readyState==XMLHttpRequest.DONE)
      {
          if(request.status==200)
          {
             var names=request.responseText;
             names=JSON.parse(names);
            var list='';
     for(var i=0;i<names.length;i++)
     {
         list+='<li>'+names[i]+'</li>';
     }
     var ul=document.getElementById('the_list');
     ul.innerHTML=list;
          }
      }
  };
  
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  
  
 //make a request
 request.open('GET','http://anitamahotra63.imad.hasura-app.io/submit-button?name='+name,true);
 request.send(null);
  
};