var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages = {
    "introduction":{
    title :"Introduction | The Constitution Of India",
    heading : "Introduction",
    date :"July 23, 2016",
    content:`<p>
                    The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers and duties of government institutions and sets out fundamental rights, directive principles and the duties of citizens. It is the longest written constitution of any sovereign country in the world. The nation is governed by it. B. R. Ambedkar is regarded as its chief architect.
                </p>
                <p>
                    It imparts constitutional supremacy and not parliamentary supremacy, as it is not created by the Parliament but, by a constituent assembly, and adopted by its people, with a declaration in its preamble. The Parliament cannot override the constitution.
                </p>
                <p>
                    It was adopted by the Constituent Assembly on 26 November 1949, and came into effect on 26 January 1950. With its adoption, the Union of India became the modern and contemporary Republic of India replacing the Government of India Act, 1935 as the country's fundamental governing document. To ensure constitutional autochthony, the framers of the constitution repealed the prior Acts of the British Parliament via Article 395 of the constitution. India celebrates its coming into force on 26 January each year, as Republic Day.
                </p>
                <p>
                    It declares India a sovereign, socialist, secular, democratic republic, assuring its citizens of justice, equality, and liberty, and endeavours to promote fraternity among them.
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
    "cassembly":{title :"The Constituent Assembly | The Constitution Of India",
    heading : "The Constituent Assembly",
    date :"July 23, 2016",
    content:`<p>
                    It was drafted by the Constituent Assembly, which was elected by elected members of the provincial assemblies. The 389 member Constituent Assembly took almost three years (two years, eleven months and eighteen days to be precise) to complete its historic task of drafting the Constitution for independent India, during which, it held eleven sessions over 165 days. Of these, 114 days were spent on the consideration of the draft Constitution. On 29 August 1947, the Constituent Assembly set up a Drafting Committee under the Chairmanship of Dr. B.R. Ambedkar to prepare a draft Constitution for India. While deliberating upon the draft Constitution, the assembly moved, discussed and disposed of as many as 2,473 amendments out of a total of 7,635 tabled. Dr B.R. Ambedkar, Sanjay Phakey, Jawaharlal Nehru, C. Rajagopalachari, Rajendra Prasad, Sardar Vallabhbhai Patel, Kanaiyalal Munshi, Ganesh Vasudev Mavalankar, Sandipkumar Patel, Maulana Abul Kalam Azad, Shyama Prasad Mukherjee, Nalini Ranjan Ghosh, and Balwantrai Mehta were some important figures in the assembly. There were more than 30 members of the scheduled classes. Frank Anthony represented the Anglo-Indian community, and the Parsis were represented by H. P. Modi. The Chairman of the Minorities Committee was Harendra Coomar Mookerjee, a distinguished Christian who represented all Christians other than Anglo-Indians. Ari Bahadur Gurung represented the Gorkha Community. Prominent jurists like Alladi Krishnaswamy Iyer, Benegal Narsing Rau and K. M. Munshi, Ganesh Mavlankar were also members of the Assembly. Sarojini Naidu, Hansa Mehta, Durgabai Deshmukh, Rajkumari Amrit Kaur and Vijayalakshmi Pandit were important women members.
                </p>
                <p>
                    The first temporary 2-day president of the Constituent Assembly was Dr Sachchidananda Sinha. Later, Rajendra Prasad was elected president of the Constituent Assembly. The members of the Constituent Assembly met for the first time on 9 December 1946.
                </p>
                
                <h2>
                    Drafting
                </h2>
                <p>The assembly met in sessions open to the public, for 166 days, spread over a period of 2 years, 11 months and 18 days before adopting the Constitution, the 308 members of the assembly signed two copies of the document (one each in Hindi and English) on 24 January 1950. The original Constitution of India is hand-written with beautiful calligraphy, each page beautified and decorated by artists from Shantiniketan including Beohar Rammanohar Sinha and Nandalal Bose. The illustrations on the cover and pages represent styles from the different civilisations of the subcontinent, ranging from the prehistoric Mohenjodaro civilisation, in the Indus Valley, to the present. The calligraphy in the book was done by Prem Behari Narain Raizda. It was published in Dehra Dun, and photolithographed at the offices of Survey of India. The entire exercise to produce the original took nearly five years. Two days later, on 26 January 1950, the Constitution of India became the law of all the States and territories of India. Rs.1,00,00,000 was official estimate of expenditure on constituent assembly. It has undergone many amendments since its enactment.
                </p>
                <p>
                The original 1950 Constitution of India is preserved in helium cases in the Parliament house, New Delhi. There are two original versions of this - one in Hindi and the other in English. The original constitution can be viewed here
                </p>`
    },
    "influences":{},
    "structure":{
        title :"Structure | The Constitution Of India",
        heading : "Structure",
        date :"July 23, 2016",
        content:`
                <p>The Indian constitution is the world's longest. At its commencement, it had 395 articles in 22 parts and 8 schedules. It is made up of of almost 80,000 words. In its current form (September 2012), it has a preamble, 25 parts with 448 articles, 12 schedules, 5 appendices and 100 amendments, the latest of which came into force on 1 August 2015.
                </p>
                <h3>Parts</h3>
                <p>The individual articles of the constitution are grouped together into the following parts:</p>
                <ul>
                    <li>Preamble<p>with the words "socialist" and "secular" added to it in 1976 by the 42nd constitutional amendment.</p>
                    </li>
                    <li>Part 1: Union And Its Territories</li>
                    <li>Part 2: Citizenship</li>
                    <li>Part 3: Fundamental Rights</li>
                    <li>Part 4: Directive Principles of State Policy</li>
                    <li>Part 4A: Fundamental Duties</li>
                    <li>Part 5: The Union</li>
                    <li>Part 6: The States</li>
                    <li>Part 7: States in the B Part of the Schedule</li>
                    <li>Part 8: The Union Territories</li>
                    <li>Part 9: The Panchayats</li>
                    <li>Part 9A: The Municipalities</li>
                    <li>Part 9B: The Co-operative Societies</li>
                    <li>Part 10: The Scheduled and Tribal Areas</li>
                    <li>Part 11: Relations between the Union and the States</li>
                    <li>Part 12: Finance,Property,Contracts,and Suits</li>
                    <li>Part 13: Trade and Commerce within the territory of India</li>
                    <li>Part 14: Services Under the Union, the States</li>
                    <li>Part 14A: Tribunals</li>
                    <li>Part 15: Elections</li>
                    <li>Part 16: Special Provisions Relating to certain Classes</li>
                    <li>Part 17: Languages</li>
                    <li>Part 18: Emergency Provisions</li>
                    <li>Part 19: Miscellaneous</li>
                    <li>Part 20: Amendment of the Constitution</li>
                    <li>Part 21: Temporary, Transitional and Special Provisions</li>
                    <li>Part 22: Short title, date of commencement, Authoritative text in Hindi and Repeals</li>
                </ul>
                <h3>Schedules</h3>
                <p>Schedules are lists in the Constitution that categorise and tabulate bureaucratic activity and policy of the Government.
                </p>
                <ul>
                    <li>First Schedule (Articles 1 and 4) - This lists the states and territories of India, lists any changes to their borders and the laws used to make that change.</li>
                    <li>Second Schedule (Articles 59(3), 65(3), 75(6), 97, 125, 148(3), 158(3), 164(5), 186 and 221) - This lists the salaries of officials holding public office, judges, and Comptroller and Auditor General of India. </li>
                    <li>Third Schedule (Articles 75(4), 99, 124(6), 148(2), 164(3), 188 and 219):Forms of Oaths - This lists the oaths of offices for elected officials and judges.</li>
                    <li>Fourth Schedule (Articles 4(1) and 80(2)) - This details the allocation of seats in the Rajya Sabha (the upper house of Parliament) per State or Union Territory.</li>
                    <li>Part 4A: Fundamental Duties</li>
                    <li>Part 5: The Union</li>
                    <li>Part 6: The States</li>
                    <li>Part 7: States in the B Part of the Schedule</li>
                    <li>Part 8: The Union Territories</li>
                    <li>Part 9: The Panchayats</li>
                    <li>Part 9A: The Municipalities</li>
                    <li>Part 9B: The Co-operative Societies</li>
                    <li>Part 10: The Scheduled and Tribal Areas</li>
                    <li>Part 11: Relations between the Union and the States</li>
                    <li>Part 12: Finance,Property,Contracts,and Suits</li>
                </ul>    
                
                `
    }
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
                                        <a href = '/introduction'>Introduction</a>
                                        <a href = '/cassembly'>The Constituent Assembly</a>
                                        <a href = '/influences'>Influences</a>
                                        <a href = '/structure'>Structure</a>
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

var names = [];
app.get('/submit-name', function(req,res){
    var name = req.query.name;
    names.push(name);
    //JSON
    res.send(JSON.stringify(names));
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



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
