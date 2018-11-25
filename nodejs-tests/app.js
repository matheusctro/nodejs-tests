var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
    //res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/contact', function(req, res){
    //res.sendFile(__dirname + '/contact.html');
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
    //res.sendFile(__dirname + '/contact.html');
    console.log(req.body);
    res.render('contact-sucess', {data: req.body});
});

app.get('/profile/:name', function(req, res){
    //res.send('You requested to see a profile with the name of ' + req.params.name);
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log('request was made' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact-us'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Yo dawgs, now listening to port 3000');
*/

/*
var server = http.createServer(function (req, res) {
    console.log('request was made' + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Yo dawgs, now listening to port 3000');
*/
/*
var server = http.createServer(function (req, res) {
    console.log('request was made' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
    myReadStream.pipe(res);
    //res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Yo dawgs, now listening to port 3000');
*/
