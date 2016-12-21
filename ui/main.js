//counter code
var button=document.getElementById('counter');

button.onclick=function(){
  //create a request to the counter endpoint
  var request=new XMLHttpRequest();
  //capture the response and store it in the variable
  request.onreadystatechange=function(){
      if(request.readyState==XMLHttpRequest.DONE){
          //take action
          if(request.status==200){
              var counter=request.responseText;
             var span=document.getElementById('count');
             span.innerHTML=counter.toString();  
          }
      }
      // not done yet
      
  };
  //Make a request
  request.open('GET','http://manojduli.imad.hasura-app.io/counter',true);
  request.open('GET','/counter',true);
  request.send(null);
  };
  // submit name
 
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
	var request=new XMLHttpRequest();
	request.onreadystatechange=function(){ 
	  if(request.readyState==XMLHttpRequest.DONE){
		  if(request.status==200){
			var namesList=request.responseText;
			names=JSON.parse(namesList);
			var list='';
			for(var i=0;i<names.length;i++){
			list+='<li>' + names[i] +'<li>';
			}

			var ul=document.getElementById('namelist');
			ul.innerHTML=list;
		  }
	  }
	};
     var nameInput=document.getElementById('name');
     var name=nameInput.value;
	request.open('GET','http://manojduli.imad.hasura-app.io/submit-name?name='+name,true);
	request.open('GET','/submit-one?name='+name,true);
	request.send(null);

}; 



