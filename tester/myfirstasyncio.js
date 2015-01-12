/**
 * Created by llanzo on 1/12/15.
 */
var fs = require('fs');

var data = '';

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if(err) {
        console.log("Reading file failed with error: " + err);
        return err;
    }
    callmemabye(data);
});

var callmemabye = function(fileContents) {
    var count = fileContents.split('\n').length;
    count--;
    console.log(count);
}

/**OFFICIAL SOLUTION:
 *     var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

 */

