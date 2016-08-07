var ws = require('ws');
var wsList = [];
console.log(ws)
var ServiceWs = ws.Server;
var wss = new ServiceWs({port:8888},function(clent){
	console.log('123');
	console.log(clent);
});
wss.on('connection', function(ws){
	console.log(ws);
	ws.send("service received");
	ws.on('message', function(message){
		console.log(message);
	});
	wsList.push(ws);
});
window.a