var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');
const { request, response } = require('express');

exports.home = function (req, res, queryData) {
	db.query(`SELECT * FROM users`, function(err, users) {
        var title = 'Welcome';
        var description = 'Hello, users';
        var list = template.list(users);
        var html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        res.writeHead(200);
        res.end(html);
        });
}

exports.user = function (req, res, queryData) {
	db.query(`SELECT * FROM users`, function(err, users) {
        if (err) {  throw err; }
        db.query(`SELECT * FROM users WHERE id=?`, [queryData.id], function (err2, user) {
          if (err2) {throw err2; }
		  if (user.length <= 0) {
			  res.writeHead(302, {Location: `/`});
			  res.end();
		  } else {
			console.log(queryData.id);
			console.log(user);
			var title = user[0].name;
			var description = user[0].email;
			var list = template.list(users);
			var html = template.HTML(title, list,
				`<h2>${title}</h2>${description}`,
					` <a href="/create">create</a>
						<a href="/update?id=${queryData.id}">update</a>
						<form action="delete_process" method="post">
						<input type="hidden" name="id" value="${queryData.id}">
						<input type="submit" value="delete">
						</form>`
			);
			res.writeHead(200);
			res.end(html);
		  }
        });
      });
}

exports.ucreate = function (req, res, queryData) {
	db.query(`SELECT * from users`, function (err, users) {
		if (err) throw err;
		var title = 'Create'; 
		var list = template.list(users);
		var html = template.HTML(title, list, 
			`<form action = "/create_process" method="post">
			<p><input type="text" name="name" placeholder="name"></p>
			<p>
			<textarea name="email" placeholder="email"></textarea>
			</p>
			<p> <input type="submit"></p>
			</form>
			`, `<a href="/create">create</a>`);
		res.writeHead(200);
		res.end(html);
	});
}

exports.ucreate_process = function (req, res, queryData) {
	var body = '';
	req.on('data', function (data) {
		body = body + data;
	});
	req.on('end', function () {
		var post = qs.parse(body);
		db.query(`INSERT INTO users (name, email) VALUES(?, ?)`, [post.name, post.email], function (err, result) {
			if (err) throw err;
			res.writeHead(302, {Location: `/?id=${result.insertId}`});
			res.end();
		})
	})
}