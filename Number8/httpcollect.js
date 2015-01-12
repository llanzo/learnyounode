/**
 * Created by llanzo on 1/12/15.
 */
var http = require('http');
var bl = require('bl');
var link = process.argv[2];

var theBuff = new bl();
var callback = function(response) {
    theBuff.append(response);
    //console.log(theBuff.length);
    //console.log(theBuff.toString());
}
var lastcall = function() {
    console.log(theBuff.length);
   console.log(theBuff.toString());
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
        res.on('end', function() {
            lastcall();
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
 var bl = require('bl')

 http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/
