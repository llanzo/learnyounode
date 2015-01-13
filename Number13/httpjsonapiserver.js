/**
 * Created by llanzo on 1/13/15.
 */
var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require("url");
var port = process.argv[2];
var filename = process.argv[3];
var submittedDate;

var callback = function(req, res) {
    var requested = url.parse(req.url, true);
    var submittedDate = new Date(requested.query.iso);
    var submittedMilliseconds = Number(requested.search.substring((requested.search.length-4), (requested.search.length-1) ) );
    console.log(submittedMilliseconds);
    submittedDate.setMilliseconds(submittedMilliseconds);
    console.log(submittedDate);
    console.log(submittedDate.getMilliseconds());
//    console.log(requested);
    if(requested.pathname == '/api/unixtime') {
        res.end(epochrocked(submittedDate));
    }
    else {
        res.end(timeboxed(submittedDate));
    }
}

var server = http.createServer(function(request, response) {
    callback(request, response)
    }
);

server.listen(port);

var timeboxed = function(enteredDate) {
    //var dateInSeconds = Date.parse(inputString.slice(4));
//    console.log("Hi" + enteredDate);
    var retVal = {
        "hour": enteredDate.getHours(),
        "minute": enteredDate.getMinutes(),
        "second":enteredDate.getSeconds()
    }
    return JSON.stringify(retVal);
}

var epochrocked = function(enteredDate) {
    //var dateInSeconds = Date.parse(inputString.slice(4));
    var epochbuilder = Date.parse(enteredDate) + enteredDate.getMilliseconds();
    var retVal = {
        "unixtime": epochbuilder
    }
    return JSON.stringify(retVal);
}

/**OFFICAL SOLUTION
 ────────────────────────────────────────────────────────────────────────────────
 var http = require('http')
 var url = require('url')

 function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

 function unixtime (time) {
      return { unixtime : time.getTime() }
    }

 var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
 server.listen(Number(process.argv[2]))
*/
