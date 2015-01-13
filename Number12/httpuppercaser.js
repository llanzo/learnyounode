/**
 * Created by llanzo on 1/13/15.
 */
var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var port = process.argv[2];
var filename = process.argv[3];

var callback = function(req, res) {
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })
    ).pipe(res);

}

var server = http.createServer(function(request, response) {
        if(request.method == "POST"){
            callback(request, response)
        }

    }
);

server.listen(port);

/**OFFICIAL SOLUTION
 var http = require('http')
 var map = require('through2-map')

 var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

 server.listen(Number(process.argv[2]))

*/
