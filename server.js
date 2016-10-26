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


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'facesimplon',
  database : 'compta'
});

connection.connect();

connection.query('SELECT * FROM depenses', function(err, rows, fields) {
	if (err) {
		console.log(err);
		connection.end();
		return;
	}

  	if (rows.length > 0)  { 
		var firstResult = rows[0];
		console.log('id: ' + firstResult['id']);
		console.log('montant: ' + firstResult['montant']);
		console.log('name: ' + firstResult['name']);
    } 
    else {
    	console.log("Pas de données");
    }

});

connection.end();

