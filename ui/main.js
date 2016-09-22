console.log('Loaded!');

var button = document.getElementById('counter');
var span = document.getElementById('count');

button.onclick = function(){

	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {

		if(request.readyState === XMLHttpRequest.DONE && request.status === 200){
			var count = request.responseText;
			span.innerHTML = count;
		}

	};

	request.open('GET','http://achyut92.imad.hasura-app.io/counter',true);
	request.send(null);
};

var submit = document.getElementById('submit_btn');
submit.onclick = function(){

	var nameInput = document.getElementById('name');
	var name = nameInput.value;
	var request = new XMLHttpRequest();

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

	request.open('GET','http://achyut92.imad.hasura-app.io/submit-name?name='+name,true);
	request.send(null);
};
