console.log('Loaded!');

var button = document.getElementById('counter');
var span = document.getElementById('count');
var request = new XMLHttpRequest();

button.onclick = function(){

	

	request.onreadystatechange = function () {

		if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
			var count = request.responseText;
			span.innerHTML = count;
		}

	};

	request.open('GET','http://localhost:8080/counter',true);
	request.send(null);
};

var submit = document.getElementById('submit_btn');
submit.onclick = function(){

	var nameInput = document.getElementById('name');
	var name = nameInput.value;

	request.onreadystatechange = function () {

		if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
			var names = request.responseText;
			names = JSON.parse(names);
			var list = '';

			for (var i = 0; i <names.length; i++) {
				list += '<li>'+names[i]+'</li>';
			}

			var ul = document.getElementById('nameList');
			ul.innerHTML = list;
		}

	};

	request.open('GET','http://localhost:8080/submit-name?name='+name,true);   //achyut92.imad.hasura-app.io
	request.send(null);
};
