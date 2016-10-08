/*console.log('Loaded!');

var img = document.getElementById("myimage");
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function ()
{
    var interval = setInterval(moveRight, 50);
}
*/

// Counter Code

var button = document.getElementById('counter');

var counter = 0;
button.onclick = function() {

/*
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200) {
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	};
	
	request.open('GET', 'http://pkmariya.imad.hasura-app.io/counter', true);
	request.send(null);
*/

counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();

};

var submit = document.getElementById('submit_btn');
submit.onclick = function (){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200){
			var names = request.responseText;
			names = JSON.parse(names);
        		var list = '';

        		for(var i=0; i<names.length; i++)
        		{       
               		 	list += '<li>' + names[i] + '</li>';
        		}
        		var ul = document.getElementById('namelist');
        		ul.innerHTML = list;
			}
		}		
	};

	var nameInput = document.getElementById('name').value;	
	request.open('GET', 'http://pkmariya.imad.hasura-app.io/submit-name?name=' + name, true);
	request.send(null);
};
