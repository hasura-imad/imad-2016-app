//login
function loadLoginForm () {
    var loginHtml = `
      
       <h4 style="color:white">Username:</h4><input type="text" id="username" placeholder="username" /> <br/><br/>
       <h4 style="color:white">Password:</h4><input type="password" id="password" />
       
        <br/><br/>
       <input type="submit" id="login_btn" value="Login" />
        <input type="submit" id="register_btn" value="Register" />
        `;
                
    document.getElementById('login_area').innerHTML = loginHtml;

    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
                  window.open('http://suryan123.imad.hasura-app.io');
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                                
                       register.value = 'Registered!';

             
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        register.value = 'Registering...';
    
    };
    

}
function escapeHTML (text)
{
    var $text = document.createTextNode(text);
    var $div = document.createElement('div');
    $div.appendChild($text);
    return $div.innerHTML;
}



function loadLoggedInUser (username) {
    
    var loginArea = document.getElementById('login');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
    
    
}


function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                 
                loadLoggedInUser(this.responseText);
                
                
            
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

loadLogin();


//counter code
function getCounter(){
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
};
 request.open('GET', '/counter', true);
    request.send(null);
}

getCounter();
//
var button = document.getElementById('counter1');
//var counter=0;
button.onclick = function() {
   // counter = counter+1;
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
        if(request.status ===200){
            var counter = request.responseText;
            var span = document.getElementById('count1');
            span.innerHTML = counter.toString();
            
            

        }
    }
    
};
//make the request
request.open('GET','http://suryan123.imad.hasura-app.io/counter',true);
request.send(null);
};
//
var submit =document.getElementById('submit_btn');
submit.onclick = function() {
    //create a request object
var request = new XMLHttpRequest();
	request.onreadystatechange=function(){
		if(request.readyState===XMLHttpRequest.DONE)
		{
			if(request.status===200)
			{
				var names= request.responseText;
				
				names = JSON.parse(names);
				var list="";
				for(var i=0;i<names.length;i++)
				{
				  
				
			                    list += '<li  class="commentbox">' + names[i] + '</li>';
				}
			var ul = document.getElementById('namelist');
			list+="<p id='db'></p><br/>";
			ul.innerHTML=list;
			}
		}
	
	};


   var nameInput =document.getElementById('name');
var name = nameInput.value;
//var firstname = document.getElementById('firstname').value;

request.open('GET','http://suryan123.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);

};