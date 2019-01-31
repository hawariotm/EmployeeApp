var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var employees = require(__dirname + '/lib/employees.json');
var salaries = require(__dirname + '/lib/salary.json');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/employees', function(req, res){
	res.json(employees);
});

app.get('/api/salaries', function(req, res){
	res.json(salaries);
});

app.listen(4000, function(){
	console.log('server is running on port 3000..');
});