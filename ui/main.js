console.log('Loaded!');
// Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
// move image
var img = document.getElementById('madi');
var marginLeft = 0;
function move () {
img.onclick = function(){
    if(marginLeft===0){
        marginLeft = MarginLeft +10;
    
    img.style.marginLeft = marginLeft + 'px';
    }
};
}