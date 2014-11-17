var http = require('http');
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/myapp'});

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });
    response.end('Hello World\n');
}).listen(1337);