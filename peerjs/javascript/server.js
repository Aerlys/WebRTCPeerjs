var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

app.get('/myapp', function(req, res, next) { 
	res.header('Access-Control-Allow-Origin', '*');
	res.send('Hello world!'); });

var server = require('http').createServer(app);

var options = {
    debug: true
}

app.use('/myapp', ExpressPeerServer(server, options));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

server.listen(9000);