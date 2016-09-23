//code for the counter
var counterButton=document.querySelector("#counter");
counterButton.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
    if (request.readyState===XMLHttpRequest.DONE){
      if (request.status===200) {
        var counter=request.responseText;
        var count=document.querySelector("#count");
        count.innerHTML=counter.toString();
      }
    }
  };
  request.open('GET','http://s-xync.imad.hasura-app.io/counter',true)
  request.send(null);
};
