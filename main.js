const http = require('http');

const hostname = '172.31.26.253';
const port = 8000;

const server = http.createServer((req, res) => { 
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Welcome to the Beginnings of MethCode');
});

server.listen(port, hostname, () => {
	console.log(`MethCode is running`);
});
