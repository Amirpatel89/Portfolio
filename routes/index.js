var express = require('express');
var router = express.Router();
var config = require('../config/config.js');
var mysql = require('mysql');
var lodash = require('lodash')
var connection = mysql.createConnection(config.db);



connection.connect((error)=>{
	if(error){
		throw error;
	}else{
		console.log('connected')
	}
})




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {})
});


router.post('/contact', (req, res, next)=>{
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var insertQuery = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?);`;
	connection.query(insertQuery, [name, email, message], (error, results)=>{
		if(error){
			throw error;
		}else{
		res.redirect('/?msg=received');
		// $('.thank-you').innerHTML == "Thank you! Message saved to Database.";

		}
	});
});

router.get('/resume', function(req, res, next){
	res.render('resume', {})
});





module.exports = router;
