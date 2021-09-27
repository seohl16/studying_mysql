var http = require('http');
var url = require('url');
var users = require('./lib/users');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/'){
    if (queryData.id === undefined){
      users.home(request, response, queryData);
    } else {
      users.user(request, response, queryData);
    };
  } else if (pathname === '/create') {
    users.ucreate(request, response, queryData);
  } else if (pathname === '/create_process') {
    users.ucreate_process(request, response, queryData);
  } else if (pathname === '/update') {
    users.updateu(request, response, queryData);
  } else if (pathname === '/update_process') {
    users.update_process(request, response);
  } else if (pathname === '/delete_process') {
    users.udelete_process(request, response, queryData);
  } else {
    response.writeHead(404);
    response.end('Not found');
  };
  //   var _url = request.url;
  //   var queryData = url.parse(_url, true).query;
  //   var pathname = url.parse(_url, true).pathname;
  //   if(pathname === '/'){
  //     if(queryData.id === undefined){
  //       topic.home(request, response);
  //     } else {
  //     topic.index(request, response, queryData);
  //   } 
  // } else if(pathname === '/create'){
  //     topic.create(request, response);
  //   } else if(pathname === '/create_process'){
  //     topic.createprocess(request, response);
  //   } else if(pathname === '/update'){
  //     topic.update(request, response, queryData);
  //   } else if(pathname === '/update_process'){
  //     topic.updateprocess(request, response);
  //   } else if(pathname === '/delete_process'){
  //     topic.deleteprocess(request, response);
  //   } else {
  //     response.writeHead(404);
  //     response.end('Not found');
  //   }
});

app.listen(3000);
