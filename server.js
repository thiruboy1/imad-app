var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
 'article-one': {
    title: 'My First Article',
    heading: 'Article One',
    date: 'sep 2017',
    navcontent :`<a href="/">Home</a>
        <a href="article-one">Article ONE</a>
        <a href="article-two">Article Two</a>
        <a href="article-three">Article Three</a>`,
        
    content: `
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article,This is content of my article,This is content of my article, This is content of my article, </p>
     `
    
},
 'article-two' : {
    title: 'My 2nd Article',
    heading: 'Article two',
    date: 'oct 2017',
     navcontent:
     `<a href="/">Home</a>
        <a href="article-one">Article ONE</a>
        <a href="article-two">Article Two</a>
        <a href="article-three">Article Three</a>
        `,
    content: `
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article,This is content of my article,This is content of my article, This is content of my article, </p>
     `
    
},
'article-three' : {
    title: 'My 3rd Article',
    heading: 'Article three',
    date: 'nov 2017',
     navcontent:`
     <a href="/">Home</a>
        <a href="article-one">Article ONE</a>
        <a href="article-two">Article Two</a>
        <a href="article-three">Article Three</a>
        `,
    content: `
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article,This is content of my article,This is content of my article, This is content of my article, </p>
     `
    
},

};

function createtemplete(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var navcontent = data.navcontent;
var htmltemplete = 
`
<html>
    <head> 
      <link href="/ui/style.css" rel="stylesheet" />
            <title>${title}</title>
    </head>
<body>
    <div class="continer">
    <div>
      ${navcontent}
       
       
    </div>
    <hr/>
    <h3>
        ${heading};
    </h3>
    <div> ${date}</div>
    <ul>
    ${content};
    </ul>
     <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        </div>
    
</body>
</html>
`;
return htmltemplete
    

}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createtemplete(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
