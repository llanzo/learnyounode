/**
 * Created by llanzo on 1/12/15.
 */
var net = require('net');

var padder = function(input) {
    if (input.length < 2) {
        return "0"+input;
    }
    else {
        return input;
    }
}

var timestamp = function(time) {
    var retVal = "";
    retVal += time.getFullYear() + "-";
    retVal += padder( (Number(time.getMonth()) + 1).toString() ) + "-";
    retVal += padder( (Number(time.getDate()).toString() ) ) + "-";
    retVal += padder( (Number(time.getHours()).toString() ) ) + ":";
    retVal += padder( (Number(time.getMinutes()).toString() ) ) + " ";
    return retVal;
}

var server = net.createServer(function(socket) {
    var time = new Date();
    socket.setEncoding('utf8');
   console.log("Connection from: " + socket + " at " + time );
  socket.end(timestamp(time) );

});

var portnumber = process.argv[2];

server.listen(portnumber);
