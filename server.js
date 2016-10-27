require('colors');

var express	= require('express'),
	bodyParser = require('body-parser'),
	http = require('http'),
	path = require('path'),
	serveStatic = require('serve-static');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3001);
app.use('/assets', express.static('public'));
app.use(serveStatic(path.join(__dirname, 'views/app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index');
}),

server.listen(app.get('port'), function() {
	console.log('✔︎︎ Express server on http://localhost:%d/'.blue, app.get('port'));
});

