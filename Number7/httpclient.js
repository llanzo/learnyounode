/**
 * Created by llanzo on 1/12/15.
 */
var http = require('http');
var link = process.argv[2];

var callback = function(response) {
    console.log(response);

}

if(link) {
    http.get(link, function(res) {
        res.setEncoding('utf8');
        res.on('error', function(err) {
            console.log("error occured: " + err.message);
        } );
        res.on('data', function(chi) {
            callback(chi)
        });
    }).on('error', function(e) {
        console.log("error occured: " + e.message);
    });

}
else {
    console.log("Please enter a link to get as an argument to this program");
}

/**OFFICIAL SOLUTION
 var http = require('http')

 http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/
