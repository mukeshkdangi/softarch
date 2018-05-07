const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const request = require('request');
var router = express.Router();
var debug = true;
app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/lv1/index.html'));
});

app.get('/details', (req, res) => {
    var url = "http://sarch.us-east-1.elasticbeanstalk.com/getLevelOneDetails";
	request.get(url,function(error, response, body) {
		if (error === null) {
			res.send(body);
		}
	});
});


// const port = process.env.PORT || '3000';
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, function(request,response) {
// 	if (debug)
// 		console.log('listen');
// });


if (module === require.main) {
// Start the server
	var server = app.listen(process.env.port || 8081, function () {
	var port = server.address().port;
});
}
module.exports = app;
//module.exports = router;