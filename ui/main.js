var mainText=document.querySelector("#main-text");
function changeText() {
  mainText.innerHTML="This is the new Text that is set from javascript file";
}
mainText.onclick=changeText;
var mainImg=document.querySelector("#main-img");
var margin=50;
function moveImage(){
  margin=margin+1;
  mainImg.style.marginLeft=margin+'px';
}
mainImg.onclick=function(){
  var interval=setInterval(moveImage, 5);
};
