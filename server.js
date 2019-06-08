var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('NodeJS App');
});
server.listen(6060);
console.log('El servidor está funcionando en http://localhost:6060/');
