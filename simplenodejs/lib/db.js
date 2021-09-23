var mysql = require('mysql');

var db = mysql.createConnection({
	host:'localhost', 
	user:'root', 
	password:'', 
	// database: 'opentutorials'
	database : 'express_db'
  });
  
db.connect(function (err) {
	if (err) throw err;
	console.log("Connected");
	// Error : ER_DB_CREATE_EXISTS
	// db.query(`CREATE DATABASE express_db`, function (err, result) {
	// 	if (err) throw err;
	// 	console.log('database created');
	// });
	
	// const sql = `CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	// 	name VARCHAR(255) NOT NULL, 
	// 	email VARCHAR(255) NOT NULL)`;
	// db.query(sql, function (err, result) {
	// 	if (err) throw err;
	// 	console.log('table created');
	// });

	// const sql = `INSERT INTO users (id, name, email)
	// VALUES ('90', 'William', 'johnn@email.com')`;
	// db.query(sql, function (err, result) {
	// 	if (err) throw err;
	// 	console.log('inserted data');
	// });

	const sql = `select * from users`;
	db.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});


module.exports = db;
// exports db.... 
