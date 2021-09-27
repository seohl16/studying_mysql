var mysql = require('mysql');
const fs = require('fs');
const { builtinModules } = require('module');
const sqlite3 = require('sqlite3').verbose();

const dataSql = fs.readFileSync("./sample.sql").toString();

let db = new sqlite3.Database("mydatabase", err => {
	if (err) {
		return console.err(err.message);
	}
	console.log("connected to the in-memory SQLite database.");
})

// const dataArr = dataSql.toString().split(";");

// db.serialize( () => {
// 	console.log(dataArr);
// 	db.run("PRAGMA foreign_keys=OFF;");
// 	db.run("BEGIN TRANSACTION;");
// 	dataArr.forEach(query => {
// 		if (query && !query.includes("/*") && !query.includes("--")) {
// 			query += ";";
// 			console.log(query);
// 			// db.run("\n\n;", err => {
// 			// 	if (err) console.log(err);
// 			// })
// 			db.run(query, err => {
// 				if (err) throw err;
// 			})
// 		}
// 	})
// 	db.run("COMMIT;");
// 	db.all(`SELECT * from companyl`, function (err,result) {
// 		console.log(result);
// 	})
// 	console.log("finished");
// })

// db.close(err => {
// 	if (err) {
// 		return console.err(err.message);
// 	}
// 	console.log("closed database");
// })

module.exports = db;