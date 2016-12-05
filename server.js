
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'article-one': {
        title:'HTML TRICKS | Suryan',
        heading:'HTML',
        date:'',
        content:`
            
               
               
               
               
             <span style="text-decoration: underline;"><h2>Let's Start with HTML</h2></span>


      <hr>
      <br>
       <h3>1.</h3>
       
        <h2>The title attribute</h2>

<p title="THIS IS A TOOLTIP">
Mouse over this paragraph, to display the title attribute as a tooltip.
</p>

<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_title"><button>Click here to view Code</button></a></p>

<hr>
<br>

<h3>2.</h3>

<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>

<hr>
<br>

<h3>3.</h3>

<h2>HTML LINK</h2>

<p><a href="http://suryan123.imad.hasura-app.io/">Visit our HTML tutorial</a></p>

<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools"><button>Click here to view Code</button></a></p>



<hr>
<br>

<h3>4.</h3>

<h2>Input Type Button</h2>



<input type="button" onclick="alert('Hello World!')" value="Click Me!">

<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_button"><button>Click here to view Code</button></a></p>

<hr>
<br>

<h3>5.</h3>

<h2>HTML IMAGES</h2>

<h2>Spectacular Mountain</h2>
<img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">


<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_mountain"><button>Click here to view Code</button></a></p>

<hr>
<br>








<h1>MORE UPDATES WILL BE AVAILABLE SOON !!!!!</h1>
               
                  
               
               
               
               
               
               
               
               
               
               
                            
                        
            <p>
            </p>` 
            
            
            
            
                
                
    },
    'article-two': {
        title:'CSS | Suryan',
            heading:'',
            date:'',
            content:`
            
            
            <h1>CSS</h1>
            <hr>
            <br>
            
            <h3>1.</h3>
            
           <h2>Inline CSS</h2>
<p>An inline CSS is used to apply a unique style to a single HTML element.

An inline CSS uses the style attribute of an HTML element.

This example sets the text color of the element to blue:</p>


<h1 style="color:blue;">This is a Blue Heading</h1>


<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline"><button>Click here to view Code</button></a></p>

<hr>
<br>
            
                <p>
                </p>`
       },
    'article-three': {
        title:'JAVASCRIPT | Suryan',
            heading:'',
            date:'',
            content:`
            
            
            <h1>JAVASCRIPT</h1>
            <hr>
            <br>
            
                <p>
                </p>`
   
   
   
    },
    'article-four': {
        title:'ABOUT ME | Suryan',
            heading:'',
            date:'',
            content:`
            
            <h1>ABOUT ME</h1>
            <hr>
            <br>
            
            
                <p>
                </p>`
                
                
                
    },
    'article-five': {
        title:'CONTACT ME | Suryan',
            heading:'',
            date:'',
            content:`
            
            
            
            <h1>CONTACT ME</h1>
            <hr>
            <br>
            
            

            
            
            
            
            
            
            
            
            
                <p>
                </p>`
   
   
    
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
         <div>
             <a href="/">HOME</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-one">HTML</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-two">CSS</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-three">JAVASCRIPT</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-four">ABOUT ME</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/article-five">CONTACT ME</a>
         </div>
         <h3>
            ${heading}
         </h3>
         <div>
            ${date}
         </div>
         <div>
            <p>
                ${content}  
            </p>
         </div>
        </div>
    </body>
    </html>
 `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter++;
    res.send(counter.toString());
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

var names = [];
app.get('/submit-name',function(req,res){
    //Get the namefrom the request
    var name = req.query.name;
    names.push(name);
    //JSON:Javascript Object Notation
    res.send(JSON.stringify(names));
});
app.get('/:articleName',function (req,res){
  var articleName=req.params.articleName;    
  res.send(createTemplate(article[articleName]));
});




















app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});