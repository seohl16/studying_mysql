var mysql = require('mysql');

var db = mysql.createConnection({
	host:'localhost', 
	user:'root', 
	password:'', 
	// database: 'opentutorials'
	// database : 'express_db'
  });
  
db.connect(function (err) {
	if (err) throw err;
	console.log("Connected");
	// Error : ER_DB_CREATE_EXISTS
	db.query(`CREATE DATABASE IF NOT EXISTS express_db`, function (err, result) {
		if (err) throw err;
		console.log('database created');
	});
	db.query(`use express_db`, function (err, result) {
		if (err) throw err;
		console.log('use database express_db');
	})
	var sql = ``;
	sql = `DROP TABLE IF EXISTS users`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log('table droped');
	});
	
	sql = `CREATE TABLE IF NOT EXISTS users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
		name VARCHAR(255) NOT NULL, 
		email VARCHAR(255) NOT NULL,
		UNIQUE INDEX (name))`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log('table created');
	});

	sql = `REPLACE INTO users (id, name, email)
	VALUES (NULL, 'William', 'william@email.com')`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log('inserted data');
	});


	sql = `REPLACE INTO users (id, name, email)
	VALUES (NULL, 'JOHN', 'johnn@email.com')`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log('inserted data');
	});

	sql = `REPLACE INTO users (id, name, email)
	VALUES (NULL, 'JOHN', 'johnn@email.com')`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log('inserted data');
	});

	sql = `select * from users`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});


module.exports = db;
// exports db.... 
