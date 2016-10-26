var http = require('http');
var request = require('superagent');
require('superagent-proxy')(request);

http.createServer(function(req, res) {
      console.log('req.url', req.url);

      request.get('https://packagecontrol.io' + req.url).proxy('http://127.0.0.1:1080').pipe(res);
    })
    .listen(10000, function(err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log('server is running at port: 10000.')
      }
    });
