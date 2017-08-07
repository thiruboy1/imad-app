var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'My First Article',
    heading: 'Article One',
    date: 'sep 2017',
    content: `
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article,This is content of my article,This is content of my article, This is content of my article, </p>
     `
    
};
var articletwo = {
    title: 'My 2nd Article',
    heading: 'Article two',
    date: 'oct 2017',
    content: `
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article,This is content of my article,This is content of my article, This is content of my article, </p>
     `
    
};
var articlethree = {
    title: 'My 3rd Article',
    heading: 'Article three',
    date: 'nov 2017',
    content: `
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article, This is content of my article, </p>
    <p>This is content of my article, This is content of my article, This is content of my article,This is content of my article, This is content of my article,This is content of my article,This is content of my article, This is content of my article, </p>
     `
    
};
function createtemplete(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
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
        <a href="/">Home</a>
       
        <a href="article-one">${title}</a>
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

app.get('/article-one', function(req, res){
    res.send(createtemplete(articleone));
});

app.get('/article-two', function(req, res){
    res.send(createtemplete(articletwo));
});
app.get('/article-three', function(req, res){
    res.send(createtemplete(articlethree));
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
