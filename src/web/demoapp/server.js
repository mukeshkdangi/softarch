const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const request = require('request');
var router = express.Router();
var debug = true;
var local = false;
app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.get('/details-hadoop', (req, res) => {
	//console.log("hadoop details retrieved");
	var url = "http://sarch.us-east-1.elasticbeanstalk.com/getLevelOneDetails?fileDep=hadoop-0.1.0_deps.rsf&clusterDep=hadoop-0.1.0_relax_clusters_fn.rsf";
	request.get(url,function(error, response, body) {
		if (error === null) {
			res.send(body);
		}
	});
});

app.get('/details-log', (req, res) => {
	//console.log("log details retrieved");
    var url = "http://sarch.us-east-1.elasticbeanstalk.com/getLevelOneDetails?fileDep=log4j-api_relax_clusters_fn.rsf&&clusterDep=log4j-api_deps.rsf";
	request.get(url,function(error, response, body) {
		if (error === null) {
			res.send(body);
		}
	});
});

if (local) {
	const port = process.env.PORT || '3000';
	app.set('port', port);

	const server = http.createServer(app);

	server.listen(port, function(request,response) {
		if (debug)
			console.log('listen');
	});
}
else {
	if (module === require.main) {
		var server = app.listen(process.env.port || 8081, function () {
		var port = server.address().port;
	});
	}
}

module.exports = app;
//module.exports = router;