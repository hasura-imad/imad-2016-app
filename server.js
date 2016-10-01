var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages = {
    "page-introduction":{
    title :"Introduction | The Constitution Of India",
    heading : "Introduction",
    date :"July 23, 2016",
    content:`<p>
                    The Constitution of India is the supreme law of India.[1] It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers and duties of government institutions and sets out fundamental rights, directive principles and the duties of citizens. It is the longest written constitution of any sovereign country in the world.[Note 1][2] The nation is governed by it. B. R. Ambedkar is regarded as its chief architect.
                </p>
                <p>
                    It imparts constitutional supremacy and not parliamentary supremacy, as it is not created by the Parliament but, by a constituent assembly, and adopted by its people, with a declaration in its preamble.[3] Parliament cannot override the constitution.
                </p>
                <p>
                    It was adopted by the Constituent Assembly on 26 November 1949, and came into effect on 26 January 1950.[4] With its adoption, the Union of India became the modern and contemporary Republic of India replacing the Government of India Act, 1935 as the country's fundamental governing document. To ensure constitutional autochthony, the framers of the constitution repealed the prior Acts of the British Parliament via Article 395 of the constitution.[5] India celebrates its coming into force on 26 January each year, as Republic Day.
                </p>
                <p>
                    It declares India a sovereign, socialist, secular,[7] democratic republic, assuring its citizens of justice, equality, and liberty, and endeavours to promote fraternity among them.
                </p>
                <p>
                    The major portion of the Indian subcontinent was under British rule from 1857 to 1947. When the Constitution of India came into force on 26 January 1950, it repealed the Indian Independence Act. India ceased to be a dominion of the British Crown and became a sovereign democratic republic. The date of 26 January was chosen to commemorate the Purna Swaraj declaration of independence of 1930. Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392, 393 and 394 of the Constitution came into force on 26 Nov 1949 and the remaining articles on 26 Jan 1950.
                </p>
                <h2>
                    Previous legislation used as sources
                </h2>
                <p>
                    It is drawn from many sources. Keeping in mind the needs and conditions of India its framers borrowed different features freely from previous legislation viz. Government of India Act 1858, Indian Councils Act 1861, Indian Councils Act 1892, Indian Councils Act 1909, Government of India Act 1919, Government of India Act 1935 and the Indian Independence Act 1947. The last legislation which led to the creation of the two independent nations of India and Pakistan provided for the division of the erstwhile Constituent Assembly into two, with each new assembly having sovereign powers transferred to it, to enable each to draft and enact a new constitution, for the separate states.
                </p>`
},
    "page-cassembly":{},
    "page-influences":{},
    "page-structure":{}
}

function createtemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmltemplate = `<html>
                            <head>
                                <title>
                                    ${title}
                                </title>
                                 <meta name="viewport" content="width=device-width,initial-scale=1"/>
                                 <link href="/ui/style.css" rel="stylesheet" />
                            </head>    
                            <body>
                                <div class="container">
                                    <div>
                                        <a href = '/'>Home</a>
                                    </div>
                                    <hr/>
                                    <h1>
                                        ${heading}
                                    </h1>
                                    
                                    <div>
                                        ${date}
                                    </div>
                                    
                                    <div>
                                        ${content}
                                    </div>
                                </div>
                            </body>
                        </html>`;
                        return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

app.get('/:pageName', function (req, res) {
    var pageName = req.params.pageName;
    res.send(createtemplate(pages[pageName]));
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

var names = [];
app.get('/submit-name/:name', function(req,res){
    var name = req.params.name;
    names.push(name);
    //JSON
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
