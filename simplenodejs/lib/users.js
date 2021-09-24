var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');

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
        });
      });
}


