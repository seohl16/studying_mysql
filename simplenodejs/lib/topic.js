var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');

exports.home = function (request, response) {
	db.query(`SELECT * FROM topic`, function(err, topics) {
	var title = 'Welcome';
	var description = 'Hello, Node.js';
	var list = template.list(topics);
	var html = template.HTML(title, list,
	  `<h2>${title}</h2>${description}`,
	  `<a href="/create">create</a>`
	);
	response.writeHead(200);
	response.end(html);
	});
}

exports.index = function (request, response, queryData) {
	db.query(`SELECT * FROM topic`, function(err, topics) {
        if (err) {  throw err; }
        db.query(`SELECT * FROM topic WHERE id=?`, [queryData.id], function (err2, topic) {
          if (err2) {throw err2; }
          var title = topic[0].title;
          var description = topic[0].description;
          var list = template.list(topics);
          var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
                  ` <a href="/create">create</a>
                    <a href="/update?id=${queryData.id}">update</a>
                    <form action="delete_process" method="post">
                      <input type="hidden" name="id" value="${queryData.id}">
                      <input type="submit" value="delete">
                    </form>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
}
	
exports.create = function (request, response) {
	db.query(`SELECT * FROM topic`, function(err, topics) {
        var title = 'Create';
        var list = template.list(topics);
        var html = template.HTML(title, list,
          `<form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
      `, '<a href="/create">create</a>');
        response.writeHead(200);
        response.end(html);
      });
}

exports.createprocess = function (request, response) {
	var body = '';
	request.on('data', function(data){
		body = body + data;
	});
	request.on('end', function(){
		var post = qs.parse(body);

		db.query(`INSERT INTO topic (title, description, created, author_id)
		VALUES(?, ?, NOW(), ?)`, [post.title, post.description, 1], 
		function (err, result) {
		if (err){ 
			throw err;
		}
		response.writeHead(302, {Location: `/?id=${result.insertId}`});
		response.end();
		})
	});
}

exports.update = function (request, response, queryData) {
	db.query(`SELECT * FROM topic`, function(err, topics) {
        if (err) { throw err ; }
        db.query(`SELECT * FROM topic WHERE id=?`, [queryData.id], function (err2, topic) {
          if (err2) { throw err2 ; }
          var list = template.list(topics);
          var html = template.HTML(topic[0].title, list,
            `<form action="/update_process" method="post">
                    <input type="hidden" name="id" value="${topic[0].id}">
                    <p><input type="text" name="title" placeholder="title" value="${topic[0].title}"></p>
                    <p>
                      <textarea name="description" placeholder="description">${topic[0].description}</textarea>
                    </p>
                    <p>
                      <input type="submit">
                    </p>
                  </form>
        `, `<a href="/create">create</a> <a href="/update?id=${topic[0].title}">update</a>`);
          response.writeHead(200);
          response.end(html);
        })
      });
}

exports.updateprocess = function (request, response) {
	var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`UPDATE topic SET title=?, description=?, author_id=1 WHERE id=?`, [post.title, post.description, post.id], function (err, result) {
            response.writeHead(302, {Location: `/?id=${post.id}`});
            response.end();
          })
      });
}

exports.deleteprocess = function (request, response) {
	var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          db.query(`DELETE FROM topic WHERE id=?`, [post.id], function (err, result) {
            if (err) {
              throw err;
            }
            response.writeHead(302, {Location: `/`});
            response.end();
          });
      });
}
