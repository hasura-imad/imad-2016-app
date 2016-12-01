
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
            
            
<form action="http://www.SnapHost.com/captcha/send.aspx" id="ContactUsCaptchaWebForm" method="post" onsubmit="return ValidateForm(this);">
<input name="skip_WhereToSend" type="hidden" value="suryanprasadom@gmail.com
<input name="skip_SnapHostID" type="hidden" value="YMRPXPJUTHLY" />
<input name="skip_WhereToReturn" type="hidden" value="http://suryan123.imad.hasura-app.io/article-five
<input name="skip_Subject" type="hidden" value="Contact Me forum
<input name="skip_ShowUsersIp" type="hidden" value="1" />
<input name="skip_SendCopyToUser" type="hidden" value="1" />
<script type="text/javascript">
function ValidateForm(frm) {
if (frm.Name.value == "") {alert('Name is required.');frm.Name.focus();return false;}
if (frm.FromEmailAddress.value == "") {alert('Email address is required.');frm.FromEmailAddress.focus();return false;}
if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {alert('Please enter a valid email address.');frm.FromEmailAddress.focus();return false;}
if (frm.Comments.value == "") {alert('Please enter comments or questions.');frm.Comments.focus();return false;}
if (frm.skip_CaptchaCode.value == "") {alert('Enter web form code.');frm.skip_CaptchaCode.focus();return false;}
return true; }
function ReloadCaptchaImage(captchaImageId) {
var obj = document.getElementById(captchaImageId);
var src = obj.src;
var date = new Date();
var pos = src.indexOf('&rad=');
if (pos >= 0) { src = src.substr(0, pos); }
obj.src = src + '&rad=' + date.getTime();
return false; }
</script>
<table border="0" cellpadding="5" cellspacing="0" width="600">
<tr>
<td><b>Name*:</b></td>
<td><input name="Name" type="text" maxlength="60" style="width:350px;" /></td>
</tr><tr>
<td><b>Phone number:</b></td>
<td><input name="PhoneNumber" type="text" maxlength="43" style="width:350px;" /></td>
</tr><tr>
<td><b>Email address*:</b></td>
<td><input name="FromEmailAddress" type="text" maxlength="60" style="width:350px;" /></td>
</tr><tr>
<td><b>Comments and questions*:</b></td>
<td><textarea name="Comments" rows="7" cols="40" style="width:350px;"></textarea></td>
</tr><tr>
<td colspan="2" align="center"> <br />
<table border="0" cellpadding="0" cellspacing="0">
<tr><td colspan="2" style="padding-bottom:18px;">
<!-- Please check our ProCaptcha service which is ad-free:
http://www.SnapHost.com/captcha/ProCaptchaOverview.aspx -->
<a href="http://www.snaphost.com/captcha/" alt="email form with captcha" title="email form with captcha">
email form with captcha</a></td></tr>
<tr valign="top"><td> <i>Enter web form code*:</i>
<input name="skip_CaptchaCode" type="text" style="width:80px;" maxlength="6" />
</td><td>
<a href="http://www.snaphost.com/captcha/ReadyForms/ContactUsForm.aspx"><img id="CaptchaImage" alt="Contact Us form" title="HTML code for Contact Us form"
style="margin-left:20px;"
src="http://www.SnapHost.com/captcha/CaptchaImage.aspx?id=YMRPXPJUTHLY&ImgType=2" /></a><br />
<a href="#" onclick="return ReloadCaptchaImage('CaptchaImage');"><span style="font-size:12px;">reload image</span></a> </td></tr>
</table> <br />
* - required fields. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<input name="skip_Submit" type="submit" value="Submit" />
</td></tr>
</table><br />
</form>
            
            
            
            
            
            
            
            
            
            
            
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