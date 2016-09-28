//Counter Code
 var button= document.getElementById('counter');
 var counter=0;
 button.onclick=function(){
     
     //Make a request to the counter endpoint
     
     //Capture the response and store it in a variable
     
     //Render the variable in the correct span
     
     counter=counter+1;
     counter=0;
      var span=document.getElementById('count');
      span.innerHTML=counter.toString();
      
 };